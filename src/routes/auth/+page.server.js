import { error, fail, redirect } from "@sveltejs/kit";

export const load = async ({ locals: { safeGetSession } }) => {
	const session = await safeGetSession();
	if (session) redirect(303, "/dashboard");
};

export const actions = {
	register: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		const name = formData.get("name");
		const email = formData.get("email");
		const cwid = formData.get("cwid");
		const password = formData.get("password");
		const confirmPassword = formData.get("confirm-password");

		if (!name || !email || !cwid || !password || !confirmPassword) {
			return fail({ message: "Please provide all the items to register." });
		}

		if (password != confirmPassword) {
			return fail({ message: "Please ensure that both passwords match." });
		}

		const { error: err } = await supabase.auth.signUp({ email, password });
		if (err) {
			error(500, { message: "Something went wrong, please try again." });
		}

		await supabase.from("user_profile").insert();

		redirect(303, "/");
	},
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get("email");
		const password = formData.get("password");

		if (!email || !password) {
			return fail({ message: "Please enter an email and a password" });
		}

		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			return fail(error);
		}

		redirect(303, "/dashboard");
	}
};
