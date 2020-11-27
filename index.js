const express = require('express');
const app = express();
const port = 8000;

app.get("/", (req, res)=>{
  const headers = req.headers
  res.send("WELCOME FELLOW " + headers["user-agent"] + " USER, THIS PAGE IS EMPTY FOR NOW, TRY LOOKING AT THE /greetings ENDPOINT!")
})

app.get("/greetings", (req, res) => {
  const query = req.query
  const lang = req.get("accept-language").substr(0, 2)
  if(lang==="it"){
    const message = "Ciao " + query.name + " " + query.surname  + "ed hai " + query.age + "anni"
    res.send(message)
  }else{
    const message = "Hello" + query.name + " " + query.surname  + " and you are " + query.age + "years old"
    res.send(message)
  }
})

app.listen(8000, console.log("working as intended"))

/*
const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
layoutsDir: __dirname + '/views/layouts', extname: 'hbs', defaultLayout: 'planB', partialsDir: __dirname + '/views/partials/'
}));
app.use(express.static('public'))

fakeApi = () => {
    return [
      {
        name: 'Katarina',
        lane: 'midlaner'
      },
      {
        name: 'Jayce',
        lane: 'toplaner'
      },
      {
        name: 'Heimerdinger',
        lane: 'toplaner'
      },
      {
        name: 'Zed',
        lane: 'midlaner'
      },
      {
        name: 'Azir',
        lane: 'midlaner'
      }
    ];
}

app.get('/', (req, res) => {
    res.render('main', {layout: 'index', suggestedChamps: fakeApi(), listExists: true});
});

app.listen(port, () => console.log(`App listening to port ${port}`));
*/

