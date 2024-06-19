<script>
  import "./index.css";
  let count = 0;
  window.addToCart = () => {
    count += 1;
  };
</script>

<header>
  <div>Count From React On Svelte</div>
  <div class="text-2xl">{count}</div>
</header>
