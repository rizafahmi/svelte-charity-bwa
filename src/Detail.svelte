<script>
  import Template from './Template.svelte';
  import projects from './data.json';

  export let params = {};
  const currentProject = projects[params.pid];
</script>

<style>
  div {
    border: 1px solid black;
    padding: 1em;
    text-align: center;
  }
</style>

<Template>
  <div>
    <h2>{currentProject.title}</h2>
    <img src={currentProject.img} alt="project placeholder" />
    <p>{currentProject.description}</p>
    <div>
      <p>Raised: {currentProject.raised}</p>
      <p>Goal: {currentProject.goal}</p>
    </div>
    <hr />
    <a href="/">Back</a>
  </div>
</Template>
