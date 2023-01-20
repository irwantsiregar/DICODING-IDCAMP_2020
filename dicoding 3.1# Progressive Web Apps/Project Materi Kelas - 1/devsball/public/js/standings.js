
// GET STANDINGS
function getStanding(data) {
  let preLoaderHTML = preLoader();
  
  document.getElementById("standings").innerHTML = preLoaderHTML;

  setTimeout(() => { 
    document.getElementById("standings").innerHTML = '';
    let standingsHTML = '';

     data.standings.forEach(function(results) {
      results.table.forEach(function(result) {
       result = JSON.parse( JSON.stringify(result).replace(/^http:\/\//i, "https://") );
       
        standingsHTML += `
            <tr>
              <td>${result.position}</td>
              <td>
                  <a href="./pages/detail/team.html?id=${result.team.id}">
                  <img src="${result.team.crestUrl}" alt="${result.team.name}" width="40px"/>
                  </a>
              <td><a href="./pages/detail/team.html?id=${result.team.id}">
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
        document.getElementById("standings").innerHTML= standingsHTML;
      });
   }, 800);
  
  let competitionHTML = `<h6>STANDINGS : ${data.competition.name.toUpperCase()} - ${data.competition.area.name.toUpperCase()} <span class="badge grey darken-4 hide-on-small-only"><i class="large material-icons white-text" style="font-size: 23px;">sports_soccer</i></span></h6>`;
  document.getElementById("title-standings").innerHTML = competitionHTML;
}
