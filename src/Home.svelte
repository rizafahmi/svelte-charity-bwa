<script>
  import { onMount } from 'svelte';

  import { charitiesStore } from './store.js';
  import Navigation from './components/Navigation.svelte';
  import CharityList from './components/CharityList.svelte';
  import Layout from './components/Layout.svelte';

  let charities = [];

  onMount(async function() {
    const res = await fetch(`https://charity-api-bwa.herokuapp.com/charities`);
    const data = await res.json();
    charitiesStore.subscribe((value) => (charities = value));
    charitiesStore.update(() => data);
  });
</script>

<style>

</style>

<Layout>
  {#if charities.length > 0}
    <CharityList {charities} />
  {:else}
    <h2>Loading...</h2>
  {/if}
</Layout>
