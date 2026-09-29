const express = require('express');
const accountRouter = require('./routers/accountRouter');
const loginRouter = require('./routers/loginRouter');
const messageRouter = require('./routers/messageRouter');

const port = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

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
