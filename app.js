const express = require('express');
require('./config/passport');
const passport = require('passport');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const accountRouter = require('./routers/accountRouter');
const loginRouter = require('./routers/loginRouter');
const messageRouter = require('./routers/messageRouter');
const pool = require('./models/pool');

const port = process.env.PORT || 3000;
const store = new pgSession({
	pool,
});
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(
	session({
		secret: process.env.SESSION_SECRET || 'secret',
		resave: false,
		store,
		saveUninitialized: false,
	}),
);
app.use(passport.session());

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	next();
});

app.use('/login', loginRouter);
app.use('/account', accountRouter);
app.use('/', messageRouter);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(404).render('404', {
		title: 'Club | 404',
	});
});

app.listen(port, () => {
	console.log('listening on port:' + port);
});
