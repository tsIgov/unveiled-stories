<script lang="ts">
	import { MailIcon, InstagramIcon, PhoneIcon } from '@lucide/svelte';
	import { getTranslator } from '$lib/i18n/translator';
	import { page } from '$app/state';

	let t = $derived(getTranslator());
	// let t = $derived(page.data.translator);

	import { Frame, Heading } from "components/common";

	let honeypot = $state("");
	let name = $state("");
	let email = $state("");
	let message = $state("");
	let success : boolean | null = $state(null);
	let sending = $state(false);

	const handleSubmit = async (e : any) => {
    	e.preventDefault();

		sending = true;

		if (honeypot) {
			return;
		}

		const formData = new FormData();
		formData.append("name", name);
		formData.append("message", message);
		formData.append("email", email);
		formData.append("honeypot", honeypot);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx9XtTnkOu3Q0bni0QE_yS1SAndeYqmhRF1odCgEh9qgy53ih5q9kSA8mZCbSdtgt0c/exec",
        {
          method: "POST",
          body: formData
        }
      );

	  success = response.ok;
    } catch (error) {
		success = false;
    }
  };

</script>



<section>
	<Heading
		title={t({
			en: "Book Your Experience",
			bg: "Запази час"
		})}
		summary="Step into a space where your story comes alive — raw, real, and entirely yours. This is a chance to be present with everything you carry: the moments that shaped you, the emotions that move you, the parts"
	/>


	<div class="flex flex-col md:flex-row p-6 gap-16 md:gap-8">
		<div class="flex flex-col gap-2 justify-center-safe items-center-safe order-2 md:order-1 basis-auto grow-0 shrink-0">
			<img class="w-3xs" src="logo-full.svg" alt="logo" />
			<div class="flex gap-4 justify-center">
				<InstagramIcon class="w-8 text-moonlight-dim"/>
				<MailIcon class="w-8 text-moonlight-dim"/>
				<PhoneIcon class="w-8 text-moonlight-dim"/>
			</div>
		</div>

		{#if success == null}
			{#if !sending}
				<form onsubmit="{handleSubmit}" class="max-w-xl w-full flex flex-wrap gap-4 order-1">

					<input required placeholder="Enter your name" bind:value={name} />

					<input type="email" bind:value={email} required placeholder="Enter your email" />

					<textarea rows="5" required	placeholder="Tell us what's on your mind..." bind:value={message} class=" w-full"></textarea>

					<input type="text" bind:value={honeypot} class="hidden" />

					<button>
						<Frame>
							<span class="inline-block px-4 py-1"> Send</span>
						</Frame>
					</button>
				</form>
			{:else}
				<div>Loading...</div>
			{/if}
		{/if}

		{#if success == true}
			<div>Success!</div>
		{/if}

		{#if success == false}
			<div>Fail!</div>
		{/if}
	</div>

</section>

<style>
	@reference "style";

	section {
		@apply w-full px-4;
	}

	form {
		@apply justify-center;
	}

	input {
		@apply grow basis-0 min-w-40;
	}

	input,
	textarea {
		@apply p-2;
		@apply text-neutral-100 bg-neutral-800 border-b border-b-neutral-500;
		@apply placeholder:italic placeholder:text-neutral-500;
		@apply user-invalid:border-b-error;
		@apply focus:border-b-moonlight;
	}

	button {
		@apply uppercase grow;
	}

</style>
