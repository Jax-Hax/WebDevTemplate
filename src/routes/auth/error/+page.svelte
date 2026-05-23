<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class="flex min-h-screen items-center justify-center bg-base-200 p-4">
	<div class="card w-full max-w-md border border-base-300 bg-base-100 shadow-2xl">
		<div class="card-body items-center text-center">
			<div class="avatar mb-2">
				<div class="w-20 rounded-full bg-error text-error-content flex items-center justify-center">
					<span class="text-3xl text-center m-auto">✕</span>
				</div>
			</div>

			<h1 class="text-3xl font-bold">Login Failed</h1>

			<p class="max-w-sm text-base-content/70">
				We couldn't sign you in. Your session may have expired, your credentials may be incorrect,
				or something went wrong.
			</p>

			<div class="mt-4 card-actions w-full">
				<a href={resolve('/')} class="btn w-full btn-primary"> Try Again </a>
			</div>

			<p class="mt-2 text-sm text-base-content/50">
				If this keeps happening, try refreshing the page or signing in again.
			</p>
		</div>
	</div>
</div>
