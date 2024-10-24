<script>
	import mathSchedules from '$lib/schedules/mathematics.json';
</script>

<!-- <img src="" alt="Math Banner" class="w-full" /> -->

<h1>Mathematics SI</h1>

<p>
	The Math Supplemental Instruction (SI) program offers peer-led study sessions designed to support
	students across various math courses, from College Algebra to Calculus. These collaborative
	sessions provide a relaxed environment where students can review concepts, practice problems, and
	develop effective study strategies. Whether you're looking to strengthen foundational skills or
	tackle advanced topics, Math SI is here to help you succeed.
</p>

<h2>SI Schedule</h2>

{#each Object.entries(mathSchedules.sessionsOffered) as [classTitle, sessionsOffered]}
	<h3>{classTitle}</h3>
	{#each sessionsOffered as sessionInfo}
		<div class="session-row">
			<span>{sessionInfo.classNumber}</span>
			<span>{sessionInfo.courseInstructor}</span>
			<span>{sessionInfo.siLeader}</span>
			<span>{sessionInfo.sessionDays}</span>
			<span>{sessionInfo.sessionTimes}</span>
			<span>{sessionInfo.location}</span>
		</div>
	{/each}
{/each}

<style>
	.session-row {
		display: flex;
		gap: 1rem;
		align-items: center;
		padding-left: 2rem;
		/* justify-content: center; */
	}
</style>
