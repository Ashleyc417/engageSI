<!-- <script>
    import Register from "./Register.svelte";
    export let data;
  </script>
  
  <Register data={data.form} /> -->

<!-- <script lang="ts"> from video 555 -->
  
<!-- <script lang="ts">
    import type { PageData } from "./$types.js";
    import Register from "./Register.svelte";
    export let data: PageData;
  </script>
  
<div class="flex h-screen items-center justify-center">
  <div class="max-w-md flex-grow shadow rounded p-4">
    <h1 class="mb-4 text-3xl font-bold">Register</h1>
    <Register data={data.form} />

  </div>
</div> -->

<!-- newest it is supposed to center and justify the fuckin code but that shit is not working-->
<script>
    export let data; // Data prop passed from parent
  </script>
  
  <div class="flex h-screen items-center justify-center">
    <div class="max-w-md flex-grow shadow rounded p-4">
      <!-- Bold header for Register -->
      <h1 class="mb-4 text-3xl font-bold">Register</h1>
  
      <!-- Registration form -->
      <form>
        <div class="input-container">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            bind:value={data.email}
            class="input-field"
            required
          />
        </div>
  
        <div class="input-container">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            bind:value={data.password}
            class="input-field"
            required
          />
        </div>
  
        <button type="submit" class="submit-button">Register</button>
      </form>
    </div>
  </div>
  
  <style>
    .flex {
      display: flex;
      height: 100vh;
      align-items: center;
      justify-content: center;
    }
  
    .max-w-md {
      max-width: 500px;
      width: 100%;
    }
  
    .shadow {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .rounded {
      border-radius: 8px;
    }
  
    .p-4 {
      padding: 16px;
    }
  
    .mb-4 {
      margin-bottom: 16px;
    }
  
    .text-3xl {
      font-size: 1.875rem;
    }
  
    .font-bold {
      font-weight: 700;
    }
  
    .input-container {
      margin-bottom: 16px;
    }
  
    .input-field {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
  
    .submit-button {
      width: 100%;
      padding: 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
  
    .submit-button:hover {
      background-color: #45a049;
    }
  </style>
  