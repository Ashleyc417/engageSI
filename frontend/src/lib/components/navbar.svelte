<nav>
	<span>
		<a href="/">EngageSI</a>
	</span>
	<div class="nav-end">
		<a href="/departments/cpsc">Computer Science</a>
		<a href="/departments/math">Mathematics</a>
	</div>
</nav>

<style>
	nav {
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: space-between;
		background-color: rgb(var(--color-background-500));
		padding: 0.75rem 1.25rem;
		border-radius: 0.5rem;
	}

	a {
		text-decoration-color: transparent;
		text-underline-offset: 2px;
		color: rgb(var(--color-text));
		transition: text-decoration-color 100ms ease;
	}

	a:hover {
		text-decoration-color: rgb(var(--color-text));
	}

	nav .nav-end {
		display: flex;
		gap: 0.75rem;
	}
</style>
