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
};
