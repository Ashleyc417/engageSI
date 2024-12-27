import { fail, redirect } from "@sveltejs/kit";

const OAUTH_PROVIDERS = ["google", "discord"];

export const load = async ({ locals: { safeGetSession } }) => {
	const { session, user } = await safeGetSession();
	if (session && user) {
		redirect(303, "/dashboard");
	}
};

export const actions = {
	signIn: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get("email");
		const password = formData.get("password");

		if (!email || !password) {
			return fail(400, { message: "Please enter an email and a password" });
		}

		const { error: signInErr } = await supabase.auth.signInWithPassword({
			email: email.toString(),
			password: password.toString()
		});
		if (signInErr) {
			return fail(401, { message: "Invalid credentials. Please try again." });
		}

		redirect(303, "/dashboard");
	},
	socialLogin: async ({ url, locals: { supabase } }) => {
		const provider = url.searchParams.get("provider");
		if (!provider) {
			return fail(422, { message: "Unable to process provider" });
		}

		if (!OAUTH_PROVIDERS.includes(provider)) {
			return fail(400, { message: "Provider not supported" });
		}
		const signInQuery = await supabase.auth.signInWithOAuth({
			provider: provider
		});

		if (signInQuery.error) {
			console.error(signInQuery.error.message);
			return fail(400, { message: "Something went wrong" });
		}

		redirect(303, signInQuery.data.url);
	}
};
