// import { superValidate } from "sveltekit-superforms";
// import { formSchema } from "./schema";
// import { zod } from "sveltekit-superforms/adapters";

// export const load = async () => {
//   return {
//     form: await superValidate(zod(formSchema)),
//   };
// };

// // video 4:55
// import type { PageServerLoad, Actions } from "./$types.js";
// import { fail } from "@sveltejs/kit";
// import { superValidate } from "sveltekit-superforms";
// import { zod } from "sveltekit-superforms/adapters";
// import { formSchema } from "./schema";
 
// export const load: PageServerLoad = async () => {
//  return {
//   form: await superValidate(zod(formSchema)),
//  };
// };
 
// export const actions: Actions = {
//  default: async (event) => {
//   const form = await superValidate(event, zod(formSchema));
//   if (!form.valid) {
//    return fail(400, {
//     form,
//    });
//   }
//   console.log(form.data);
//   return {
//    form,
//   };
//  },
// };

// video 455 js
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { formSchema } from "./schema";

export const load = async () => {
  return {
    form: await superValidate(zod(formSchema)),
  };
};

export const actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(formSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }
    console.log(form.data);
    return {
      form,
    };
  },
};
