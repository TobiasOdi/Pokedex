/* ==================================================== VARIABLES ==================================================================*/
let firstPokemon = 1;
let nextPokemonCounter = 31;
let currentPokemonCounter = 1;

// Pokemon overview
let results;
let indexNumber;
let indexNumberBig;
let pokemonName;
let pokemonNameUpperCase;
let pokemonImg;
let pokemonImg2
let type;
let typeUpperCase;
let type2;

// Pokemon Infos
let spicies;
let height;
let weight;
let abilities;
let weakness;
let gender;

// Pokemon Stats
let hp;
let hpMax = 255;
let attack;
let attackMax = 190;
let defense;
let defenseMax = 150;
let specialAttack;
let specialAttackMax = 194;
let specialDefense;
let specialDefenseMax = 230;
let speed;
let speedMax = 160;

// Pokemon Moves
let moves;

// Load next Pokemon
let loading = false;
let loadingSearch = false;

/* =========================================================== POKEDEX OPEN/CLOSE ================================================== */
function openPokedex() {
    if(window.innerWidth <= 500) {
        document.getElementById('startButton').classList.add('dNone');
        document.getElementById('homeScreenContainer').classList.add('homeScreenContainerOpened');
        document.getElementById('subContainer').style.display = 'none';
        document.getElementById('loadNextPokemon').style.display = 'flex';
        document.getElementById('subContainer').style.display = 'none';

    } else if(window.innerWidth <= 1050) {
        document.getElementById('startButton').classList.add('dNone');
        document.getElementById('homeScreenContainer').classList.add('homeScreenContainerOpened');
        document.getElementById('pokemonContainer').style.width = '88%';
        document.getElementById('pokemonContainer').style.height = '88%';
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
        document.getElementById('loadNextPokemon').style.display = 'flex';

    } else if (window.innerWidth <= 700) {
        document.getElementById('startButton').classList.add('dNone');
        document.getElementById('homeScreenContainer').classList.add('homeScreenContainerOpened');
        document.getElementById('pokemonContainer').style.width = '80%';
        document.getElementById('pokemonContainer').style.height = '88%';
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
        document.getElementById('loadNextPokemon').style.display = 'flex';

    } else {
        document.getElementById('startButton').classList.add('dNone');
        document.getElementById('homeScreenContainer').classList.add('homeScreenContainerOpened');
        document.getElementById('pokemonContainer').style.width = '92%';
        document.getElementById('pokemonContainer').style.height = '88%';
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
        document.getElementById('loadNextPokemon').style.display = 'flex';
    }
}

function closePokedex() {
    if(window.innerWidth <= 500) {
        document.getElementById('startButton').classList.remove('dNone');
        document.getElementById('homeScreenContainer').classList.remove('homeScreenContainerOpened');
        document.getElementById('subContainer').style.zIndex = 'block';
        document.getElementById('loadNextPokemon').style.display = 'none';
        document.getElementById('subContainer').style.display = 'flex';


    } else {
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
        document.getElementById('loadNextPokemon').style.display = 'none';
    }
}

/* =========================================================== Init Function ================================================== */
async function init() {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
    let response = await fetch(url);
    let overviewStats = await response.json();
    await renderAllPokemons(overviewStats);
}

