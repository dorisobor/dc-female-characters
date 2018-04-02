const randomizeButton = document
    .getElementById("randomizeButton");

// a variable for the unique api key
const my_api = "edd5e498e427ba68da36f8b1693b15fbedde69fa";

let globalSuperheroData = "";


fetchSuperheroes();

// function to fetch the json info
function fetchSuperheroes() {

    fetch(`https://api-comic-vine.herokuapp.com/characters/?api_key=${my_api}&filter=gender:female&publishers%5B0%5D=4010-10&limit=20&format=json`)
        .then((response) => response.json())
        .then((superheroData) => {
            displayRandomSuperhero(superheroData)
            //globalSuperheroData = superheroData;
        })
        .catch((error) => {
            console.log(error);
        })
}

// function to fetch the json info
function displayRandomSuperhero(superheroData) {
    const results = superheroData.results;
    const content = document.getElementById("content");


    //creates a function to the button so you can randomize 
    randomizeButton.addEventListener("click", function(superheroData) {

        //for loop to randomize an object 

        var out = "";
        var i;
        for (i = 0; i < Math.floor(Math.random() * results.length); i++) {

        }


        //  print out the character
        const superheroInfo = ` 
    <h1> ${results[i].name}</h1>
    <div class ="boxShadow"></div>
    <img class ="profileImage" src="${results[i].image.small_url}"> 
  
    <div class = "characterInfo">

    <p> <b>Real name:</b> ${results[i].real_name} </p>
    <p> <b>Race:</b> ${results[i].origin.name} </p>
    <p> <b>Appears in:</b> ${results[i].count_of_issue_appearances} issues </p>
    <p> <b>First Apperance:</b> <i>#${results[i].first_appeared_in_issue.issue_number}</i>
     ${results[i].first_appeared_in_issue.name}
     </p>
    <div class="desc">
    <p> <b>About: </b> ${results[i].deck} </p><div>
    </div>
    `;
        content.innerHTML = superheroInfo;


    });

}