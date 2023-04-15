<script>
  import Router from 'svelte-spa-router'
  import { routes } from './router/routes'

  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
  } 
</script>

<style lang="postcss"></style>

<main class="overflow-hidden">
  <Router {routes}/>
</main>
