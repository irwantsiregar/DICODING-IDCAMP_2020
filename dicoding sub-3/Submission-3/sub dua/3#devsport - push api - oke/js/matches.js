
// MATCHES
function getMatches(data) {
  let matchesHTML = '';
  let number = 1;
  // console.log(data.matches);
  // return;
  data.matches.forEach( match => {
    matchesHTML +=`<tr>
        <td class="blue-text accent-2-text">${number++}</td>
        <td>${match.matchday}</td>
        <td>${match.homeTeam.name}</td>
        <td><span class="badge pink lighten-5">${match.score.fullTime.homeTeam}</span></td>
        <td>${match.utcDate.substr(11,5)}</td>
        <td><span class="badge pink lighten-5">${match.score.fullTime.awayTeam}</span></td>
        <td>${match.awayTeam.name}</td>
        <td>${match.status.toLowerCase()}</td>
        <td>${match.season.endDate}</td>
      </tr>
    `;
  });
  document.getElementById("matches").innerHTML = matchesHTML;

}
