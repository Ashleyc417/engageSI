<script>
	const informationGrid = [
		{
			big: '49%',
			text: 'Average course grade increase of SI students taking Calculus I compared to non-SI participants'
		},
		{
			big: '43%',
			text: 'Average course grade increase of SI students taking Evolution and Biodiversity compared to non-SI participants'
		},
		{
			big: '49%',
			text: 'SI participants receiving a passing grade in Evolution and Biodiversity, compared to 56% of non-participants.'
		}
	];
</script>

<section class="hero-section">
	<h1>EngageSI</h1>
	<p>
		EngageSI is a web application tailored for California State University, Fullerton's Supplemental
		Instruction (SI) Program. It provides an intuitive platform designed to streamline session
		management, boost student participation, and track SI engagement.
	</p>

	<div class="homepage-links">
		<a class="btn-contrast" href="/signin">Get Started</a>
		<a class="btn-secondary" href="/departments">View SI Departments</a>
	</div>
</section>

<section class="info-section">
	<h2>About SI</h2>
	<p>
		The SI Program is led by exceptional students who have already mastered the course materials.
		The SI leaders are trained to facilitate group sessions where students can meet to improve their
		understanding of course materials, review and discuss important concepts, develop study
		strategies, and prepare for exams.
	</p>
	<div class="info-grid">
		{#each informationGrid as information}
			<div class="info-elem">
				<span class="big">{information.big}</span>
				<span class="text">{information.text}</span>
			</div>
		{/each}
	</div>
</section>

<section class="goals-section">
	<h2>Why EngageSI?</h2>
	<div class="goals-grid">
		<p>
			We built EngageSI to simplify the process of tracking attendance for Supplemental Instruction
			(SI) sessions, making it easier for students to mark their participation and freeing SI
			leaders from the burden of manual record-keeping. By streamlining this process, EngageSI
			creates a more efficient and engaging experience for both students and leaders, encouraging
			greater participation in SI sessions and ultimately fostering a stronger learning community.
		</p>
		<div class="sample-container">
			<img src="/sample.png" alt="EngageSI sample usage" />
			<i>Example of how to utilize EngageSI</i>
		</div>
	</div>
</section>

<style>
	h1 {
		font-size: 4rem;
	}

	h2 {
		font-size: 2.5rem;
	}

	p {
		font-size: 1.375rem;
	}

	section {
		display: grid;
		gap: 1rem;
		margin-block-end: 2rem;
	}

	.homepage-links {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.homepage-links > a {
		font-size: 1.25rem;
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		text-decoration: none;
	}

	.btn-contrast {
		background-color: rgb(var(--color-text));
		color: rgb(var(--color-foreground));
	}

	.btn-secondary {
		border: 2px solid rgb(var(--color-text));
		color: rgb(var(--color-text));
	}

	.info-grid {
		margin-block: 1rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
	}

	.info-elem {
		padding: 2rem;
		border-radius: 1rem;
		border: 2px solid gray;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: border-color 150ms;
	}

	.info-elem:hover {
		border-color: rgb(172, 172, 172);
	}

	.info-elem > .big {
		font-weight: 600;
		font-size: 3rem;
	}

	.goals-grid > p {
		font-size: 1.125rem;
	}

	.goals-section > .goals-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.sample-container {
		display: grid;
		padding: 4rem;
		border-radius: 1rem;
		border: 2px solid gray;
		max-width: max-content;
	}

	.sample-container > img {
		max-width: 25rem;
	}

	.sample-container > i {
		font-size: small;
		text-align: center;
		margin-block-start: 0.125rem;
	}
</style>
