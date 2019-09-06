var express = require('express');

var app = express();
var path = require('path');

// Use Session 
const session = require('express-session');
app.use(session({
  secret: 'secretsecretkey',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function (req, res){
	if (!req.session.count)
		req.session.count = 0;
		console.log("declaring session count!")
	req.session.count ++;
	console.log(req.session.count)
    console.log(req.session.count);
    res.render('index', {counter:req.session.count});
});

app.get('/add/2', function (req, res){
	req.session.count += 1;
	res.redirect('/');
})

app.get('/reset', function (req,res){
	req.session.destroy();
	res.redirect('/');
})

app.listen(8000, function () {
	console.log("listening on port 8000");
})