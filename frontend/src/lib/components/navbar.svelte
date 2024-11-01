<script>
	let isMenuOpen = false;
</script>

<!-- <div class="navbar">
	<div class="top">
		<a href="/" class="logo"><h1>EngageSI</h1></a>
		<button class="burger">
			<div class="bar-1" />
			<div class="bar-2" />
			<div class="bar-3" />
		</button>
	</div>
	<nav class:open={isMenuOpen}>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/routes/deparment-links">Departments</a></li>
			<li><a href="/routes/account">Account</a></li>
			<li class="sign-in-btn"><a href="/">Sign In</a></li>
		</ul>
	</nav>
</div> -->

<nav>
	<div class="left">
		<a href="/"><h1>EngageSI</h1></a>
	</div>
	<div>
		<a href="/">Home</a>
		<a href="departments">Home</a>
		<a href="/account">Home</a>
		<button class="sign-in-btn">Sign In</button>
	</div>
</nav> 



<style>
	nav {
		position: fixed;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		background-color: rgb(var(--color-background-500));
		padding: 1rem;
	}

	.navbar {
		background-color: rgb(var(--color-background-500));
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* align-items: center; */
		position: relative;
	}

	.logo {
		margin-left: 6vw;
	}

	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 5vh;
		margin-top: 2vh;
		margin-bottom: 4vh;
		list-style: none;
		font-size: 1.1rem;
	}

	.sign-in-btn {
		background-color: var(--primary);
		padding: 0.4rem 1rem;
		border-radius: 10px;
		font-weight: 500;
	}

	a {
		color: rgb(var(--color-text));
		text-decoration: none;
	}

	.burger {
		height: 28px;
		aspect-ratio: 1;
		border: 2px solid rgb(var(--color-text));
		background-color: transparent;
		border-radius: 5px;
		margin-right: 6vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.burger > div {
		height: 2px;
		width: 14px;
		background-color: rgb(var(--color-text));
		position: absolute;
	}

	.bar-1{
		transform: translateY(-5px);
	}
	.bar-2{
		transform: translateY(0px);
	}
	.bar-3{
		transform: translateY(5px);
	}

</style>


<!-- <nav>
	<span>
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
		justify-content: space-between;
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
</style> -->

