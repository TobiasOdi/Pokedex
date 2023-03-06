/* =========================================================== BEISPIEL ================================================== */
/* let currentPokemon;


async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log('Loaded Pokemon', currentPokemon);

    renderPokemonInfo();
}

function renderPokemonInfo(){
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
} */

/* ==================================================== VARIABLES ==================================================================*/
let firstPokemon = 1;

// Pokemon overview
let results

let indexNumber; // ok
let pokemonName; // ok
let pokemonNameUpperCase; // ok
let pokemonImg; // ok
let pokemonImg2 // ok
let type; // ok
let typeUpperCase; // ok
let type2; // ok

// Pokemon Infos
let spicies; // ok
let height; // ok
let weight; // ok
let abilities; // ok
let abilites2; // ok
let weakness;
let genders;

// Pokemon Stats
let hp; // ok
let attack; // ok
let defense; // ok
let specialAttack; // ok
let specialDefense; // ok
let speed; // ok

// Pokemon Evolution
let base; 
let firstEvo; 
let secondEvo; 
let thirdEvo; 

let url;
let response;
let overviewStats;

let url2;
let response2;
let overviewStats2;

let url3;
let response3;
let overviewStats3;

let url4;
let response4;
let overviewStats4;

/* =========================================================== POKEDEX OPEN/CLOSE ================================================== */
function openPokedex() {
    document.getElementById('startButton').classList.add('dNone');

    document.getElementById('homeScreenContainer').classList.add('homeScreenContainerOpened');
    
    document.getElementById('pokemonContainer').style.width = '94%';
    document.getElementById('pokemonContainer').style.height = '90%';

    document.getElementById('subContainer').style.zIndex = '-1';

    document.getElementById('shadow').style.animation = 'none';
    document.getElementById('shadow').style.display = 'none';

    document.getElementById('corner1').style.height = '50px';
    document.getElementById('corner1').style.width = '58.5px';

    document.getElementById('corner2').style.height = '50px';
    document.getElementById('corner2').style.width = '58.5px';

    document.getElementById('corner3').style.height = '50px';
    document.getElementById('corner3').style.width = '58.5px';

    document.getElementById('corner4').style.height = '50px';
    document.getElementById('corner4').style.width = '58.5px';
}

function closePokedex() {
    document.getElementById('startButton').classList.remove('dNone');

    document.getElementById('homeScreenContainer').classList.remove('homeScreenContainerOpened');

    document.getElementById('pokemonContainer').style.height = '400px';
    document.getElementById('pokemonContainer').style.width = '450px';

    document.getElementById('subContainer').style.zIndex = '1';

    document.getElementById('shadow').style.animation = 'shrink 3s ease-in-out infinite';
    document.getElementById('shadow').style.display = 'block';

    document.getElementById('corner1').style.height = '206px';
    document.getElementById('corner1').style.width = '241px';

    document.getElementById('corner2').style.height = '206px';
    document.getElementById('corner2').style.width = '241px';

    document.getElementById('corner3').style.height = '206px';
    document.getElementById('corner3').style.width = '241px';

    document.getElementById('corner4').style.height = '206px';
    document.getElementById('corner4').style.width = '241px';
}

/* =========================================================== RENDER ALL POKEMONS ================================================== */
async function renderAllPokemons() {
    let allPokemons = document.getElementById('allPokemons');

    for (let i = 0; i < 20 /* results.length */; i++) {
        let currentPokemon = i+1;

        url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
        response = await fetch(url);
        overviewStats = await response.json();
        results = overviewStats['results'];
        pokemonName = results[i]['name'];
        pokemonNameUpperCase = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    
        url2 = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}/`; 
        response2 = await fetch(url2);
        overviewStats2 = await response2.json();
        pokemonImg = overviewStats2['sprites']['other']['dream_world']['front_default'];
        type = overviewStats2['types'][0]['type']['name'];  
        typeUpperCase = type.charAt(0).toUpperCase() + type.slice(1);

        allPokemons.innerHTML += smallPokemonCardTemplate(currentPokemon, pokemonImg, pokemonNameUpperCase, typeUpperCase);
    }
}

function smallPokemonCardTemplate(currentPokemon, pokemonImg, pokemonNameUpperCase, typeUpperCase) {
    return /*html*/ `
        <div class="pokemonCard" onclick="openPokemonCard(${currentPokemon})">
            <div class="cardHeader">
                <div>
                    <div class="favorite">
                        <img src="./img/icons/favorite empty.png">
                    </div>
                    <div class="indexNumber"># <span>${currentPokemon}</span></div>
                </div>
                <div class="pokemonImg">
                    <img src="${pokemonImg}">
                </div>
                <div>
                    <div class="name">${pokemonNameUpperCase}</div>
                    <div class="type">${typeUpperCase}</div>
                </div>
            </div>
        </div>
    `;
}

/* async function getDataFromAllPokemonUrl(currentPokemon) {
    url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
    response = await fetch(url);
    overviewStats = await response.json();
    results = overviewStats['results'];
    pokemonName = results[i]['name'];
    pokemonNameUpperCase = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
} */

/* async function getDataFromPokemonUrl(currentPokemon) {
        url2 = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}/`; 
        response2 = await fetch(url2);
        overviewStats2 = await response2.json();

        pokemonImg = overviewStats2['sprites']['other']['dream_world']['front_default'];
        height = overviewStats2['height'];
        weight = overviewStats2['weight'];        
        type2 =overviewStats2['types'][1]['type']['name'];
        hp = overviewStats2['stats'][0]['base_stat'];
        attack = overviewStats2['stats'][1]['base_stat'];
        defense = overviewStats2['stats'][2]['base_stat'];
        specialAttack = overviewStats2['stats'][3]['base_stat'];
        specialDefense = overviewStats2['stats'][4]['base_stat'];
        speed = overviewStats2['stats'][5]['base_stat'];
        abilities = overviewStats2['abilities'][0]['ability']['name'];
        abilites2 = overviewStats2['abilities'][1]['ability']['name']; 
}*/

