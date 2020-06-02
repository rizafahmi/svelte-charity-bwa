<script>
  import { loginStatus } from '../store.js';
  let email,
    password = '';

  function handleLogin() {
    setTimeout(() => {
      loginStatus.update((v) => !v);
    });
  }
</script>

<h3>Login</h3>
<form on:submit|preventDefault={handleLogin}>
  <input type="text" placeholder="email" bind:value={email} />
  <input type="password" placeholder="password" bind:value={password} />
  <button type="submit">Login</button>
</form>
