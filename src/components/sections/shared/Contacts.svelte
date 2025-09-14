<script lang="ts">
	import { Heading, PrimaryButton } from "components/common";

	import { MailIcon, InstagramIcon, PhoneIcon, LoaderCircleIcon } from '@lucide/svelte';
	import { getTranslator } from '$lib/i18n/translator';
	import { header, summary, formSubmitUrl, socials, formData } from 'data/contacts'

	let t = $derived(getTranslator());

	let honeypot = $state("");
	let name = $state("");
	let email = $state("");
	let message = $state("");
	let currentState : "fill" | "sending" | "success" | "error" = $state("fill");

	const handleSubmit = async (e : any) => {
    	e.preventDefault();

		currentState = "success";
		return;

		if (currentState != "fill" || honeypot)
			return;

		currentState = "sending";

		const formData = new FormData();
		formData.append("name", name);
		formData.append("message", message);
		formData.append("email", email);
		formData.append("honeypot", honeypot);

		try {
			const response = await fetch(formSubmitUrl, { method: "POST", body: formData });
			currentState = response.ok ? "success" : "error";
		} catch (error) {
			currentState = "error";
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

		<form onsubmit="{handleSubmit}">
			<div class="fill" class:active={currentState == "fill"} class:faded={currentState == "sending"}>
				<input required autocomplete="name" placeholder={t(formData.namePlaceholder)} bind:value={name} />
				<input required autocomplete="email" type="email" bind:value={email} placeholder={t(formData.emailPlaceholder)} />
				<textarea required rows="5" placeholder={t(formData.messagePlaceholder)} bind:value={message}></textarea>

				<input type="text" bind:value={honeypot} class="hidden" />
				<PrimaryButton text={t(formData.buttonText)} glow={currentState == "fill"} />
			</div>

			<div class="form-overlay spinner" class:active={currentState == "sending"}><LoaderCircleIcon /></div>
			<div class="form-overlay success" class:active={currentState == "success"}>Success!</div>
			<div class="form-overlay fail" class:active={currentState == "error" }>Fail!</div>
		</form>

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

			& > form {
				@apply max-w-xl w-full order-1;

				& > .fill {
					@apply w-full flex flex-wrap gap-4 justify-center;
					@apply transition-[opacity,visibility] duration-1000 transition-discrete;
					@apply opacity-0 invisible;

					&.active {
						@apply opacity-100 visible;
					}

					&.faded {
						@apply opacity-50 visible;
					}

					& > input,
					& > textarea {
						@apply p-2;
						@apply transition-all duration-500;
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

					& > :global(.primary-button) {
						@apply grow;
					}
				}

				& > .form-overlay {
					@apply transition-[opacity,visibility] duration-1000 transition-discrete;
					@apply absolute top-0 left-0 w-full h-full;
					@apply flex justify-center-safe content-center-safe items-center-safe;
					@apply opacity-0 invisible;

					&.active {
						@apply visible opacity-100;
					}

					&.spinner {
						@apply bg-neutral-900/70;

						& :global(svg) {
							@apply w-8 h-8 animate-spin;
						}
					}
				}
			}
		}
	}

</style>
