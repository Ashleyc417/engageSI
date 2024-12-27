import { error, redirect } from "@sveltejs/kit";
import { loadFlash } from "sveltekit-flash-message/server";

export const load = loadFlash(async ({ url, locals: { supabase, safeGetSession }, cookies }) => {
	const { session, user } = await safeGetSession();

	if (!session || !user) {
		return {
			session: null,
			user: null,
			profile: null,
			cookies: cookies.getAll()
		};
	}

	const userProfileQuery = await supabase
		.from("user_profile")
		.select("*")
		.eq("id", user.id)
		.maybeSingle();

	if (userProfileQuery.error) {
		error(500, { message: userProfileQuery.error.message });
	}

	const userProfile = userProfileQuery.data;

	if (userProfile) {
		if (userProfile.full_name == null && !url.href.endsWith("account/create")) {
			redirect(303, "/account/create");
		}

		return {
			session,
			user,
			profile: userProfile,
			cookies: cookies.getAll()
		};
	}

	const insertNewProfileQuery = await supabase
		.from("user_profile")
		.insert({
			id: user.id,
			email: user.email
		})
		.select("*")
		.single();

	if (insertNewProfileQuery.error || !insertNewProfileQuery.data) {
		error(500, { message: insertNewProfileQuery.error.message });
	}
	redirect(303, "/account/create");
});
