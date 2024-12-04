<script>
    import { superForm } from "sveltekit-superforms";
    import { formSchema } from "./schema";
    import { zodClient } from "sveltekit-superforms/adapters";
  
    export let data;
  
    const form = superForm(data, {
      validators: zodClient(formSchema),
    });
  
    const { form: formData, enhance } = form;
  </script>
  
  <form method="POST" use:enhance>
    <!-- Email Field -->
    <div>
      <label for="email">Email:</label>
      <!-- Ensures the email field is of type email -->
      <input
        id="email"
        type="email"
        bind:value={$formData.email}
        class="input-class"
        required
        aria-label="Email Address"
      />
    </div>
  
    <!-- Password Field -->
    <div>
      <label for="password">Password:</label>
      <!-- Ensures the password field is of type password -->
      <input
        id="password"
        type="password"
        bind:value={$formData.password}
        class="input-class"
        required
        aria-label="Password"
      />
    </div>
  
    <button type="submit">Register</button>
  </form>
  
  
  
  
  
  
  
  
  
  
  <!-- <script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
    import { formSchema, type FormSchema } from "./schema";
    import {
      type SuperValidated,
      type Infer,
      superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
  
    export let data: SuperValidated<Infer<FormSchema>>;
  
    const form = superForm(data, {
      validators: zodClient(formSchema),
    });
  
    const { form: formData, enhance } = form;
  </script>
  
  <form method="POST" use:enhance>
    <Form.Field {form} name="email">
      <Form.Control let:attrs>
        <Form.Label>Email</Form.Label>
        <Input {...attrs} bind:value={$formData.email} type="email" />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  
    <Form.Field {form} name="password">
      <Form.Control let:attrs>
        <Form.Label>Password</Form.Label>
        <Input {...attrs} bind:value={$formData.password} type="password" />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  
    <Form.Button>Create New Account</Form.Button>
  </form> -->
  