<script>
  import Charity from './Charity.svelte';
  export let charities;
</script>

<style>
  .charity-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 10px;
  }
</style>

<div class="charity-list">
  {#each charities as charity}
    <Charity {charity} />
  {/each}
</div>
