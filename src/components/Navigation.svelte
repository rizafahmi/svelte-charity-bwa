<script>
  import { loginStatus } from '../store.js';
  let isLoggedIn = false;
  loginStatus.subscribe((val) => (isLoggedIn = val));

  function handleLogout() {
    loginStatus.update((val) => !val);
  }
</script>

<style>
  h1 {
    color: black;
    text-transform: uppercase;
  }
</style>

<nav>
  <h1>Charity</h1>
  <ul>
    <li>
      <a href="#/">Home</a>
    </li>
    <li>
      <a href="#/about">About</a>
    </li>
    <li>
      <a href="#/admin">Admin</a>

      {#if isLoggedIn === true}
        |
        <a on:click={handleLogout}>Logout</a>
      {/if}

    </li>
  </ul>
</nav>
