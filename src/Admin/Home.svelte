<script>
  import Layout from '../components/Layout.svelte';
  import LoginForm from '../components/LoginForm.svelte';
  import AdminDashboard from '../Admin/AdminDashboard.svelte';

  import { loginStatus } from '../store.js';

  let isLoggedIn = false;

  loginStatus.subscribe((value) => {
    isLoggedIn = value;
  });
</script>

<Layout>
  <h2>Admin</h2>
  {#if !isLoggedIn}
    <LoginForm />
  {:else}
    <AdminDashboard />
  {/if}
</Layout>
