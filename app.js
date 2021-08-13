const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');


const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home')
});


const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`Serving on port ${port}`)
})




