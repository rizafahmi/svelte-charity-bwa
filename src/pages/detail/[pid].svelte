<script>
  import { projects } from '../../data.json';

  export let pid;

  const detail = projects.find((project) => project.id === parseInt(pid));
</script>

<style>

</style>

<h1>{detail.title}</h1>
<pre>{JSON.stringify(detail)}</pre>
<a href="/">Back</a>
