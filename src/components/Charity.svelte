<script>
  import { fly } from 'svelte/transition';
  export let charity;
</script>

<style>
  .charity {
    display: grid;
    grid-template-rows: max-content 50px 1fr;
    border: 1px solid black;
  }
  .charity img {
    object-fit: cover;
    width: 100%;
  }
  .charity h2 {
    padding: 0.5em;
  }
  .charity p {
    padding: 0.5em;
  }
  .project a {
    padding: 0.5em;
  }
  .button {
    margin: 1em;
    border: 1px solid black;
    text-align: center;
  }
</style>

<div class="charity" transition:fly={{ duration: 1000, y: 100 }}>
  <img src={charity.img} alt="" />
  <h2>{charity.title}</h2>
  <p>{charity.description}</p>
  <ul class="progress">
    <li>Jumlah sumbangan: {charity.raised}</li>
    <li>Jumlah yang ingin dicapai: {charity.goal}</li>
  </ul>
  <a class="button" href={`#/detail/${charity.id}`}>Lihat</a>
  <a class="button" href={`#/donate/${charity.id}`}>Donasi</a>
</div>