/* =========================================================== RENDER ALL POKEMONS ================================================== */
async function renderAllPokemons(overviewStats) {
    let allPokemons = document.getElementById('allPokemons');
    let results = overviewStats['results'];

    for (let i = currentPokemonCounter; i < nextPokemonCounter; i++) {
        let currentPokemon = i;
        pokemonSmallCardData1(currentPokemon, results);

        let url2 = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}/`; 
        let response2 = await fetch(url2);
        let overviewStats2 = await response2.json();
        pokemonSmallCardData2(currentPokemon, overviewStats2);

        allPokemons.innerHTML += smallPokemonCardTemplate(currentPokemon, pokemonImg, pokemonNameUpperCase, typeUpperCase);
        document.getElementById('type' + currentPokemon).classList.add(type);
        document.getElementById('cardHeader' + currentPokemon).classList.add(type);
    }
    currentPokemonCounter = currentPokemonCounter + 30;
    nextPokemonCounter = nextPokemonCounter + 30;
}

async function pokemonSmallCardData1(currentPokemon, results) {
    pokemonName = results[currentPokemon - 1]['name'];
    pokemonNameUpperCase = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    getIndexNumber(currentPokemon);
}

function getIndexNumber(currentPokemon) {
    if(currentPokemon < 10) {
        indexNumber = '000' + currentPokemon.toString();
        } else if (currentPokemon > 9 && currentPokemon < 100) {
            indexNumber = '00' + currentPokemon.toString();
        } else if(currentPokemon > 99 && currentPokemon < 1000) {
            indexNumber = '0' + currentPokemon.toString(); 
        } else if(currentPokemon >= 1000) {
            indexNumber = currentPokemon.toString();
        }
}

async function pokemonSmallCardData2(currentPokemon, overviewStats2) {
    if(currentPokemon < 650) {
        pokemonImg = overviewStats2['sprites']['other']['dream_world']['front_default'];
    } else {
        pokemonImg = overviewStats2['sprites']['other']['official-artwork']['front_shiny'];
    }
    type = overviewStats2['types'][0]['type']['name'];  
    typeUpperCase = type.charAt(0).toUpperCase() + type.slice(1);
}

function smallPokemonCardTemplate(currentPokemon, pokemonImg, pokemonNameUpperCase, typeUpperCase) {
    return /*html*/ `
        <div class="pokemonCard" onclick="openPokemonCard(${currentPokemon})">
            <div id="cardHeader${currentPokemon}" class="cardHeader">
                <div>
                    <div class="closePokemonCard">
                    </div>
                    <div class="indexNumber"># <span>${indexNumber}</span></div>
                </div>
                <div class="pokemonImg">
                    <img src="${pokemonImg}">
                </div>
                <div>
                    <div class="name">${pokemonNameUpperCase}</div>
                    <div id="type${currentPokemon}" class="type">${typeUpperCase}</div>
                </div>
            </div>
        </div>
    `;
}

function backToMainPage() {
    location.reload();
}

/* =========================================================== SEARCH FUNCTION ================================================== */
async function enterKeyPressed(event) {
    document.getElementById('loader-wrapper').style.display = "block";
    if(!loadingSearch)
        loadingSearch = true;
        if (event.keyCode === 13) {
            await search();
        }
        document.getElementById('loader-wrapper').style.display = "none";
        loadingSearch = false;
}

async function search() { 
    let url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
    let response = await fetch(url);
    let overviewStats = await response.json();
    let results = overviewStats['results'];

    nextPokemonCounter = 1011;
    currentPokemonCounter = 1;

    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    let allPokemons = document.getElementById('allPokemons');
    allPokemons.innerHTML = '';
    document.getElementById('searchIcon').src = "./img/icons/close.png";
    document.getElementById('searchIcon').style.cursor = "pointer";


    if(search == '') {
        searchEmpty();
    } else {

        for (let i = 1; i < 1011; i++) {
            let currentPokemon = i;
            
            pokemonName = results[currentPokemon - 1]['name'];
            pokemonNameUpperCase = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
            let url2 = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}/`; 
            let response2 = await fetch(url2);
            let overviewStats2 = await response2.json();
            pokemonSmallCardData2(currentPokemon, overviewStats2);
            getIndexNumber(currentPokemon);
    
            if(pokemonName.toLowerCase().includes(search) || type.toLowerCase().includes(search)){
                containsSearchParameters(currentPokemon, pokemonImg, pokemonNameUpperCase, typeUpperCase);
            } 
        }
    }
}

 function searchEmpty() {
    document.getElementById('searchIcon').src = "./img/icons/search.png";
    document.getElementById('search').value = "";
    allPokemons.innerHTML = "";
    nextPokemonCounter = 31;
    currentPokemonCounter = 1;
    init();
 }

function containsSearchParameters(currentPokemon, pokemonImg, pokemonNameUpperCase, typeUpperCase) {
    allPokemons.innerHTML += smallPokemonCardTemplate(currentPokemon, pokemonImg, pokemonNameUpperCase, typeUpperCase);
    document.getElementById('type' + currentPokemon).classList.add(type);
    document.getElementById('cardHeader' + currentPokemon).classList.add(type);
}

