<!-- If a variable is dependent upon another variable, and if we change some value in the parent variable, it won't change in the child variable. To fix this we use reactivity. Though if we use variables directly in the DOM, and update them, we will see real time updation there. -->

<!-- 
    We can also use a block inside reactive variables 
    i.e. $: {your code goes here} 
    or 
    $:(condition) {your cod goes here}
-->

<script>
    let age = 21;
    let name = "chirag"
    let text = `Hello your name is ${name} and you are ${age} years old.`

    function increaseAge(){
        age = age + 1;
    }

    let age2 = 21;
    let name2 = "chirag"
    $: anothetText = `Hello your name is ${name2} and you are ${age2} years old.`

    function increase() {
        age2 = age2 + 1;
    }

</script>
<h2>independent vairbales</h2>
<h1>Hello your name is {name} and you are {age} years old.</h1>
<button on:click={increaseAge}>increase</button>
<br><br><br><br><br>
<h2>Without Reactivity</h2>
<h1>{text}</h1>
<button on:click={increaseAge}>increase</button>
<br><br><br><br><br>
<h2>With Reactivity</h2>
<h1>{anothetText}</h1>
<button on:click={increase}>increase</button>