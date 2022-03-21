var unirest = require ("unirest")    //fonction qui filtre les noms qui commencent par m
function nom(place,lettre){
    return place.filter(place=>place.name[0] === lettre)
}
var req = unirest("GET", "http://localhost:3000/place?_limit=10")
req.headers({
    "cache-control":"no-cache",
})

req.end(function (res) {
    if (res.error) throw new error(res.error)
    console.log(res.body)
    console.log("endroit dont le nom commence par la lettre M")
    console.log(nom(res.body,"M"))
})



