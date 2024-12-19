<script>
	const informationGrid = [
		{
			big: "49%",
			text: "Average course grade increase of SI students taking Calculus I compared to non-SI participants"
		},
		{
			big: "43%",
			text: "Average course grade increase of SI students taking Evolution and Biodiversity compared to non-SI participants"
		},
		{
			big: "49%",
			text: "SI participants receiving a passing grade in Evolution and Biodiversity, compared to 56% of non-participants."
		}
	];

	const exampleUsages = [
		{
			title: "Signing into EngageSI",
			desc: "Navigate to the sign in page; you will be able to sign in with your email, or with your Google/Discord account",
			imgPath: "/examples/signing-in.png"
		},
		{
			title: "Selecting an SI Course",
			desc: "You can find all of the SI courses in the departments page. Once you are signed in, you will be able to select the SI session that you want to be part of!",
			imgPath: "/examples/select-sessions.png"
		},
		{
			title: "Viewing Saved SI Courses",
			desc: "If you are signed in, go to the dashboard page and you will be able to view all the SI courses you are currently enrolled in.",
			imgPath: "/examples/view-sessions.png"
		},
		{
			title: "Marking Attendance",
			desc: "In your dashboard, select the SI course you would like to sign in to and click 'Join!'",
			imgPath: "/examples/mark-attendance.png"
		}
	];

	let currentExampleIndex = 0;
	function setCurrentExampleIndex(i) {
		currentExampleIndex = i;
	}
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
		<img class="si-logo" src="/si-logo.jpeg" alt="SI Logo" />
	</div>
</section>

<section class="example-usage-section">
	<h2>How to Use EngageSI</h2>
	<div class="example-usage-container-desktop">
		<div class="example-usages">
			<h3>Examples</h3>
			{#each exampleUsages as example, i}
				<button on:click={() => setCurrentExampleIndex(i)}>{example.title}</button>
			{/each}
		</div>
		<div class="example-usages">
			<img src={exampleUsages[currentExampleIndex].imgPath} alt="Utilizing EngageSI Example" />
			<i>{exampleUsages[currentExampleIndex].desc}</i>
		</div>
	</div>
	<div class="example-usage-container-mobile">
		{#each exampleUsages as example}
			<div class="example-usage">
				<div class="text">
					<h3>{example.title}</h3>
					<p>{example.desc}</p>
				</div>
				<img src={example.imgPath} alt="Utilizing EngageSI Example" />
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		display: grid;
		gap: 1rem;
		margin-block-end: 2rem;
	}

	i {
		max-width: 40rem;
	}

	.homepage-links {
		display: flex;
		flex-direction: column;
		max-width: max-content;
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
		padding-inline: 2rem;
		display: grid;
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

	.info-elem > .text {
		text-align: center;
	}

	.goals-section > .goals-grid {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		margin-right: auto;
		justify-content: center;
		gap: 2.5rem;
	}

	.goals-grid > p {
		max-width: 1024px;
	}

	.si-logo {
		border-radius: 50%;
		width: 10rem;
		height: 10rem;
	}

	.example-usage-container-desktop {
		display: none;
		max-width: 1024px;
		margin-inline: auto;
		grid-template-columns: 300px 1fr;
		gap: 2rem;
		padding: 4rem;
		border-radius: 1rem;
		border: 2px solid gray;
		max-width: max-content;
	}

	.example-usages {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.example-usages > button {
		outline: none;
		cursor: pointer;
		border: 2px solid gray;
		background-color: transparent;
		border-radius: 0.5rem;
		padding: 1rem;
	}

	.example-usages > img {
		width: 40rem;
		border: 2px solid gray;
		border-radius: 0.5rem;
	}

	.example-usages > i {
		text-align: center;
	}

	.example-usage-container-mobile {
		margin-inline: auto;
		max-width: 640px;
		display: grid;
		gap: 2rem;
	}

	.example-usage {
		background-color: transparent;
		border: 2px solid gray;
		padding: 2rem;
		border-radius: 0.5rem;
	}

	.example-usage > .text {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 1rem;
	}

	.example-usage > .text > p {
		text-align: center;
		font-size: 1rem;
	}

	.example-usage > img {
		border: 2px solid gray;
		border-radius: 0.5rem;
	}

	@media screen and (min-width: 640px) {
		.homepage-links {
			flex-direction: row;
			align-items: center;
		}

		.info-grid {
			grid-template-columns: 1fr 1fr;
		}

		.example-usage > .text > p {
			font-size: 1.25rem;
		}
	}

	@media screen and (min-width: 768px) {
		.info-grid {
			grid-template-columns: 1fr 1fr 1fr;
		}
		.goals-section > .goals-grid {
			flex-direction: row;
		}
	}

	@media screen and (min-width: 1024px) {
		.example-usage-container-desktop {
			display: grid;
		}

		.example-usage-container-mobile {
			display: none;
		}
	}
</style>
