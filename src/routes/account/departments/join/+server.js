import { fail, redirect } from "@sveltejs/kit";

export const POST = async ({ url, locals: { supabase, safeGetSession } }) => {
	const { session, user } = await safeGetSession();
	if (!session || !user) {
		redirect(303, "/signin");
	}

	const sessionKey = url.searchParams.get("sessionKey");
	if (!sessionKey) {
		return fail(422, { message: "Unable to process SI session key" });
	}

	const insertAttendanceQuery = await supabase
		.from("attendance_logs")
		.insert({ user_id: user.id, session_key: sessionKey });

	if (insertAttendanceQuery.error) {
		console.error(insertAttendanceQuery.error.message);
		return fail(400, { message: "Something went wrong" });
	}

	redirect(303, "/dashboard");
};
