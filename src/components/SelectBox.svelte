<script>
  const options = [
    { name: '' },
    { name: 'hoge1' },
    { name: 'hoge2' },
    { name: 'hoge3' },
  ];
  let selected = options[0];
</script>

<select bind:value="{selected}">
  {#each options as option}
    <option value="{option}">{option.name}</option>
  {/each}
</select>

<style>
  select {
    width: 150px;
    border-radius: 3px;
  }
</style>