import App from "./4-Components-Props/App.svelte";

const app = new App({
  target: document.getElementById("app"),
  props: {
    name: "chirag",
  },
});

export default app;
