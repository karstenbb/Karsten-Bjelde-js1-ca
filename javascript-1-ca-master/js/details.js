const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.get("id") !== "") {
  id = params.get("id");
} else {
  document.location.href = "error.html";
}

const url = `https://rickandmortyapi.com/api/character/${id}`;
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    document.title = json.name;
    return json;
  })
  .then(function(json) {
    makeInfo(json);
  })
  .catch(function(error) {
    console.dir(error);
  });

function makeInfo(result) {
  const container = document.querySelector(".detail-container");
  let html = ``;
  html += `<img class="details-image" src="${result.image}" alt=${result.name} />
    <div class="detail-details">
        <h1>${result.name}</h1>
        <p>Status: <span class="value" id="status">${result.status}</span></p>
        <p>Species: <span class="value" id="species">${result.species}</span></p>
        <p>Origin: <span class="value" id="origin">${result.origin.name}</span></p>
        <p>Location: <span class="value" id="location">${result.location.name}</span></p>                   
    </div>`;
  container.innerHTML = html;
}
