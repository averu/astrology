<script>
  const selectBox = {
    max: 20,
    min: 8,
  };
  let selected = 10;
</script>

<span>
  <input type="range" value="{selected}" min="{selectBox.min}" max="{selectBox.max}" step="1"
    oninput="document.getElementById('output').value=this.value">
  <output id="output">{selected}</output>
</span>

<style>
  input[type=range] {
    -webkit-appearance: none;
    background: #fff;
    height: 5px;
    width: 130px;
    border-radius: 8px;
  }
  input[type=range]::-webkit-slider-thumb{
    -webkit-appearance: none;
    background:#fff;
    border: 1px solid #448FFF;
    height: 20px;
    width: 5px;
    border-radius: 5px;
  }
  input[type=range]::-ms-tooltip {
    display:none;
  }
  input[type=range]::-moz-range-track {
    height:0;
  }
  input[type=range]::-moz-range-thumb {
    background:#fff;
    border: 1px solid #448FFF;
    height: 20px;
    width: 130px;
    border-radius: 5px;
  }
</style>