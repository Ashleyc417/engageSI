import { error, fail, redirect } from "@sveltejs/kit";

export const load = async ({ locals: { supabase, safeGetSession } }) => {
	const { session, user } = await safeGetSession();
	if (!session || !user) {
		error(400, "User not authenticated");
	}

	const profileQuery = await supabase
		.from("user_profile")
		.select("full_name")
		.eq("id", user.id)
		.single();

	if (profileQuery.error) {
		error(500, { message: profileQuery.error.message });
	}

	const profile = profileQuery.data;
	if (profile && profile.full_name != null) {
		redirect(303, "/");
	}
};

export const actions = {
	createAccount: async ({ request, locals: { supabase, safeGetSession } }) => {
		const { session, user } = await safeGetSession();

		if (!session || !user) {
			return fail(400, { message: "Cannot create username without being logged in" });
		}

		const data = await request.formData();
		const fullName = data.get("full-name");
		const cwid = data.get("cwid");

		if (!fullName || !fullName.toString() || !cwid || !cwid.toString()) {
			return fail(400, { message: "Full name / CWID not provided" });
		}

		if (!/^8\d{8}$/.test(cwid.toString())) {
			return fail(400, {
				message: "Invalid CWID"
			});
		}

		const cwidQuery = await supabase
			.from("user_profile")
			.select("*", { count: "exact" })
			.eq("cwid", cwid.toString());

		if (cwidQuery.error) {
			return fail(500, { message: "Something went wrong, please try again." });
		}
		if (cwidQuery.count) {
			return fail(400, { message: "CWID already selected." });
		}

		const updateProfileQuery = await supabase
			.from("user_profile")
			.update({
				full_name: fullName.toString(),
				cwid: cwid.toString()
			})
			.eq("id", user.id);

		if (updateProfileQuery.error) {
			error(500, { message: updateProfileQuery.error.message });
		}

		redirect(303, "/");
	}
};
