import { error, redirect } from "@sveltejs/kit";

export const load = async ({ locals: { supabase, safeGetSession } }) => {
	const { session, user } = await safeGetSession();
	if (!session || !user) {
		redirect(303, "/signin");
	}

	const userSiSessionsQuery = await supabase
		.from("user_si_sessions")
		.select("*")
		.eq("user_id", user.id);
	if (userSiSessionsQuery.error) {
		error(500, { message: userSiSessionsQuery.error.message });
	}

	const attendanceLogsQuery = await supabase
		.from("attendance_logs")
		.select("*")
		.eq("user_id", user.id)
		.order("created_at", { ascending: false });
	if (attendanceLogsQuery.error) {
		error(500, { message: attendanceLogsQuery.error.message });
	}

	const userSessions = [];
	const sessionsData = userSiSessionsQuery.data;

	for (const entry of sessionsData) {
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

	const attendanceLogs = [];
	const attendanceData = attendanceLogsQuery.data;

	for (const entry of attendanceData) {
		const sessionKey = entry.session_key;
		const [department, siCourse, siLeader] = sessionKey.split(";");
		const { default: departmentSchedule } = await import(`$lib/schedules/${department}.json`);

		for (const session of departmentSchedule.sessionsOffered[siCourse]) {
			if (session.siLeader === siLeader) {
				attendanceLogs.push({ loggedAt: entry.created_at, siCourse, siLeader });
				break;
			}
		}
	}
	return { userSessions, attendanceLogs };
};
