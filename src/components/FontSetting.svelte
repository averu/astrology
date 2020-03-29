<script>
  import SelectBox from './SelectBox.svelte';
  import Slider from './Slider.svelte';
  import ColorSetting from './ColorSetting.svelte';
</script>

<div class="panel">
  <h1>
    フォント設定
  </h1>
  <div>
    <h2>フォント</h2>
    <div>
      <div class="property">
        <span class="column">使用フォント</span>
        <SelectBox/>
      </div>
      <div class="property">
        <span class="column">フォントサイズ</span>
        <Slider/>
      </div>
    </div>
  </div>
  <div>
    <h2>縁取り</h2>
    <div>
      <div class="property">
        <span class="column">縁取りの太さ</span>
        <Slider />
      </div>
      <div class="property">
        <span class="column">縁取りの色</span>
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
    padding-left: 40px;
  }
  select {
    width: 150px;
  }
  .column {
    display: inline-block;
    width: 120px;
  }
</style>