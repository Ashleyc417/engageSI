import { fail, redirect } from "@sveltejs/kit";

export const load = async ({ locals: { safeGetSession } }) => {
	const { session, user } = await safeGetSession();
	if (session && user) {
		redirect(303, "/dashboard");
	}
};

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		const email = formData.get("email");
		const password = formData.get("password");
		const confirmPassword = formData.get("confirm-password");

		console.log(email, password, confirmPassword);

		if (!email || !password || !confirmPassword) {
			return fail(400, { message: "Please provide an email and a password to sign up." });
		}

		if (password.toString() != confirmPassword.toString()) {
			return fail(400, { message: "Please ensure that both passwords match." });
		}

		const { data: signUpData, error: signUpErr } = await supabase.auth.signUp({ email, password });
		if (signUpErr) {
			console.error(signUpErr);
			return fail(500, { message: signUpErr.message });
		}
		redirect(303, signUpData.url);
	}
};
