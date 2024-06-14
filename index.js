

fetchData();

async function fetchData(){

    try{

        const PokemonName = document.getElementById("input").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch data");
        }

        const data = await response.json();
        const imageSource = data.sprites.other.home.front_default;
        const image = document.getElementById("image");

        image.src = imageSource;
        image.style.display = "block";

    }
    catch(error){
        console.error(error);
    }

}

