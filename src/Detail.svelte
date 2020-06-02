<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import Layout from './components/Layout.svelte';
  import { charitiesStore } from './store.js';

  export let params = {};
  let currentProject = null;

  charitiesStore.subscribe((value) => (currentProject = value[params.cid]));
</script>

<style>
  div {
    border: 1px solid black;
    padding: 1em;
    text-align: center;
  }
</style>

<Layout>
  <div transition:fly={{ duration: 1000, y: 100 }}>
    {#if currentProject}
      <h2>{currentProject.title}</h2>
      <img src={currentProject.img} alt="project placeholder" />
      <p>{currentProject.description}</p>
      <div>
        <p>Raised: {currentProject.raised}</p>
        <p>Goal: {currentProject.goal}</p>
      </div>
    {/if}
    <hr />
    <a href="/">Back</a>
  </div>
</Layout>