/* =========================================================== OPEN POKEMON CARD ================================================== */
async function openPokemonCard(currentPokemon) {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
    let response = await fetch(url);
    let overviewStats = await response.json();
    bigPokemonCardData1(currentPokemon, overviewStats);

    let url2 = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}/`; 
    let response2 = await fetch(url2);
    let overviewStats2 = await response2.json();
    bigPokemonCardData2(currentPokemon, overviewStats2);
    
    let url3 = `https://pokeapi.co/api/v2/pokemon-species/${currentPokemon}/`; 
    let response3 = await fetch(url3);
    let overviewStats3 = await response3.json();
    bigPokemonCardData3(currentPokemon, overviewStats3);
}

function bigPokemonCardData1(currentPokemon, overviewStats) {
    let results = overviewStats['results'];
    pokemonName = results[currentPokemon-1]['name'];
    pokemonNameUpperCase = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    getIndexNumberBig(currentPokemon);
}

function getIndexNumberBig(currentPokemon) {
    if(currentPokemon < 10) {
        indexNumberBig = '000' + currentPokemon.toString();
        } else if (currentPokemon > 9 && currentPokemon < 100) {
        indexNumberBig = '00' + currentPokemon.toString();
        } else if(currentPokemon > 99 && currentPokemon < 1000) {
        indexNumberBig = '0' + currentPokemon.toString(); 
        }
}

function bigPokemonCardData2(currentPokemon, overviewStats2) {
    if(currentPokemon < 650) {
        pokemonImg = overviewStats2['sprites']['other']['dream_world']['front_default'];
    } else {
        pokemonImg = overviewStats2['sprites']['other']['official-artwork']['front_shiny'];
    }

    type = overviewStats2['types'][0]['type']['name'];  
    typeUpperCase = type.charAt(0).toUpperCase() + type.slice(1);
    height = overviewStats2['height'];
    height = height / 10;
    weight = overviewStats2['weight'];  
    weight = weight / 10;
    abilities = overviewStats2['abilities'];
    moves = overviewStats2['moves'];
    hp = overviewStats2['stats'][0]['base_stat'];
    attack = overviewStats2['stats'][1]['base_stat'];
    defense = overviewStats2['stats'][2]['base_stat'];
    specialAttack = overviewStats2['stats'][3]['base_stat'];
    specialDefense = overviewStats2['stats'][4]['base_stat'];
    speed = overviewStats2['stats'][5]['base_stat'];
}

function bigPokemonCardData3(currentPokemon, overviewStats3) {
    spicies = overviewStats3['genera'][7]['genus']; 
     let pokemon = document.getElementById('bigPokemonCardContainer');
    pokemon.innerHTML = '';
    pokemon.innerHTML += bigPokemonCardTemplate(currentPokemon);
    calculateProgressBar(hp, attack, defense, specialAttack, specialDefense, speed);
    renderMoves(moves);
    renderAbilities(abilities);
    pokemon.classList.add('display');
    addType(currentPokemon, type);
}


function addType(currentPokemon, type){
    document.getElementById('typeBig' + currentPokemon).classList.add(type);
    document.getElementById('cardHeaderBig' + currentPokemon).classList.add(type);
    document.getElementById('pokemonDataContainer').classList.add(type);
    document.getElementById('bigPokemonCard').classList.add(type);
}

