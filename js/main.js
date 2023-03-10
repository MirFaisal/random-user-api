function loadApi() {
  fetch("https://randomuser.me/api/?results=500")
    .then((response) => response.json())
    .then((peoples) => loadPeoplrs(peoples));
}

function loadPeoplrs(data) {
  console.log(data.results);
  const peoples = data.results;

  const peopleContainerElement = document.getElementById("user-wrapper");
  for (const people of peoples) {
    peopleContainerElement.innerHTML = `
      <div class="card" style="width: 18rem; margin: 100px auto">
            <img src="${people.picture.large}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">name: ${people.name.title} ${people.name.first} ${people.name.last}</h5>
              <h6 class="email">Email:${people.email}</h6>
              <h6 class="phone">Phone: ${people.phone}</h6>
              <h6 class="gender text-capitalize">Gender: ${people.gender}</h6>       
              <a onclick="swapPeople()" role="button" class="btn btn-primary mt-2 w-100">Swap</a>
            </div>
          </div>
      `;
  }
}
function swapPeople() {
  loadApi();
}
loadApi();
