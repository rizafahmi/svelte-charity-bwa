<script>
  import Router from 'svelte-spa-router';
  import Home from './Home.svelte';
  import About from './About.svelte';
  import Detail from './Detail.svelte';
  import Donate from './Donate.svelte';
  import AdminHome from './Admin/Home.svelte';
  import Thanks from './Thanks.svelte';

  const routes = {
    '/': Home,
    '/about': About,
    '/detail/:cid': Detail,
    '/donate/:cid': Donate,
    '/admin': AdminHome,
    '/thanks': Thanks
  };
</script>

<Router {routes} />
