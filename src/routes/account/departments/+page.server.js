import { fail, redirect } from "@sveltejs/kit";

export const actions = {
	add: async ({ url, locals: { supabase, safeGetSession } }) => {
		const { session, user } = await safeGetSession();
		if (!session || !user) {
			redirect(303, "/signin");
		}

		const sessionKey = url.searchParams.get("sessionKey");
		if (!sessionKey) {
			return fail(422, { message: "Unable to process SI session key" });
		}

		const searchSessionKeyQuery = await supabase
			.from("user_si_sessions")
			.select("*", { count: "exact", head: true })
			.eq("user_id", user.id)
			.eq("session_key", sessionKey);

		if (searchSessionKeyQuery.count === 1) {
			console.log("Already exists");
			return fail(400, { message: "Already selected this SI session" });
		}

		const insertSessionKeyQuery = await supabase
			.from("user_si_sessions")
			.insert({ user_id: user.id, session_key: sessionKey });

		if (insertSessionKeyQuery.error) {
			console.error(insertSessionKeyQuery.error.message);
			return fail(400, { message: "Something went wrong" });
		}

		redirect(303, "/dashboard");
	},
	join: async ({ url, locals: { supabase, safeGetSession } }) => {
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
	},
	remove: async ({ url, locals: { supabase, safeGetSession } }) => {
		const { session, user } = await safeGetSession();
		if (!session || !user) {
			redirect(303, "/signin");
		}

		const sessionKey = url.searchParams.get("sessionKey");
		if (!sessionKey) {
			return fail(422, { message: "Unable to process SI session key" });
		}

		const deleteSessionKeyQuery = await supabase
			.from("user_si_sessions")
			.delete()
			.eq("user_id", user.id)
			.eq("session_key", sessionKey);

		if (deleteSessionKeyQuery.error) {
			console.error(deleteSessionKeyQuery.error.message);
			return fail(400, { message: "Something went wrong" });
		}

		redirect(303, "/dashboard");
	}
};
