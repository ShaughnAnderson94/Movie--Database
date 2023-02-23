let movieData = { 
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };


document.querySelector("#searchButton").onclick = function getInput() {
  document.querySelectorAll(".SearchResults").forEach(a=>a.style.display = "block");
  document.querySelectorAll(".AddFilm ").forEach(a=>a.style.display = "none");
    const searchBox= document.querySelector("#movie-search");
    const searchString = String(searchBox.value);
    const selectedFilm =searchString;
   
  



  function displayDisplayFilm(filmSelection) {
    let titleDisplay = document.querySelector("h1");
    titleDisplay.innerHTML = filmSelection;
function displayFilm(displayLocation,displayData) {
let display= document.querySelector(displayLocation);
   display.innerHTML = displayData;
 
}

displayFilm("#displayPlot",movieData[filmSelection].plot);
displayFilm("#displayCast",movieData[filmSelection].cast);
displayFilm("#displayRuntime",movieData[filmSelection].runtime);
displayFilm("#displayRating",movieData[filmSelection].rating);
displayFilm("#displayYear",movieData[filmSelection].year);
  }
displayDisplayFilm(selectedFilm);

}
document.querySelector("#openAdd").onclick = function openAdd() {
  document.querySelectorAll(".AddFilm ").forEach(a=>a.style.display = "block");
  document.querySelectorAll(".SearchResults").forEach(a=>a.style.display = "none");
}


document.querySelector("#submitButton").onclick = function getNew() {
  const SubmitTitleBox= document.querySelector("#SFilmTitle");
    const submitTitleString = String(SubmitTitleBox.value);
    const SubmitPlotBox= document.querySelector("#SFilmPlot");
    const submitPlotString = String(SubmitPlotBox.value);
    const SubmitCastBox= document.querySelector("#SFilmCast");
    const submitCastString = String(SubmitCastBox.value);
    const SubmitTimeBox= document.querySelector("#SFilmRuntime");
    const SubmitRatingBox= document.querySelector("#SFilmRating");
    const SubmitYearBox= document.querySelector("#SFilmRelease");
    
movieData[submitTitleString] = {
  rating:SubmitRatingBox.value ,
  runtime:SubmitTimeBox.value ,
  year:SubmitYearBox.value ,
  plot: submitPlotString ,
  cast:submitCastString };
  document.querySelectorAll(".AddFilm ").forEach(a=>a.style.display = "none");
}

/*const movieArray = Object.entries(movieData)
movieArray.forEach(movie => {
const idPrefix = "#display";
const idsuffix = 1
console.log(movie)

}) */

