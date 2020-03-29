<script>
  import FontSetting from './components/FontSetting.svelte';
</script>

<main>
  <h1>Astrology</h1>
  <FontSetting />
</main>

<style>
  main {
    margin: 0 auto;
    background-color: #aaa;
    font-family: "Noto Sans JP";
  }

  h1 {
    font-family: 'Fredoka One', cursive;
    text-align: center;
    color: #fff;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>