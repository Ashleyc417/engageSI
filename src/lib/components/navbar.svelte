<script>
	import { fade } from "svelte/transition";

	export let profile;

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
		<a href="/departments">Departments</a>
		<!-- Sign In Button that navigates to the sign-in page -->
		{#if profile}
			<a href="/dashboard">
				<button class="sign-in-btn">Dashboard</button>
			</a>
		{:else}
			<a href="/signin">
				<button class="sign-in-btn">Sign In</button>
			</a>
		{/if}
	</div>
</nav>

<div class="sidebar {isSidebarOpen ? 'active' : ''}">
	<button class="toggle-sidebar-btn" on:click={toggleSidebar}>
		<img src="/close.svg" alt="Close Sidebar Icon" class="close-icon" />
	</button>

	<a href="/">About</a>
	<a href="/departments">Departments</a>
	<!-- Sign In Button that navigates to the sign-in page -->
	{#if profile}
		<a href="/dashboard">
			<button class="sign-in-btn">Dashboard</button>
		</a>
	{:else}
		<a href="/signin">
			<button class="sign-in-btn">Sign In</button>
		</a>
	{/if}
</div>

<div
	class="custom-overlay {isSidebarOpen ? 'custom-overlay-active' : ''}"
	on:click={toggleSidebar}
	on:keydown={toggleSidebar}
	in:fade|global={{ duration: 100 }}
	out:fade|global={{ duration: 100 }}
	role="presentation"
	tabindex="-1"
/>

<style>
	h1 {
		font-size: 2rem;
	}

	nav {
		z-index: 20;
		position: fixed;
		top: 0;
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

	.close-icon {
		width: 32px;
		position: absolute;
		left: 1rem;
		top: 2rem;
	}

	.toggle-sidebar-btn {
		background-color: transparent;
		border: none;
		outline: none;
	}

	.sidebar {
		z-index: 40;
		position: fixed;
		padding: 5rem 1.5rem;
		width: 15rem;
		top: 0;
		right: -15rem;
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		background-color: rgb(var(--color-background-500));
		font-size: 1.25rem;
		transition: right 200ms ease;
	}

	.sidebar.active {
		right: 0;
	}

	.sidebar > a {
		padding: 0.25rem;
		border-radius: 0.25rem;
		text-underline-offset: 2px;
	}

	.sidebar > a:hover {
		text-decoration: underline;
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
		width: 100%;
	}

	.sign-in-btn:hover {
		background-color: #45a049;
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
