// Level 1
const Url = "https://rickandmortyapi.com/api/character/";

fetch(Url)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    replace(json.results);
  })
  .catch(function(error) {
    console.dir(error);
  });

function replace(info) {
  let html = ``;
  const selectDiv = document.querySelector(".results");

  info.forEach(function(obj) {
    if (!obj.type) {
      obj.type = "Unknown";
    }
    html += `<div class="col-sm-6 col-md-4 col-lg-3">
          <div class="card">
            <img
              class="image"
              src=${obj.image}
              alt=${obj.name}
            />
            <div class="details">
              <h4 class="name">${obj.name}</h4>
              <p>Type: ${obj.type}</p>
              <p>Episode count: ${obj.episode.length}</p>
              <a class="btn btn-primary" href="details.html?id=${obj.id}">Details</a>
            </div>
          </div>
        </div>`;
  });
  selectDiv.innerHTML = html;
}
