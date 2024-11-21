<script>
    // Declare reactive variables for username, password, and error message
    let username = '';
    let password = '';
    let errorMessage = '';
  
    // Handle form submission
    const handleSubmit = () => {
      // Basic validation
      if (!username || !password) {
        errorMessage = 'Please enter both username and password.';
        return;
      }
  
      // Simulate checking credentials (this is where you'd call your API)
      if (username === 'admin' && password === 'admin123') {
        // Simulate successful login (e.g., redirect to another page or show a success message)
        errorMessage = ''; // Clear error message
        alert('Login successful!');
        // Redirect the user to the dashboard or home page
        // You could use SvelteKit's goto() here if you have a page to navigate to
        // goto('/dashboard');
      } else {
        errorMessage = 'Invalid username or password.';
      }
    };
  </script>
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <!-- Username field -->
    <div>
      <label for="username" class="block text-sm font-medium">Username</label>
      <input id="username" type="text" bind:value={username} required class="w-full p-2 border rounded-md" />
    </div>
  
    <!-- Password field -->
    <div>
      <label for="password" class="block text-sm font-medium">Password</label>
      <input id="password" type="password" bind:value={password} required class="w-full p-2 border rounded-md" />
    </div>
  
    <!-- Display error message if login fails -->
    {#if errorMessage}
      <div class="text-red-600 text-sm">{errorMessage}</div>
    {/if}
  
    <!-- Submit button -->
    <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md">Sign In</button>
  </form>
  