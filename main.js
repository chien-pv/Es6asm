import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./style.css";

let buildTr = ({ id, username, name, email }, index) => {
  return ` <tr>
  <th scope="row">${id}</th>
  <td>${name}</td>
  <td>${username}</td>
  <td>${email}</td>
  <td>
  <button type="button" class="btn btn-outline-success">Edit</button>
  <button id="${index}" type="button" class="btn btn-outline-danger btn-delete">Delete</button>
  </td>
</tr>`;
};

function buildHandleDelete() {
  let listbtndel = document.getElementsByClassName("btn-delete");
  for (let index = 0; index < listbtndel.length; index++) {
    listbtndel[index].onclick = function () {
      // console.log(this.id);
      fetch(
        `https://newdemoes6-default-rtdb.firebaseio.com/users/${this.id}.json`,
        {
          method: "DELETE",
        }
      );
      this.parentElement.parentElement.remove();
      alert("Deleted!!!");
    };
  }
}

fetch("https://newdemoes6-default-rtdb.firebaseio.com/users.json")
  .then((respone) => respone.json())
  .then((datas) => {
    console.log(datas);
    let datasTR = ``;
    datas.forEach((user, index) => {
      if (user) {
        datasTR += buildTr(user, index);
      }

      // console.log(value, index);
    });
    document.getElementById("tbody-user").innerHTML = datasTR;
    buildHandleDelete();
  });

// fetch("https://newdemoes6-default-rtdb.firebaseio.com/users/0.json", {
//   method: "DELETE",
// });

// fetch("https://newdemoes6-default-rtdb.firebaseio.com/users.json", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
//   body: '{"id" : "jack", "username" : "Ahoy!", "name" : "Ahoy!", "email" : "Ahoy!"}',
// });
