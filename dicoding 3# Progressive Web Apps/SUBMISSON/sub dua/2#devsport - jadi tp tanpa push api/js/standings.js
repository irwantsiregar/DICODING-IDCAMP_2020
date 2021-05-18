
// GET STANDINGS
function getStanding(data) { 
let competitionHTML = '';

 data.standings.forEach(function(results) {
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
    document.getElementById("standings").innerHTML= competitionHTML;
  });
}
