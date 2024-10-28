<nav>
	<span>
		<!-- TODO: Add Home Icon to Replace "Home"-->
		<a href="/">Home</a>
		<a href="/department-links">Departments</a>
	</span>
	<div class="nav-end">
		<a href="/account">Account</a>
		<a href="/departments/cpsc">Computer Science</a>
		<a href="/departments/math">Mathematics</a>
	</div>
</nav>

<style>
	nav {	
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: space-between	;
		background-color: rgb(var(--color-background-500));
		padding: 1.5rem;
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
		gap: 1rem;
	}
</style>
