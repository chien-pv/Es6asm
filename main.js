import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./style.css";

function buildCard(photo) {
  return `<div class="card col-3">
  <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${photo.title}</p>
    <div class="btn-group">
    <a href="#" class="btn btn-sm btn-outline-secondary">View</a>
    <a href="#" class="btn btn-sm btn-outline-secondary">Edit</a>
    </div>
  </div>
</div>`;
}

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => {
    let datas = "";
    json.forEach((photo) => {
      datas += buildCard(photo);
    });

    document.getElementById("list-photo").innerHTML = datas;
  });
