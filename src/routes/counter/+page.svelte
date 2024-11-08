<script>
  let count = 0;
</script>

<h1>Welcome to SvelteKit</h1>
<button on:click={() => count++}>Click to increase</button>
<p>Count: {count}</p>