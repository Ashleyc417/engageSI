<script>
	export let companyName = "EngageSI"; // Default fallback
</script>

<footer>
	<div class="footer-content">
		<p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
		<nav>
			<a href="/">About Us</a>
			<a href="/departments">Departments</a>
			<a href="/signin">Sign In</a>
		</nav>
	</div>
</footer>

<style>
	footer {
		background-color: rgb(var(--color-background-500));
		padding: 2rem;
		text-align: center;
		color: rgb(var(--color-text));
	}

	footer nav a {
		color: #ddd;
		margin: 0 0.5rem;
		text-decoration: none;
	}

	footer nav a:hover {
		color: #fff;
		text-decoration: underline;
	}
</style>
