<script>
    let technologies = ['HTML', "CSS", "JavaScript"]

    let person = {
        name : "chirag",
        age : 21,
        profession : "student"
    }

    // Arrays
    setTimeout(() => {
        // This won't work Svelte won't check for Change
        // technologies.push("Svelte")

        // One way to solve it is assigning the array again.
        // Svelte only looks for change if there is an equal sign, it doesn't looks for change for array/object methods.
        // technologies = technologies;

        // Better way of doing it is -
        technologies = [...technologies, "Svelte"]
    }, 3000)

    // Objects
    setTimeout(() => {
        person.profession = "Developer"
    }, 3000)
</script>

<ul>
    {#each technologies as item}
        <li>{item}</li>
    {/each}
</ul>

<h1>{person.name} is {person.age} years old and is a {person.profession}</h1>