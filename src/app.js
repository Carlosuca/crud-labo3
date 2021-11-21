const path = require('path')
const express = require('express');
const morgan = require('morgan');
const moongose = require('mongoose')

const app = express();

moongose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));
    

const indexRoutes = require('./routes/index');

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname + '\views'));
app.set('view engine', 'ejs');


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});