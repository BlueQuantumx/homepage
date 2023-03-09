<script lang="ts">
  import RandomText from "./lib/RandomText.svelte";
</script>

<main>
  <div>
    <a href="https://www.bluequantum.top" target="_blank" rel="noreferrer">
      <img src="/favicon.ico" class="logo" alt="Avatar" />
    </a>
  </div>
  <h1>
    <RandomText initialText="BlueQuantum" duration={3500} />
  </h1>
  <h2>
    <RandomText initialText="I won't ignore my life anymore." duration={3500} />
  </h2>

  <p>
    <a
      class="card"
      href="https://github.com/BlueQuantumx"
      target="_blank"
      rel="noreferrer">GitHub</a
    >
    <a
      class="card"
      href="https://gitee.com/bluequantum"
      target="_blank"
      rel="noreferrer">Gitee</a
    >
    <a
      class="card"
      href="https://blog.bluequantum.top"
      target="_blank"
      rel="noreferrer">Blog</a
    >
    <a
      class="card"
      href="/encrypass"
      target="_blank"
      rel="noreferrer">Encrypass</a
    >
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
