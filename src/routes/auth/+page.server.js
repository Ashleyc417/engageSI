import { error, fail, redirect } from "@sveltejs/kit";

export const load = async ({ locals: { safeGetSession } }) => {
	const session = await safeGetSession();
	if (session) redirect(303, "/dashboard");
};

const OAUTH_PROVIDERS = ["google", "discord"];

export const actions = {
	signUp: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		const name = formData.get("name");
		const email = formData.get("email");
		const cwid = formData.get("cwid");
		const password = formData.get("password");
		const confirmPassword = formData.get("confirm-password");

		if (!name || !email || !cwid || !password || !confirmPassword) {
			fail({ message: "Please provide all the items to sign up." });
		}

		if (password != confirmPassword) {
			fail({ message: "Please ensure that both passwords match." });
		}

		const { error: err } = await supabase.auth.signUp({ email, password });
		if (err) {
			error(500, { message: "Something went wrong, please try again." });
		}

		await supabase.from("user_profile").insert();

		redirect(303, "/");
	},
	signIn: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get("email");
		const password = formData.get("password");

		if (!email || !password) {
			fail({ message: "Please enter an email and a password" });
		}

		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			fail(error);
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
	},
	logout: async ({ locals: { supabase, safeGetSession } }) => {
		const session = await safeGetSession();
		if (!session) {
			error(401, "Unauthorized");
		}
		const { error: err } = await supabase.auth.signOut();

		if (err) {
			error(500, "Something went wrong signing out");
		}
		redirect(303, "/");
	}
};
