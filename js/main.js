//


// fetchJsonp('http://localhost:3000')
//   .then(res => res.json())
//   .then(json => console.log(json));

fetchSuperheroes();


function fetchSuperheroes(){

  fetch(`https://api-comic-vine.herokuapp.com/characters/?api_key=edd5e498e427ba68da36f8b1693b15fbedde69fa&filter=gender:female&publishers%5B0%5D=4010-10&format=json`)
    .then((response) => response.json())
    .then((superheroData) =>  {
      displaysuperhero(superheroData)
    })
    .catch((error) => {
      console.log(error);
    })
}

// a function that will display our character
function displaysuperhero(superheroData){
  const results = superheroData.results;
  const image = superheroData.image;

  // get the div id content which all our content will be in
  const content = document.getElementById('content');
   const superheroInfo = `
 
    <h1> -${results[3].name}-</h1>
    <div class="boxShadow"></div>
    <figure><img class ="profileImage" src="${results[3].image.small_url}"> </figure>
    
    <div class = "characterInfo">
    <p> <b>Real name:</b> ${results[3].real_name} </p>
    <p> <b>Race:</b> ${results[3].origin.name} </p>
    <p> <b>Appears in:</b> ${results[3].count_of_issue_appearances} issues </p>
    <p> <b>First Apperance:</b> <i>#${results[3].first_appeared_in_issue.issue_number}</i>
     ${results[3].first_appeared_in_issue.name}
     </p>

    </div>
    <div class="desc">
    <p> <b>About: </b> ${results[3].deck} </p><div>

   
  `;
  // all content will be in here
  content.innerHTML = superheroInfo;


}

// var dis = "superhero: " + results.aliases + "<br>";

// document.getElementById("content").innerHTML = dis;
