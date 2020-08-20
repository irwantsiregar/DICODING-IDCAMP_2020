const AUTH_TOKEN = "a95be930c18942a69f0b30a767bcd0a6";
const BASE_URL = "https://api.football-data.org/v2/";

const ID_LIGA = "2014"
const COMPETITION =  `${BASE_URL}competitions/${ID_LIGA}/standings`;
const TEAMS =  `${BASE_URL}teams/`;

function status(response) {
  if (response.status !== 200) {
    console.log("There is an Error -> " + response.status);
    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
}

function json(response) {
  return response.json();
}

function error(error) {
  console.log("There is an Error -> " + error);
}

// STANDINGS
function getStandings() {
  if ("caches" in window) {
    caches.match(COMPETITION).then(function(response) {
      if (response) {
        response.json().then(function(data) {
          let competitionHTML = '';
          const results = data.standings[0];

           results.table.forEach(function(result) {
            competitionHTML += `
                  <tr>
                    <td>${result.position}</td>
                    <td>
                        <a href="./team.html?id=${result.team.id}">
                        <img src="${result.team.crestUrl}" alt="${result.team.name}" width="40px"/>
                        </a>
                    </td>
                    </td>
                    <td><a href="./team.html?id=${result.team.id}">
                    ${result.team.name}</a></td>
                    <td>${result.playedGames}</td>
                    <td>${result.won}</td>
                    <td>${result.draw}</td>
                    <td>${result.lost}</td>
                    <td>${result.points}</td>
                    <td>${result.goalsFor}</td>
                    <td>${result.goalsAgainst}</td>
                    <td>${result.goalDifference}</td>
                  </tr>
               `;
            });
          document.getElementById("standings").innerHTML = competitionHTML;
        });
      }
    });
  }

  fetch(COMPETITION, {
       headers: {"X-Auth-Token": AUTH_TOKEN}
    })
    .then(status)
    .then(json)
    .then(function(data) {
      let competitionHTML = '';
      const results = data.standings[0];

      results.table.forEach(function(result) {
            competitionHTML += `
                  <tr>
                    <td>${result.position}</td>
                    <td>
                        <a href="./team.html?id=${result.team.id}">
                        <img src="${result.team.crestUrl}" alt="${result.team.name}" width="40px"/>
                        </a>
                    <td><a href="./team.html?id=${result.team.id}">
                    ${result.team.name}</a></td>
                    <td>${result.playedGames}</td>
                    <td>${result.won}</td>
                    <td>${result.draw}</td>
                    <td>${result.lost}</td>
                    <td>${result.points}</td>
                    <td>${result.goalsFor}</td>
                    <td>${result.goalsAgainst}</td>
                    <td>${result.goalDifference}</td>
                  </tr>
            `;
      });
      document.getElementById("standings").innerHTML = competitionHTML;
    })
    .catch(error);
}


// MATCHES
function getMatches() {
  // getStandings();
  if ("caches" in window) {
    caches.match(`${TEAMS}86/matches?status=SCHEDULED`).then(function(response) {
      if (response) {
        response.json().then(function(data) {
          let matchesHTML = '';
          data.matches.forEach(function(match) {
            // console.log(match);
            // return;
          });
          document.getElementById("matches").innerHTML = matchesHTML;
        });
      }
    });
  }

  fetch(`${TEAMS}86/matches?status=SCHEDULED`, {
       headers: {"X-Auth-Token": AUTH_TOKEN}
    })
    .then(status)
    .then(json)
    .then(function(data) {
      let matchesHTML = '';
      let number = 1;
      data.matches.forEach(function(match) {
            // matchesHTML += `
            //       <tr>
            //         <td>${number++}</td>
            //         <td>${match.competition.name}</td>
            //         <td>${match.competition.area.name}</td>

            //         <td>${match.homeTeam.name}</td>
            //         <td>${match.score.fullTime.homeTeam}</td>
            //         <td>${match.awayTeam.name}</td>
            //         <td>${match.score.fullTime.awayTeam}</td>
            //       </tr>
            // `;
           console.log(match);
           return;
      });
      document.getElementById("matches").innerHTML = matchesHTML;
    })
    .catch(error);
}

// GET Detail Team
function getTeamById() {
  return new Promise(function(resolve, reject) {
   const urlParams = new URLSearchParams(window.location.search);
   const idParam = urlParams.get("id");

  if ("caches" in window) {
    caches.match(BASE_URL + "teams/" + idParam).then(function(response) {
      if (response) {
        response.json().then(function(data) {
          let teamHTML = `             
           <div class="col s12 m7 l4 card-team">
              <div class="card horizontal responsive">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${data.crestUrl}" width="40px">
                </div>
                <div class="card-content">
                  <ul class="collection with-header">
                    <li class="collection-header"><h5>First Names<span class="card-title activator grey-text text-darken-4">${data.name} | ${data.tla}<i class="material-icons right">more_vert</i></span></h5></li>
                    <li class="collection-item"><div>Founded : ${data.founded}</div></li>
                    <li class="collection-item"><div>Phone   : ${data.phone}</div></li>
                    <li class="collection-item"><div>Website : ${data.website}</div></li>
                    <li class="collection-item"><div>Email   : ${data.email}</div></li>
                    <li class="collection-item"><div>Email   : ${data.address}}</div></li>
                    <li class="collection-item"><div>Venue   : ${data.venue}</div></li>
                    <li class="collection-item"><div>Club Colors : ${data.clubColors}</div></li>
                  </ul>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">${data.name}<i class="material-icons right">close</i></span>
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
                    data.squad.forEach(function(result) {
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
          teamHTML += individu + tbody;
          document.getElementById("body-content").innerHTML = teamHTML;
          resolve(data);
        });
      }
    });
  }

  fetch(BASE_URL + "teams/" + idParam, {
     headers: {"X-Auth-Token": AUTH_TOKEN}
  })
    .then(status)
    .then(json)
    .then(function(data) {
      // console.log(data);
      // const squad = data.squad;
      // (objSquad = ...squad);
      // console.log(objSquad.address);
      let teamHTML = `   
           <div class="col s12 m7 l4 card-team">
              <div class="card horizontal responsive">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${data.crestUrl}" width="40px">
                </div>
                <div class="card-content">
                  <ul class="collection with-header">
                    <li class="collection-header"><h5><span class="card-title activator grey-text text-darken-4">${data.name} | ${data.tla}<i class="material-icons right">more_vert</i></span></h5></li>
                    <li class="collection-item"><div>Founded : ${data.founded}</div></li>
                    <li class="collection-item"><div>Phone   : ${data.phone}</div></li>
                    <li class="collection-item"><div>Website : ${data.website}</div></li>
                    <li class="collection-item"><div>Email   : ${data.email}</div></li>
                    <li class="collection-item"><div>Email   : ${data.address}}</div></li>
                    <li class="collection-item"><div>Venue   : ${data.venue}</div></li>
                    <li class="collection-item"><div>Club Colors : ${data.clubColors}</div></li>
                  </ul>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">${data.name}<i class="material-icons right">close</i></span>
                  <table class="grey lighten-5 striped responsive-table z-depth-1">
                    <thead class="grey darken-3">
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
                    data.squad.forEach(function(result) {
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
          // const squad = data.squad;
          // console.log(...squad);
          teamHTML += individu + tbody;
      document.getElementById("body-content").innerHTML = teamHTML;
      resolve(data);
     });
  
  });
}
