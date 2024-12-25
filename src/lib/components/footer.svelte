<footer>
	<p>&copy; {new Date().getFullYear()} EngageSI. All rights reserved.</p>
	<div>
		<a href="/">About Us</a>
		<a href="/departments">Departments</a>
		<a href="/signin">Sign In</a>
	</div>
</footer>

<style>
	footer {
		background-color: transparent;
		border-top: 1px solid rgb(var(--color-background-500));
		padding: 3rem 2rem;
		text-align: center;
	}

	footer > div {
		margin-top: 0.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	a {
		color: rgb(var(--color-text-dark));
		text-decoration: none;
		transition: color 150ms ease-in;
	}

	a:hover {
		color: rgb(var(--color-text));
	}

	@media screen and (min-width: 768px) {
		a {
			font-size: 1.125rem;
		}
	}
</style>
