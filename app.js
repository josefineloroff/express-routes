var express = require ("express")
var app = express()
var bodyParser = require("body-parser")

// tell express to use body-parser
app.use(bodyParser.urlencoded({extended: true}))
// tell express to serve the content of the public directory 
app.use(express.static("public")) 
// expect all files to be ejs files
app.set("view engine", "ejs")



app.get("/", function(req, res) {
    res.render("home")
//    res.send("Hi there, welcome to my assignment!")
})

// app.get("/speak/:animal/:noise", function(req, res) {
//     var animal = req.params.animal
//     var noise = req.params.noise
//     res.send("The " + animal + " says " + noise)
// })

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing
    res.render("love", {thingVar : thing})
})

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase()
    var sounds = {
        pig: "OINK",
        cow: "MOO",
        cat: "I hate human",
        dog: "WOOF",
        goldfish: "......."

    }
    var sound = sounds[animal]
    res.send("The " + animal + " says '" + sound + "'")
})


 app.get("/repeat/:word/:times" , function(req, res) {
     var word = req.params.word
     var times = Number(req.params.times)
     var output = ""
     for (var i = 0; i < times; i++) {
          output += word + " "
     }
     res.send(output)
 })


 app.get("/posts", function(req, res) {
     var posts = [
         {title: "Post 1", author: "Susi"},
         {title: "Post 2", author: "Rudi"},
         {title: "Post 3", author: "Käthe"},

     ]
     res.render ("posts", {posts: posts})
 })


 app.post("/addfriend", function(req, res) {
    var newFriend = req.body.newfriend
    friends.push(newFriend)
    console.log(req.body)
    res.redirect("/friends")
})

 var friends = [
    "Rami", "Rowi", "Dani", "Jola", "Babsi"
]

 app.get("/friends", function(req, res) {  
     res.render("friends", {friends: friends})
 })













app.get("*", function(req, res) {
    res.send("Sorry, Page not found... What are you doing with your life?")
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server connected")
})

app.listen(3005)