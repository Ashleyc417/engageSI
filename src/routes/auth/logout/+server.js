import { error, redirect } from "@sveltejs/kit";

export const POST = async ({ locals: { supabase, safeGetSession } }) => {
	const session = await safeGetSession();
	if (!session) {
		error(401, "Unauthorized");
	}
	const { error: err } = await supabase.auth.signOut();
	if (err) {
		error(500, "Something went wrong signing out");
	}
	redirect(303, "/");
};
