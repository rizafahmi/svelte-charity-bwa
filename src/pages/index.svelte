<script>
  import { projects } from '../data.json';
  import { url } from '@sveltech/routify';
</script>

<style>
  .project-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 10px;
  }
  .project {
    display: grid;
    grid-template-rows: max-content 50px 1fr;
    border: 1px solid black;
  }
  .project img {
    object-fit: cover;
    width: 100%;
  }
  .project h2 {
    padding: 0.5em;
  }
  .project p {
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

<div class="project-list">
  {#each projects as project}
    <div class="project">
      <img src={project.img} alt="" />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ul class="progress">
        <li>Jumlah sumbangan: {project.raised}</li>
        <li>Jumlah yang ingin dicapai: {project.goal}</li>
      </ul>
      <a class="button" href={$url(`/detail/${project.id}`)}>Lihat</a>
    </div>
  {/each}
</div>
