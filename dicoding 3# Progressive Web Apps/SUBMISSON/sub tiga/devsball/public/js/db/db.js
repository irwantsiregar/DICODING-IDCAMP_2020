const Database = "standings";
const Table = "teams";

// Membuka database standings dan membuatkannya jika belum ada.
const dbPromised = idb.open(Database, 1, function(upgradeDb) {
  const teamsObjectStore = upgradeDb.createObjectStore(Table, {
    keyPath: "id"
  });
  teamsObjectStore.createIndex("name", "name", { unique: false });
});


// fungsi utk menyimpan team favorite
function saveFavorite(team) {
  dbPromised
    .then(function(db) {
      const tx = db.transaction(Table, "readwrite");
      const store = tx.objectStore(Table);
      console.log(team);
      store.put(team);
      return tx.complete;
    })
    .then(function() {
      console.log("Success Saved Team to Favorites.");
      M.toast({html: 'Success Added Team to Favorite'});
    });
}


//  Mengambil seluruh data yang tersimpan di Indexed DB
function getAll() {
  return new Promise(function(resolve, reject) {
    dbPromised
      .then(function(db) {
        const tx = db.transaction(Table, "readonly");
        const store = tx.objectStore(Table);
        return store.getAll();
      })
      .then(function(teams) {
        resolve(teams);
      })
  });
}


// fungsi utk Hapus team ById dr hal favorite
function deleteFavorite(team) {
  dbPromised
    .then(function(db) {
      const tx = db.transaction(Table, "readwrite");
      const store = tx.objectStore(Table);
      console.log(team);
      store.delete(team);
      return tx.complete;
    })
    .then(function() {
      console.log("Success Deleted Team from Favorite List.");
      M.toast({html: 'Success Deleted Team of Favorite'});
    });
    setTimeout(() => { location.reload() }, 800);
}