function bigPokemonCardTemplate(currentPokemon) {
return /*html*/ `
    <div id="bigPokemonCard" class="bigPokemonCard" onclick="doNotClose(event)">
        <div id="cardHeaderBig${currentPokemon}" class="cardHeader cardHeaderBig">
            <div>
                <div class="closePokemonCard" onclick="closePokemonCard()">
                    <div>
                        <span>x</span>
                    </div>
                </div>
                <div class="indexNumberBig"><span># ${indexNumberBig}</span></div>
            </div>
            <div class="pokemonImgBig">
                <img src="${pokemonImg}">
            </div>
            <div>
                <div class="nameBig">${pokemonNameUpperCase}</div>
                <div id="typeBig${currentPokemon}" class="typeBig">${typeUpperCase}</div>
            </div>
        </div>

        <div class="pokemonDataContainer" id="pokemonDataContainer">

            <div id="infoContentContainer" class="contentContainerBackground">
                <div class="info" onclick="showInfo()">
                    <div id="infoTitle">Info</div>
                    <div>
                        <img src="./img/icons/info.png">
                    </div>
                </div>

                <div class="infoContent" id="infoContent">
                    <div class="infoData">
                        <div>
                            <div>Spicies</div>
                            <div>${spicies}</div>
                        </div>
                        <div>
                            <div>Height</div>
                            <div>${height} m</div>
                        </div>
                        <div>
                            <div>Weight</div>
                            <div>${weight} kg</div>
                        </div>
                        <div>
                            <div>Abilities</div>
                            <div id="abilities">

                            </div>
                        </div>
                        <div class="gender">
                            <div>Gender</div>
                            <div>
                                <div>
                                    <img class="genderIcon" src="./img/male.png">
                                    <span></span>
                                </div>
                                <div>
                                    <img class="genderIcon" src="./img/female.png">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>

            <div id="statsContentContainer">
                <div class="info" onclick="showStats()">
                    <div id="statsTitle" style="color: white;">Stats</div>
                    <div>
                        <img src="./img/icons/data.png">
                    </div>
                </div>

                <div class="statsContent dNone" id="statsContent">
                    <div class="statsData">
                        <div>
                            <div>HP</div>
                            <div>${hp}</div>
                            <div id="hp" class="progressBar">
                                <div id="hpProgress" class="progress"></div>
                            </div>
                        </div>
                        <div>
                            <div>Attack</div>
                            <div>${attack}</div>
                            <div id="attack" class="progressBar">
                                <div id="attackProgress" class="progress"></div>
                            </div>
                        </div>
                        <div>
                            <div>Defense</div>
                            <div>${defense}</div>
                            <div id="defense" class="progressBar">
                                <div id="defenseProgress" class="progress"></div>
                            </div>
                        </div>
                        <div>
                            <div>Special Attack</div>
                            <div>${specialAttack}</div>
                            <div id="specialAttack" class="progressBar">
                                <div id="specialAttackProgress" class="progress"></div>
                            </div>
                        </div>
                        <div>
                            <div>Special Defense</div>
                            <div>${specialDefense}</div>
                            <div id="specialDefense" class="progressBar">
                                <div id="specialDefenseProgress" class="progress"></div>
                            </div>
                        </div>
                        <div>
                            <div>Speed</div>
                            <div>${speed}</div>
                            <div id="speed" class="progressBar">
                                <div id="speedProgress" class="progress"></div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>

            <div id="movesContentContainer">
                <div class="info" onclick="showMoves()">
                    <div id="movesTitle" style="color: white;">Moves</div>
                    <div>
                        <img src="./img/icons/increase.png">
                    </div>
                </div>

                <div class="movesContent dNone" id="movesContent">
                    <div class="movesData" id="moves">

                    </div>  
                </div>
            </div>
        </div> 
    </div>
`;
// <img src="./img/icons/favorite empty.png">
}

function renderAbilities(abilities) {
    let abilitiesContainer = document.getElementById('abilities');

    for (let i = 0; i < abilities.length; i++) {
        
        let ability = abilities[i]['ability']['name'];

        abilitiesContainer.innerHTML += /*html*/ `
            <div>${ability}</div>
        `;
    }
}

function calculateProgressBar(hp, attack, defense, specialAttack, specialDefense, speed) {
    hpProgressBar(hp);
    attackProgressBar(attack);
    defenseProgressBar(defense);
    specialAttackProgressBar(specialAttack);
    specialDefenseProgressBar(specialDefense);
    speedProgressBar(speed);
}

function hpProgressBar(hp) {
    let hpProgress = document.getElementById('hpProgress');
    let hpProgressWith = hp / hpMax * 100;
    hpProgress.style.width = hpProgressWith + '%';
    hpProgress.style.backgroundColor = 'rgb(27, 117, 27)';
}

function attackProgressBar(attack) {
    let attackProgress = document.getElementById('attackProgress');
    let attackProgressWith = attack / attackMax * 100;
    attackProgress.style.width = attackProgressWith + '%';
    attackProgress.style.backgroundColor = 'rgb(209, 46, 46)';
}

function defenseProgressBar(defense) {
    let defenseProgress = document.getElementById('defenseProgress');
    let defenseProgressWith = defense / defenseMax * 100;
    defenseProgress.style.width = defenseProgressWith + '%';
    defenseProgress.style.backgroundColor = 'rgb(255, 165, 0)';
}

