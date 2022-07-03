<script>
    import Other from "./Other.svelte"
    let src = "images/tree.jpg";
    let altName = "TREE"

    let disabled = true;

    let greenText = "yes";
    let red = true

    setInterval(() => {
        red = !red;
    }, 1000)
</script>

<!-- If variable name matches with attribute name we can specify only one of them. -->
<img {src} width="400px" alt="{altName} IMG">
<input type="text" placeholder="DISABLED INPUT" {disabled}>

<!-- Adding classes conditionally -->
<h1 class="global" class:green={greenText === "yes"}>Hello World</h1>
<!-- If class variables name is equal and we are using booleans to toggle class -->
<h1 class="global" class:red>Hello World</h1>

<!-- Styles -->
<!-- Styles in Svelte are scoped to the components they are declared in, i.e. styles that we applied in the <p> tag below would only apply to the <p> tag of this component. -->
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, libero!</p>
<!-- <p> Styles that are declared in App.svelte won't be applied to <p> of Other.svelte -->
<Other/>
<h2>Global CSS</h2>

<style>
    .global{
        text-decoration: underline;
    }

    .green{
        color:green;
    }

    .red{
        color:red;
    }

    p{
        color:blue;
        text-transform: capitalize;
        font-size: 1.5rem;
        background-color: rgb(202, 202, 202);
        padding : 1rem 1rem;
    }

    /* Global CSS */
    :global(h2){
        color:darkcyan;
    }
</style>