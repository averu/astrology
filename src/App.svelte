<script>
  import FontSetting from './components/FontSetting.svelte';
  import ChatPreview from './components/ChatPreview.svelte';
  import BackgroundSetting from './components/BackgroundSetting.svelte';
</script>

<main>
  <h1>Astrology</h1>
  <div id="container">
    <div id="#chat"><ChatPreview /></div>
    <div id="#font"><FontSetting /></div>
    <div id="background"><BackgroundSetting /></div>
  </div>
</main>

<style>
  main {
    margin: 15px;
    background-color: #ccc;
    font-family: "Noto Sans JP";
  }

  h1 {
    font-family: 'Fredoka One', cursive;
    text-align: center;
    color: #fff;
    font-size: 4em;
    font-weight: 100;
  }

  #container {
    display: grid; /* グリッドレイアウト */
    grid-template-rows: 300px 50px;
    grid-template-columns: 550px 1fr;
  }
  #chat {
      grid-row: 1 / 3;
      grid-column: 1 / 2;
  }
  #font {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
  #background {
    grid-row: 2 / 2;
    grid-column: 2 / 3;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>