/* async function getDataFromSpeciesUrl(currentPokemon) {
    url3 = `https://pokeapi.co/api/v2/pokemon-species/${currentPokemon}/`; 
    response3 = await fetch(url3);
    overviewStats3 = await response3.json();

    spicies = overviewStats3['genera'][7]['genus'];  
}*/

/* async function getDataFromEvolutionUrl(currentPokemon) {
    url4 = `https://pokeapi.co/api/v2/evolution-chain/${currentPokemon}/`; 
    response4 = await fetch(url4);
    overviewStats4 = await response4.json();

     base; 
    firstEvo = overviewStats4['chain']['evolves_to'][0]['species']['name']; 
    secondEvo = overviewStats4['chain']['evolves_to'][0]['evolves_to'][0]['species']['name']; 
    thirdEvo = overviewStats4['chain']['evolves_to'][0]['evolves_to']['evolves_to']['species']['name'];    
} */

/* =========================================================== OPEN POKEMON CARD ================================================== */
async function openPokemonCard(currentPokemon) {

    url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
    response = await fetch(url);
    overviewStats = await response.json();
    results = overviewStats['results'];
    pokemonName = results[currentPokemon-1]['name'];
    pokemonNameUpperCase = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

    url2 = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}/`; 
    response2 = await fetch(url2);
    overviewStats2 = await response2.json();
    pokemonImg = overviewStats2['sprites']['other']['dream_world']['front_default'];
    type = overviewStats2['types'][0]['type']['name'];  
    typeUpperCase = type.charAt(0).toUpperCase() + type.slice(1);
    height = overviewStats2['height'];
    height = height / 10;
    weight = overviewStats2['weight'];  
    weight = weight / 10;
    abilities = overviewStats2['abilities'][0]['ability']['name'];
      
    url3 = `https://pokeapi.co/api/v2/pokemon-species/${currentPokemon}/`; 
    response3 = await fetch(url3);
    overviewStats3 = await response3.json();

    spicies = overviewStats3['genera'][7]['genus'];  

    let pokemon = document.getElementById('bigPokemonCardContainer');
    pokemon.innerHTML += bigPokemonCardTemplate(currentPokemon);
    pokemon.classList.add('display');

}

function bigPokemonCardTemplate(currentPokemon) {
return /*html*/ `
    <div class="bigPokemonCard">
        <div class="cardHeader">
            <div>
                <div class="favorite">
                    <img src="./img/icons/favorite empty.png">
                </div>
                <div class="indexNumberBig"># <span>${currentPokemon}</span></div>
            </div>
            <div class="pokemonImgBig">
                <img src="${pokemonImg}">
            </div>
            <div>
                <div class="nameBig">${pokemonNameUpperCase}</div>
                <div class="typeBig">${typeUpperCase}</div>
            </div>
        </div>

        <div class="pokemonDataContainer" id="pokemonDataContainer">
            <div>
                <div class="info" onclick="renderInfo()">
                    <div>Info</div>
                    <div>
                        <img src="./img/icons/info.png">
                    </div>
                </div>

                <div class="infoContent" id="infoContent">
                <!-- ==================  Info TEMPLATE  ======================== -->
                    <div class="infoData">
                        <div>
                            <div>Spicies</div>
                            <div>${spicies}</div>
                        </div>
                        <div>
                            <div>Height</div>
                            <div>${height}</div>
                        </div>
                        <div>
                            <div>Weight</div>
                            <div>${weight}</div>
                        </div>
                        <div>
                            <div>Abilities</div>
                            <div>${abilities}</div>
                        </div>
                        <div>
                            <div>Weakness</div>
                            <div>XXXXXXXXX</div>
                        </div>
                        <div>
                            <div>Moves</div>
                            <div>XXXXXXXXX</div>
                        </div>
                    </div>  
                </div>
            </div>

            <div>
                <div class="info" onclick="renderStats()">
                    <div>Stats</div>
                    <div>
                        <img src="./img/icons/data.png">
                    </div>
                </div>

                <div class="infoContent" id="infoContent">
                <!-- ==================  Stats TEMPLATE  ======================== -->
                    <div class="infoData">
                    </div>  
                </div>
            </div>

            <div>
                <div class="info" onclick="renderEvolution()">
                    <div>Evolution</div>
                    <div>
                        <img src="./img/icons/increase.png">
                    </div>
                </div>

                <div class="infoContent" id="infoContent">
                <!-- ==================  Evolution TEMPLATE  ======================== -->
                    <div class="infoData">
                    </div>  
                </div>
            </div>
        </div> 
    </div>
`;
}

/* =========================================================== RENDER INFO ================================================== */
function renderInfo() {

}





/* =========================================================== RENDER STATS ================================================== */
function renderStats() {
    
}




/* =========================================================== RENDER EVOLUTION ================================================== */
function renderEvolution() {
    
}











/* =========================================================== CLOSE POKEMON CARD ================================================== */
function closePokemonCard() {

}


















