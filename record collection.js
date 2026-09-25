var collection = {
  "2548": {
    "album": "slippery when wet",
    "artist": "bon jovi",
    "tracks": [
      "let it rock",
      "you give love a bad name"
    ]
   },
  
  "2468": {
    "album": "1999",
    "artist": "prince",
    "tracks": [
      "1999",
      "little red corvette"
    ]
   },
  "1245": {
    "artist": "robert palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }

};

var collectionCopy = JSON.parse(JSON.stringfy(collection));

function updateRecords(id, prop, value){
  if(value === ""){
    delete collection[id][prop];
  }
  else if (prop === "tracks"){
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
    
  }



  return collection;
}