function specialAttackProgressBar(specialAttack) {
    let specialAttackProgress = document.getElementById('specialAttackProgress');
    let specialAttackProgressWith = specialAttack / specialAttackMax * 100;
    specialAttackProgress.style.width = specialAttackProgressWith + '%';
    specialAttackProgress.style.backgroundColor = 'rgb(209, 46, 46)';
}

function specialDefenseProgressBar(specialDefense) {
    let specialDefenseProgress = document.getElementById('specialDefenseProgress');
    let specialDefenseProgressWith = specialDefense / specialDefenseMax * 100;
    specialDefenseProgress.style.width = specialDefenseProgressWith + '%';
    specialDefenseProgress.style.backgroundColor = 'rgb(255, 165, 0)';
}

function speedProgressBar(speed) {
    let speedProgress = document.getElementById('speedProgress');
    let speedProgressWith = speed / speedMax * 100;
    speedProgress.style.width = speedProgressWith + '%';
    speedProgress.style.backgroundColor = 'rgb(105, 196, 248)';
}

function renderMoves(moves) {
    let movesContainer = document.getElementById('moves');
    if(moves.length < 15) {
        for (let i = 0; i < moves.length; i++) {
            let move = moves[i]['move']['name'];
            movesContainer.innerHTML += /*html*/ `
                <div>
                    <div>${i+1}.</div>
                    <div>${move}</div>
                </div>
            `;
        }
    } else {
        for (let i = 0; i < 15; i++) {
            let move = moves[i]['move']['name'];
            movesContainer.innerHTML += /*html*/ `
                <div>
                    <div>${i+1}.</div>
                    <div>${move}</div>
                </div>
            `;
        }
    }
}

/* =========================================================== RENDER INFO ================================================== */
function showInfo() {
    document.getElementById('statsContent').classList.add('dNone');
    document.getElementById('statsContentContainer').classList.remove('contentContainerBackground');
    document.getElementById('movesContent').classList.add('dNone');
    document.getElementById('movesContentContainer').classList.remove('contentContainerBackground');
    document.getElementById('infoContent').classList.remove('dNone');
    document.getElementById('infoContentContainer').classList.add('contentContainerBackground');
    document.getElementById('infoTitle').style.color = 'black';
    document.getElementById('statsTitle').style.color = 'white';
    document.getElementById('movesTitle').style.color = 'white';
}

/* =========================================================== RENDER STATS ================================================== */
function showStats() {
    document.getElementById('infoContent').classList.add('dNone');
    document.getElementById('infoContentContainer').classList.remove('contentContainerBackground');
    document.getElementById('movesContent').classList.add('dNone');
    document.getElementById('movesContentContainer').classList.remove('contentContainerBackground');
    document.getElementById('statsContent').classList.remove('dNone');
    document.getElementById('statsContentContainer').classList.add('contentContainerBackground');
    document.getElementById('infoTitle').style.color = 'white';
    document.getElementById('statsTitle').style.color = 'black';
    document.getElementById('movesTitle').style.color = 'white';
}

/* =========================================================== RENDER moves ================================================== */
function showMoves() {
    document.getElementById('infoContent').classList.add('dNone');
    document.getElementById('infoContentContainer').classList.remove('contentContainerBackground');
    document.getElementById('statsContent').classList.add('dNone');
    document.getElementById('statsContentContainer').classList.remove('contentContainerBackground');
    document.getElementById('movesContent').classList.remove('dNone');
    document.getElementById('movesContentContainer').classList.add('contentContainerBackground');
    document.getElementById('infoTitle').style.color = 'white';
    document.getElementById('statsTitle').style.color = 'white';
    document.getElementById('movesTitle').style.color = 'black';
}

/* =========================================================== LOAD MORE POKEMON ================================================== */

async function loadNextPokemon() {
    document.getElementById('loadIcon').style.display = "none";
    document.getElementById('loader-wrapper-next-pokemon').style.display = "block";
    if(!loading) {
        loading = true;
        await init();
        document.scrollingElement.scroll(0, 1)
        loading = false;
        document.getElementById('loadIcon').style.display = "block";
        document.getElementById('loader-wrapper-next-pokemon').style.display = "none";
    }
}

/* =========================================================== CLOSE POKEMON CARD ================================================== */
function closePokemonCard() {
    document.getElementById('bigPokemonCardContainer').classList.remove('display');
}

function doNotClose(event) {
    event.stopPropagation();
}
