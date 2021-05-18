const BASE_URL = "https://api.football-data.org/v2/";
const AUTH_TOKEN = "a95be930c18942a69f0b30a767bcd0a6";

const COMPETITIONS = "competitions/2014/";
const STANDINGS = `${BASE_URL}${COMPETITIONS}standings?standingType=TOTAL`;
const MATCHES = `${BASE_URL}${COMPETITIONS}matches?status=FINISHED&matchday=17`;
const SCORERS = `${BASE_URL}${COMPETITIONS}scorers`;
const TEAMS = `${BASE_URL}teams/`;

//REQUEST API FOOTBALL
const fetchAPI = urlApi => {
  return fetch(urlApi, {
    headers: {"X-Auth-Token": AUTH_TOKEN}
  })
  .then( response => {
      if (response.status !== 200 ) {
        console.log("There is an Error -> " + response.status);
        return Promise.reject(new Error(response.statusText));
      } else {
        return Promise.resolve(response);
      }
  })
  .then( response => response.json() )
  .catch( error => console.log("There is an Error -> " + error))

};


// DATA SCORERS
function scorersData() {
  return new Promise( function(resolve, reject) {
   if ("caches" in window) {
      caches.match(SCORERS).then( function (response) {
        if (response) {
          response.json().then( function(data) {
            getScorers(data);
            resolve(data);
          });
        }
      });
    }

  fetchAPI(SCORERS)
    .then( data => {
        getScorers(data);
        resolve(data);
      })
  });
}


// DATA FROM STANDINGS
function standingsData() {
  return new Promise( function(resolve, reject) {
   if ("caches" in window) {
      caches.match(STANDINGS).then( function (response) {
        if (response) {
          response.json().then( function(data) {
            getStanding(data);
            resolve(data);
          });
        }
      });
    }

  fetchAPI(STANDINGS)
    .then( data => {
        getStanding(data);
        resolve(data);
      })
  });
}

// DATA FROM MATCHES
function matchesData() {
  return new Promise(function (resolve, reject) {
   if ("caches" in window) {
      caches.match(MATCHES).then( function (response) {
        if (response) {
          response.json().then( function (data) {
            getMatches(data);
            resolve(data);
          });
        }
      });
    }

  fetchAPI(MATCHES)
    .then( data => {
        getMatches(data);
        resolve(data);
    })
  });
}


// GET Detail Team
function teamById() {
  return new Promise(function(resolve, reject) {
   const urlParams = new URLSearchParams(window.location.search);
   const IDParam = urlParams.get("id");

  if ("caches" in window) {
    caches.match(TEAMS + IDParam).then(function(response) {
      if (response) {
        response.json().then( function (data) {
          getTeamById(data);
          resolve(data);
        });
      }
    });
  }

  fetchAPI(TEAMS + IDParam)
    .then( data => {
      getTeamById(data);
      resolve(data);
     })
  });
}


// Preloader
const preLoader = () => {
     const Loader = `
        <tr>
          <th rowspan="9" colspan="9">
            <div class="preloader-wrapper big active" id="preloader" style="">
              <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
           </th>
          </tr>
        `;
    return Loader;
}

