
// IndexedDB
// Mengambil seluruh content di Indexed DB melalui fungsi getAll()
function getSavedFavorites() {
  getAll().then(function(teams) {
    
    console.log(teams);
    let teamsHTML = '';

    teams.forEach(function(team) {
      teamsHTML += `
          <li class="collection-item avatar">
            <a href="./team.html?id=${team.id}&favorites=true" class="">
             <img src="${team.crestUrl}" alt="" class="circle">
             <span class="title">${team.name} | ${team.tla}</span>
            </a>
            <p>Founded : ${team.founded}</p>
            <p>Email : ${team.email}</p>
            <a class="secondary-content btn white" onclick="deleteFavorite(${team.id})" id="delete-team"><i class="material-icons red-text">delete_forever</i></a>
          </li>
      `;
    });
    // Menyisipkan item team ke dalam #body-content
    document.getElementById("teams").innerHTML = teamsHTML;
  });
}


// Mengambil data dari database dan menampilkannya di halaman detail
function getSavedFavoritesById() {
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = urlParams.get("id");
  
  getOneById(idParam).then(function(team) {
    let teamHTML = '';             
    teamHTML += `             
           <div class="col s12 m7 l4 card-team">
              <div class="card horizontal responsive">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${team.crestUrl}" width="40px">
                </div>
                <div class="card-content">
                  <ul class="collection with-header">
                    <li class="collection-header"><h5>First Names<span class="card-title activator grey-text text-darken-4">${team.name} | ${team.tla}<i class="material-icons right">more_vert</i></span></h5></li>
                    <li class="collection-item"><div>Founded : ${team.founded}</div></li>
                    <li class="collection-item"><div>Phone   : ${team.phone}</div></li>
                    <li class="collection-item"><div>Website : ${team.website}</div></li>
                    <li class="collection-item"><div>Email   : ${team.email}</div></li>
                    <li class="collection-item"><div>Email   : ${team.address}}</div></li>
                    <li class="collection-item"><div>Venue   : ${team.venue}</div></li>
                    <li class="collection-item"><div>Club Colors : ${team.clubColors}</div></li>
                  </ul>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">${team.name}<i class="material-icons right">close</i></span>
                  <table class="grey lighten-5 striped responsive-table z-depth-1">
                    <thead class="deep-purple accent-1">
                      <th>#.</th>
                      <th>Name</th>
                      <th>DateOfBirth</th>
                      <th>CountryOfBirth</th>
                      <th>Nationality</th>
                      <th>Position</th>
                      <th>Role</th>
                    </thead>
                    <tbody>`;
                    let individu = ""; let number = 1;
                    team.squad.forEach(function(result) {
                       individu += ` <tr>
                          <td>${number++}</td>
                          <td>${result.name}</td>
                          <td>${result.dateOfBirth.substring(0, 10)}</td>
                          <td>${result.countryOfBirth}</td>
                          <td>${result.nationality}</td>
                          <td>${result.position}</td>
                          <td>${result.role}</td>
                        </tr>`
                    });
                    tbody =
                     `</tbody>
                  </table>
                </div>
              </div>
            </div>  
          `;
    // console.log(team);
    // return;
      teamHTML += individu + tbody;
     // Menyisipkan item team ke dalam #body-content
    document.getElementById("body-content").innerHTML = teamHTML;
  });
}


//  Mengambil data dari database menggantikan pemanggilan fetch dan cache
function getOneById(id) {
  return new Promise(function(resolve, reject) {
    dbPromised
      .then(function(db) {
        const tx = db.transaction("teams", "readonly");
        const store = tx.objectStore("teams");
        return store.get(id);
      })
      .then(function(team) {
        resolve(team);
      });
  });
}
