import { error, redirect } from "@sveltejs/kit";

export const load = async ({ locals: { supabase, safeGetSession } }) => {
	const { session, user } = await safeGetSession();
	if (!session || !user) {
		redirect(303, "/signin");
	}

	const userSiSessionsQuery = await supabase.from("user_si_sessions").select("*");

	if (userSiSessionsQuery.error) {
		error(500, { message: userSiSessionsQuery.error.message });
	}

	const userSessions = [];
	const data = userSiSessionsQuery.data;

	for (const entry of data) {
		const sessionKey = entry.session_key;
		const [department, siCourse, siLeader] = sessionKey.split(";");
		const { default: departmentSchedule } = await import(`$lib/schedules/${department}.json`);

		for (const session of departmentSchedule.sessionsOffered[siCourse]) {
			if (session.siLeader === siLeader) {
				userSessions.push({ sessionInfo: session, extraInfo: { department, siCourse, siLeader } });
				break;
			}
		}
	}
	return { userSessions };
};
