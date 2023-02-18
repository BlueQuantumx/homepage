<script lang="ts">
  import { run } from "./gen";

  export let initialText: string;
  export let duration: number;

  let isRunning = false;
  let currentText = "";

  function play() {
    if (isRunning) return;
    const history = run(initialText).history;
    isRunning = true;
    console.log(initialText, history.length);
    history.forEach((text, i) => {
      setTimeout(() => {
        currentText = text;
        if (i + 1 === history.length) isRunning = false;
      }, i / history.length * duration);
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
