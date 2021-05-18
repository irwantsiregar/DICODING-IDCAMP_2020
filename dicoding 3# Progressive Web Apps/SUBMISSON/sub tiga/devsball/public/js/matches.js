
// GET MATCHES
function getMatches(data) {
  let preLoaderHTML = preLoader();
  document.getElementById("matches").innerHTML = preLoaderHTML;

  setTimeout(() => {
    document.getElementById("matches").innerHTML = '';
    let matchesHTML = '';
    let number = 1;

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
  }, 800);

  let titleMatchHTML = `<h6>MATCHES : ${data.competition.name.toUpperCase()} - ${data.competition.area.name.toUpperCase()} <span class="badge grey darken-4"><i class="large material-icons white-text" style="font-size: 23px;">sports_soccer</i></span></h6>`;

  document.getElementById("title-matches").innerHTML = titleMatchHTML;

}
