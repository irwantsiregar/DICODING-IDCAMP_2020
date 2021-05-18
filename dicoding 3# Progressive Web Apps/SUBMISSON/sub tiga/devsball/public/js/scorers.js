
// GET SCORERS
function getScorers(data) {
  let preLoaderHTML = preLoader();
  document.getElementById("scorers").innerHTML = preLoaderHTML;

  setTimeout(() => {
  	document.getElementById("scorers").innerHTML = '';
	let scorersHTML = '';

	  data.scorers.forEach(function(score) {
	    scorersHTML += `
	    	<li class="collection-item avatar">
		      <span class="title">Name : <strong>${score.player.name}</strong></span>
		      <p class="title">Country : ${score.player.nationality} <br>	         
		         Clubs : ${score.team.name} | ${score.player.position}
		      </p>
		      <span class="title">Score :</span> 
		      <p class="title badge light-green darken-2 white-text" style="display: inline;padding: 0 2px;">${score.numberOfGoals}</p>
		      <p class="secondary-content"><i class="material-icons orange-text">grade</i><i class="material-icons orange-text">grade</i></p>
		    </li>  
	      `;
	    });
	    document.getElementById("scorers").innerHTML = scorersHTML;
 	}, 800);

  	let tittleHTML = `<h6>${data.competition.name.toUpperCase()} - ${data.competition.plan} <span class="badge grey lighten-4"><i class="large material-icons green-text lighten-2-text" style="font-size: 23px;">account_circle</i></span></h6>`;
    document.getElementById("titlescore").innerHTML = tittleHTML;

}
