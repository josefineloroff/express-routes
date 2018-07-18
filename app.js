var express = require ("express")
var app = express()





app.get("/", function(req, res) {
    res.render("home.ejs")
//    res.send("Hi there, welcome to my assignment!")
})

// app.get("/speak/:animal/:noise", function(req, res) {
//     var animal = req.params.animal
//     var noise = req.params.noise
//     res.send("The " + animal + " says " + noise)
// })

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing
    res.render("love.ejs", {thingVar : thing})
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


app.get("*", function(req, res) {
    res.send("Sorry, Page not found... What are you doing with your life?")
})



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server connected")
})

app.listen(3005)