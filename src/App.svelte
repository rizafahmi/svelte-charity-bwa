<script>
  import Navigation from './components/Navigation.svelte';

  const charities = [
    {
      id: 0,
      title: 'Edukasi untuk Semua',
      description: 'Menyediakan sarana edukasi untuk semua anak Indonesia.',
      img:
        'https://cdn.pixabay.com/photo/2017/07/30/16/22/kid-2554803_1280.jpg',
      raised: 0,
      goal: 10000000
    },
    {
      id: 1,
      title: 'Komputer untuk Anak Indonesia',
      description: 'Menyediakan perangkat komputer untuk semua anak Indonesia.',
      img:
        'https://cdn.pixabay.com/photo/2016/11/14/03/14/children-1822471_1280.jpg',
      raised: 0,
      goal: 10000000000
    }
  ];
</script>

<style>
  .charity-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 10px;
  }
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
  .charity a {
    padding: 0.5em;
  }
  .button {
    margin: 1em;
    border: 1px solid black;
    text-align: center;
  }
</style>

<main>
  <Navigation />
  <div class="charity-list">
    {#each charities as charity}
      <div class="charity">
        <img src={charity.img} alt="" />
        <h2>{charity.title}</h2>
        <p>{charity.description}</p>
        <ul class="progress">
          <li>Jumlah sumbangan: {charity.raised}</li>
          <li>Jumlah yang ingin dicapai: {charity.goal}</li>
        </ul>
        <a class="button" href={`#/charity/${charity.id}`}>Lihat</a>
      </div>
    {/each}
  </div>
</main>
