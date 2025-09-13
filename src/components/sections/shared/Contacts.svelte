<script lang="ts">
	import { Frame, Heading } from "components/common";

	import { MailIcon, InstagramIcon, PhoneIcon } from '@lucide/svelte';
	import { getTranslator } from '$lib/i18n/translator';
	import { header, summary, formSubmitUrl, socials, formData } from 'data/contacts'

	let t = $derived(getTranslator());

	let honeypot = $state("");
	let name = $state("");
	let email = $state("");
	let message = $state("");
	let success : boolean | null = $state(null);
	let sending = $state(false);

	const handleSubmit = async (e : any) => {
    	e.preventDefault();

		if (success != null || honeypot)
			return;

		sending = true;

		const formData = new FormData();
		formData.append("name", name);
		formData.append("message", message);
		formData.append("email", email);
		formData.append("honeypot", honeypot);

    try {
      const response = await fetch(formSubmitUrl, { method: "POST", body: formData });
	  success = response.ok;
    } catch (error) {
		success = false;
    }
  };

</script>



<section class="contacts">
	<Heading
		title={t(header)}
		summary={t(summary)}
	/>


	<div class="content">

		<div class="logo">
			<img src="logo-full.svg" alt="logo" />
			<div class="socials">
				<a href="{socials.instagram}" target="_blank" ><InstagramIcon /></a>
				<a href="mailto:{socials.email}" ><MailIcon /></a>
				<a href="tel:{socials.phone}" ><PhoneIcon /></a>
			</div>
		</div>

		<div class="form-wrapper">
			{#if success == null}
				{#if !sending}
					<form onsubmit="{handleSubmit}">

						<input autocomplete="name" required placeholder={t(formData.namePlaceholder)} bind:value={name} />
						<input autocomplete="email" type="email" bind:value={email} required placeholder={t(formData.emailPlaceholder)} />
						<textarea rows="5" required	placeholder={t(formData.messagePlaceholder)} bind:value={message}></textarea>

						<input type="text" bind:value={honeypot} class="hidden" />

						<button>
							<Frame>
								<span class="inline-block px-4 py-1">{t(formData.buttonText)}</span>
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
	</div>

</section>

<style>
	@reference "style";

	.contacts {
		@apply w-full px-4;

		& > .content {
			@apply flex flex-col p-6 gap-16;
			@apply md:flex-row md:gap-8;

			& > .logo {
				@apply flex flex-col gap-2 justify-center-safe items-center-safe;
				@apply order-2 md:order-1;
				@apply basis-auto grow-0 shrink-0;

				& > img {
					@apply w-3xs select-none;
				}

				& > .socials {
					@apply flex gap-4 justify-center;

					& > a {
						@apply w-8 text-moonlight-dim;
						@apply transition-all duration-300;
						@apply hover:text-neutral-100;
					}
				}
			}

			& > .form-wrapper {
				@apply max-w-xl w-full order-1;

				& > form {
					@apply w-full;
					@apply flex flex-wrap gap-4 justify-center;

					& > input,
					& > textarea {
						@apply p-2;
						@apply transition-all duration-300;
						@apply text-neutral-100 bg-neutral-800 border-b border-b-neutral-500;
						@apply placeholder:italic placeholder:text-neutral-500;
						@apply user-invalid:border-b-error;
						@apply focus:border-b-moonlight;
					}

					& > input {
						@apply grow basis-0 min-w-40;
					}

					& > textarea {
						@apply w-full;
					}
				}
			}
		}
	}





	button {
		@apply uppercase grow;
	}

</style>
