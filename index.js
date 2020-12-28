const express= require('express');
const path = require('path');
const http = require('http');
const morgan = require('morgan');
const methodOverride = require('method-override')
const bodyParser = require('body-parser');

require('dotenv').config();


const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

const router = express.Router();
router.use(bodyParser.json());

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.get('/', async (req, res) => {
  res.render('index');
});

app.get('/home', async (req, res) => {
  res.render('index');
});

app.get('/events', async (req, res) => {
  res.render('event-section');
});

app.get('/gallery', async (req, res) => {
  res.render('gallery');
});

app.get('/phoenix', async (req, res) => {
  res.render('phoenix');
});

app.get('/team', async (req, res) => {
  res.render('teams');
});

app.get('/campus-ambassador', async (req, res) => {
  res.render('campus-ambassador');
});

app.use('/', router);
app.listen(process.env.port || 3000);
console.log(`Server Running at PORT ${process.env.port}`);

