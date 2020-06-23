<script>
  import Layout from './components/Layout.svelte';
  import { charitiesStore } from './store.js';

  export let params = {};
  let currentProject = null;

  charitiesStore.subscribe((value) => (currentProject = value[params.cid]));
  (function () {
    const res = fetch(`.netlify/functions/payment`)
    const redirectUrl = res.url;
    window.location.href = redirectUrl;
  })()

</script>

<Layout>
{#if currentProject}
<h1>Donasi untuk "{currentProject.title}"</h1>
{/if}
</Layout>
