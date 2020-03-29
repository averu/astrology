<script>
  import SelectBox from './SelectBox.svelte';
  import Slider from './Slider.svelte';
  import ColorSetting from './ColorSetting.svelte';
</script>

<div class="panel">
  <h1>
    背景
  </h1>
  <div>
    <div>
      <div class="property">
        <span class="column">背景色</span>
        <ColorSetting/>
      </div>
      <div class="property">
        <span class="column">視聴者</span>
        <ColorSetting/>
      </div>
      <div class="property">
        <span class="column">チャンネル管理者</span>
        <ColorSetting/>
      </div>
      <div class="property">
        <span class="column">スポンサー</span>
        <ColorSetting/>
      </div>
      <div class="property">
        <span class="column">モデレーター</span>
        <ColorSetting/>
      </div>
    </div>
  </div>
</div>

<style>
  .panel {
    background-color: #5a5a5a;
    width: 350px;
    color: #fff;
    font-size: 1em;
    padding: 5px 10px;
    border-radius: 10px;
    filter: drop-shadow(4px 4px 4px #60606099);
  }
  h1 {
    font-size: 1.5em;
    margin: 3px 0;
  }
  h2 {
    font-size: 1.2em;
    margin: 13px 0;
    padding-left: 20px;
  }
  .property {
    margin: 13px 0;
    padding-left: 20px;
  }
  .column {
    display: inline-block;
    width: 150px;
  }
</style>