<script>
	import { fade } from 'svelte/transition';

	let isSidebarOpen = false;

	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}
</script>

<nav>
	<div class="nav-start">
		<a href="/"><h1>EngageSI</h1></a>
	</div>

	<button class="toggle-sidebar-btn" on:click={toggleSidebar}>
		<img src="/menu.svg" alt="Hamburger Menu Icon" class="menu-icon" />
	</button>

	<div class="nav-end">
		<a href="/">About</a>
		<a href="/departments">Deparments</a>
		<button class="sign-in-btn">Sign In</button>
	</div>
</nav>

<div class="sidebar {isSidebarOpen ? 'active' : ''}">
	<a href="/">About</a>
	<a href="/departments">Deparments</a>
	<button class="sign-in-btn">Sign In</button>
</div>

<div
	class="custom-overlay {isSidebarOpen ? 'custom-overlay-active' : ''}"
	on:click={toggleSidebar}
	on:keydown={toggleSidebar}
	in:fade={{ duration: 100 }}
	out:fade={{ duration: 100 }}
	role="presentation"
	tabindex="-1"
/>

<style>
	nav {
		z-index: 20;
		position: fixed;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		background-color: rgb(var(--color-background-500));
		padding: 1rem;
	}

	nav > .nav-end {
		display: none;
		align-items: center;
		gap: 1rem;
	}

	.menu-icon {
		width: 32px;
	}

	.toggle-sidebar-btn {
		background-color: transparent;
		border: none;
		outline: none;
	}

	.sidebar {
		z-index: 40;
		position: fixed;
		padding: 5rem 5rem 3rem 1.5rem;
		top: 0;
		right: -190px;
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		background-color: rgb(var(--color-background-500));
	}

	.sidebar.active {
		right: 0;
	}

	.sign-in-btn {
		border: none;
		outline: none;
		cursor: pointer;
		background-color: rgb(var(--color-text));
		color: rgb(var(--color-background-300));
		padding: 0.4rem 1rem;
		border-radius: 10px;
		font-weight: 500;
	}

	.custom-overlay {
		position: fixed;
		display: none;
		left: 0;
		top: 0;
		z-index: 30;
		height: 100vh;
		width: 100vw;
		background-color: rgba(15, 23, 42, 0.25);
	}

	.custom-overlay-active {
		display: block;
	}

	a {
		color: rgb(var(--color-text));
		text-decoration: none;
	}

	@media screen and (min-width: 640px) {
		nav > .nav-end {
			display: flex;
		}

		.menu-icon {
			display: none;
		}
	}
</style>
