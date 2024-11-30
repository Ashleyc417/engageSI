<script>
  // Declare reactive variables for name, email, cwid, and error message
  let name = '';
  let email = '';
  let cwid = '';
  let errorMessage = '';

  // Handle form submission
  const handleSubmit = () => {
    // Basic validation
    if (!name || !email || !cwid) {
      errorMessage = 'Please enter name, email, and CWID.';
      return;
    }

    // Validate CWID (must be a 9-digit integer)
    if (!/^\d{9}$/.test(cwid)) {
      errorMessage = 'CWID must be a 9-digit number.';
      return;
    }

    // Validate email format using regex (basic validation)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      errorMessage = 'Please enter a valid email address.';
      return;
    }

    // Simulate checking credentials (this is where you'd call your API or database)
    // For example, check if these credentials exist in your database
    // This is just a placeholder for actual login functionality
    // Replace this with your real login authentication (Supabase or another service)
    // If everything is valid, simulate successful login
    errorMessage = ''; // Clear error message

    // For example, if using Supabase, you'd check credentials here

    // Simulate a successful login
    alert('Login successful!');

    // Optionally, redirect to dashboard or other page
    // For example, use SvelteKit's goto('/dashboard')
    // You could redirect here after login success:
    // goto('/dashboard');
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4">
  <!-- Name field -->
  <div>
    <label for="name" class="block text-sm font-medium">Name</label>
    <input id="name" type="text" bind:value={name} required class="w-full p-2 border rounded-md" />
  </div>

  <!-- Email field -->
  <div>
    <label for="email" class="block text-sm font-medium">Email</label>
    <input id="email" type="email" bind:value={email} required class="w-full p-2 border rounded-md" />
  </div>

  <!-- CWID field (9-digit integer) -->
  <div>
    <label for="cwid" class="block text-sm font-medium">CWID</label>
    <input id="cwid" type="text" bind:value={cwid} required class="w-full p-2 border rounded-md" maxlength="9" />
  </div>

  <!-- Display error message if validation fails -->
  {#if errorMessage}
    <div class="text-red-600 text-sm">{errorMessage}</div>
  {/if}

  <!-- Submit button -->
  <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md">Sign In</button>
</form>

<style>
  .space-y-4 {
    margin-bottom: 1rem;
  }
</style>
