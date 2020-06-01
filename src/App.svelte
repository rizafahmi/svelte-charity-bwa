<script>
  import Navigation from './components/Navigation.svelte';
  import CharityList from './components/CharityList.svelte';

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

</style>

<main>
  <Navigation />
  <CharityList {charities} />
</main>
