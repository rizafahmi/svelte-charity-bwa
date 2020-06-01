<script>
  import Router from 'svelte-spa-router';
  import Home from './Home.svelte';
  import About from './About.svelte';
  import Detail from './Detail.svelte';

  const routes = {
    '/': Home,
    '/about': About,
    '/detail/:cid': Detail
  };
</script>

<Router {routes} />
