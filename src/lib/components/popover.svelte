<script lang="ts">
	import { fade, fly } from "svelte/transition";

	export let isOpen = false;
	function toggleContainer() {
		isOpen = !isOpen;
	}
</script>

{#key isOpen}
	<div
		class="floating"
		class:active={isOpen}
		in:fly={{ y: 40, duration: 150 }}
		out:fly={{ y: 40, duration: 150 }}
	>
		<slot />
	</div>

	<div
		class="overlay"
		class:hidden={!isOpen}
		on:click={toggleContainer}
		on:keydown={toggleContainer}
		role="presentation"
		tabindex="-1"
		in:fade={{ duration: 100 }}
		out:fade={{ duration: 100 }}
	/>
{/key}

<style>
	.floating {
		position: fixed;
		z-index: 50;
		display: none;
		flex-direction: column;
		gap: 1rem;
		border-radius: 0.5rem;
		background-color: rgb(var(--color-background-500));
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		width: min(30rem, 90vw);
		padding: 1.5rem 2rem;
		left: 50%;
		top: 55%;
		transform: translate(-50%, -50%);
		transition: all 150ms ease-in;
	}

	.floating.active {
		display: flex;
		top: 50%;
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background-color: rgba(255, 255, 255, 0.15);
		z-index: 40;
		display: none;
	}

	.overlay:not(.hidden) {
		display: block;
	}
</style>
