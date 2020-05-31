<script>
  import Template from './Template.svelte';
  export let params = {};
</script>

<Template>

  <p>{JSON.stringify(params)}</p>
  <a href="/">Back</a>
</Template>
