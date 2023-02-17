<script lang="ts">
  import icon from "./assets/favicon.ico";
  import RandomText from "./lib/RandomText.svelte";
</script>

<main>
  <div>
    <a href="https://www.bluequantum.top" target="_blank" rel="noreferrer">
      <img src={icon} class="logo" alt="Avator" />
    </a>
  </div>
  <h1>
    <RandomText initialText="BlueQuantum" />
  </h1>
  <h2>
    <RandomText initialText="I won't ignore my life anymore." />
  </h2>

  <p>
    Find me at <a
      class="card"
      href="https://github.com/BlueQuantumx"
      target="_blank"
      rel="noreferrer">GitHub</a
    >
    ...
  </p>
</main>

<style lang="less">
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
  }
</style>
