<script>
  import Charity from './Charity.svelte';
  export let charities;
  let keyword = '';
  let filteredList = [];
  $: filteredList = charities.filter(
    (charity) => charity.title.toLowerCase().indexOf(keyword) !== -1
  );

  function handleResetButton() {
    keyword = '';
  }
</script>

<style>
  .charity-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 10px;
  }
  input {
    border: 1px solid black;
  }
</style>

<input type="text" placeholder="Search for charity..." bind:value={keyword} />
<button type="button" on:click={handleResetButton}>Reset</button>
<div class="charity-list">
  {#each filteredList as charity}
    <Charity {charity} />
  {/each}
</div>
