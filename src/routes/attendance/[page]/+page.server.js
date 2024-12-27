import { error, redirect } from "@sveltejs/kit";

export const load = async ({ params, locals: { supabase, safeGetSession } }) => {
	const { session, user } = await safeGetSession();
	if (!session || !user) {
		redirect(303, "/signin");
	}
	const pageNumber = Number(params.page);
	if (isNaN(pageNumber)) {
		error(404, "Not found");
	}
	const attendanceLogsQuery = await supabase
		.from("attendance_logs")
		.select("*")
		.eq("user_id", user.id)
		.range(0 + (pageNumber - 1) * 8, 7 + (pageNumber - 1) * 8);
	if (attendanceLogsQuery.error) {
		error(500, attendanceLogsQuery.error.message);
	}

	const numLogsQuery = await supabase
		.from("attendance_logs")
		.select("*", { count: "exact", head: true })
		.eq("user_id", user.id);
	if (numLogsQuery.error || !numLogsQuery.count) {
		error(500, "Server Error");
	}

	return {
		attendanceLogs: attendanceLogsQuery.data ?? [],
		pageNumber,
		numLogs: numLogsQuery.count
	};
};
