// src/routes/+page.server.ts
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { message, superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { loginSchema } from '$lib/schemas';



export const load: PageServerLoad = async ({ url, locals: { supabase } }) => {
	const { data, error } = await supabase.auth.getClaims();

	// if the user is already logged in return them to the account page
	if (!error && data?.claims) {
		redirect(303, '/account');
	}
	const form = await superValidate(zod4(loginSchema));
	return { url: url.origin, form };
};

export const actions: Actions = {
	default: async ({ url, locals: { supabase }, request }) => {
		const form = await superValidate(request, zod4(loginSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		const { error } = await supabase.auth.signInWithOtp({
			email: form.data.email,
			options: { emailRedirectTo: url.origin }
		});

		if (error) {
			return message(form, 'There was an issue, Please contact support.', {
				status: 400
			});
		}
		return message(form, 'Please check your email for a magic link to log into the website.');
	}
};
