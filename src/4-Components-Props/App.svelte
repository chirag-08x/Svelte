<!-- We can only pass prop values from parent to child components, vice-versa is not allowed. -->

<script>
    import Other from "./Other.svelte"
    export let name;
    // 21 is the default value, if the value is not passed, then svelte will render 21 else the value passed.
    export let age = 21;
</script>


<h1>Hello {name}, you are {age} years old.</h1>
<!-- To pass multiple properties at once use an object instead for simplicity <Other props={...obj} />-->
<Other height={6} />