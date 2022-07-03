<script>
  let name = "hello";

  setTimeout(() => {
    name = "world";
  }, 3000)

  let a = 10;
  let b = 20;

  let myHTML = "<h2>Adding HTML</h2>"
</script>

<div>
  <h1>{name}</h1>
  <h2>{a} + {b} = {a + b}</h2>
  {@html myHTML}
</div>