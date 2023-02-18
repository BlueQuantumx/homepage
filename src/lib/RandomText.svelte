<script lang="ts">
  import { run } from "./gen";

  export let initialText: string;

  let isRunning = false;
  let currentText = "";

  function play() {
    if (isRunning) return;
    const history = run(initialText).history;
    isRunning = true;
    history.forEach((text, i) => {
      setTimeout(() => {
        currentText = text;
        if (i + 1 === history.length) isRunning = false;
      }, i * 30);
    });
  }

  play();
</script>

<div on:click={play} on:keypress={play}>
  {currentText}
</div>

<style lang="less">
  div {
    font-family: "Courier New", Courier, monospace;
  }
</style>
