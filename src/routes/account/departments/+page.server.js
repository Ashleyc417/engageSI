import { redirect } from "sveltekit-flash-message/server";

export const actions = {
	add: async ({ url, cookies, locals: { supabase, safeGetSession } }) => {
		const { session, user } = await safeGetSession();
		if (!session || !user) {
			redirect(303, "/signin");
		}

		const sessionKey = url.searchParams.get("sessionKey");
		if (!sessionKey) {
			redirect(
				"/departments",
				{ type: "error", message: "Unable to process SI session key." },
				cookies
			);
		}

		const searchSessionKeyQuery = await supabase
			.from("user_si_sessions")
			.select("*", { count: "exact", head: true })
			.eq("user_id", user.id)
			.eq("session_key", sessionKey);

		if (searchSessionKeyQuery.count === 1) {
			redirect(
				"/departments",
				{ type: "error", message: "SI session already present in list." },
				cookies
			);
		}

		const insertSessionKeyQuery = await supabase
			.from("user_si_sessions")
			.insert({ user_id: user.id, session_key: sessionKey });

		if (insertSessionKeyQuery.error) {
			console.error(insertSessionKeyQuery.error.message);
			redirect(
				"/departments",
				{ type: "error", message: "Something went wrong, please try again." },
				cookies
			);
		}
		redirect(
			"/dashboard",
			{ type: "success", message: "SI session successfully added to list!" },
			cookies
		);
	},
	join: async ({ url, cookies, locals: { supabase, safeGetSession } }) => {
		const { session, user } = await safeGetSession();
		if (!session || !user) {
			redirect(303, "/signin");
		}

		const sessionKey = url.searchParams.get("sessionKey");
		if (!sessionKey) {
			redirect(
				"/dashboard",
				{ type: "error", message: "Unable to process SI session key." },
				cookies
			);
		}

		const insertAttendanceQuery = await supabase
			.from("attendance_logs")
			.insert({ user_id: user.id, session_key: sessionKey });

		if (insertAttendanceQuery.error) {
			console.error(insertAttendanceQuery.error.message);
			redirect(
				"/departments",
				{ type: "error", message: "Something went wrong, please try again." },
				cookies
			);
		}
		redirect(
			"/dashboard",
			{ type: "success", message: "Successfully marked attendance for this SI session!" },
			cookies
		);
	},
	remove: async ({ url, cookies, locals: { supabase, safeGetSession } }) => {
		const { session, user } = await safeGetSession();
		if (!session || !user) {
			redirect(303, "/signin");
		}

		const sessionKey = url.searchParams.get("sessionKey");
		if (!sessionKey) {
			redirect(
				"/dashboard",
				{ type: "error", message: "Unable to process SI session key." },
				cookies
			);
		}

		const deleteSessionKeyQuery = await supabase
			.from("user_si_sessions")
			.delete()
			.eq("user_id", user.id)
			.eq("session_key", sessionKey);

		if (deleteSessionKeyQuery.error) {
			console.error(deleteSessionKeyQuery.error.message);
			redirect(
				"/departments",
				{ type: "error", message: "Something went wrong, please try again." },
				cookies
			);
		}
		redirect(
			"/dashboard",
			{ type: "success", message: "Removed SI session from list successfully." },
			cookies
		);
	}
};
