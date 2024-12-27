import { redirect } from "@sveltejs/kit";

export const load = async ({ locals: { safeGetSession } }) => {
	const { session, user } = await safeGetSession();
	if (!session || !user) {
		redirect(303, "/signin");
	}
	redirect(303, "/attendance/1");
};
