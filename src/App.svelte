<script>
  import { onMount } from 'svelte';
  import Navigation from './components/Navigation.svelte';
  import CharityList from './components/CharityList.svelte';
  import Layout from './components/Layout.svelte';

  let charities = [];

  onMount(async function() {
    const res = await fetch(`https://charity-api-bwa.herokuapp.com/charities`);
    charities = await res.json();
  });
</script>

<style>

</style>

<Layout>
  <CharityList {charities} />
</Layout>
