
// GET Detail Team
function getTeamById(data) {
  let teamHTML = `             
   <div class="col s12 m6 l4 card-team">
        <div class="card grey lighten-5">
          <div class="container" style="padding-top: 10px;">
            <div><span class="card-title activator grey-text text-darken-4">${data.name}<i class="material-icons right">visibility</i></span></div>
          </div>
          <div class="container container-card">
            <div class="card-image waves-effect waves-block waves-light center">
            <img class="activator" src="${data.crestUrl}" width="40px" alt="${data.name}">
            </div>
          </div>
          <div class="card-content">
            <table class="grey lighten-5 striped responsive-table z-depth-1">
              <thead></thead>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td class="hide-on-med-and-down">:</td>
                  <td>${data.name} | ${data.tla}</td>
                </tr>
                <tr>
                  <th>Founded</th>
                  <td class="hide-on-med-and-down">:</td>
                  <td>${data.founded}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td class="hide-on-med-and-down">:</td>
                  <td>${data.phone}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td class="hide-on-med-and-down">:</td>
                  <td>${data.email}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td class="hide-on-med-and-down">:</td>
                  <td>${data.website}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td class="hide-on-med-and-down">:</td>
                  <td>${data.address}</td>
                </tr>
                <tr>
                  <th>Venue</th>
                  <td class="hide-on-med-and-down">:</td>
                  <td>${data.venue}</td>
                </tr>
                <tr>
                  <th>ClubColors</th>
                  <td class="hide-on-med-and-down">:</td>
                  <td>${data.clubColors}</td>
                </tr>
               </tbody>
            </table>
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
                  <th>${number++}</th>
                  <td>${result.name}</td>
                  <td>${result.dateOfBirth.substring(0, 10)}</td>
                  <td>${result.countryOfBirth}</td>
                  <td>${result.nationality}</td>
                  <td>${result.position}</td>
                  <td>${result.role.toLowerCase()}</td>
                </tr>`
            });
            let tbody =
             `</tbody>
          </table>
        </div>
      </div>
    </div> 
    `;
    teamHTML += individu + tbody;
  document.getElementById("body-content").innerHTML = teamHTML;
}
