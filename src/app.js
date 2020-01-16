const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const expressHandlebars = require('express-handlebars');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressMinifyHtml = require('express-minify-html');

const app = express();
const port = process.env.PORT || 3000;

app.disable('view cache');

/* express */
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
/* compression */
app.use(compression());
/* helmet */
app.use(helmet());
app.use(helmet.noCache());
/* express-handlebars */
const hbs = expressHandlebars.create({
    extname: 'hbs',
    defaultLayout: 'main-layout',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/components'),
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
/* morgan */
app.use(morgan('dev'));
/* body-parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/* cookie-parser */
app.use(cookieParser());
/* express-minify-html */
app.use(
    expressMinifyHtml({
        override: true,
        exception_url: false,
        htmlMinifier: {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            minifyJS: true,
        },
    })
);

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.listen(app.get('port'), 'localhost', () => {
    // eslint-disable-next-line no-console
    console.log(
        'The server is running at http://localhost:%d in %s mode.\nPress CTRL-C to stop.\n',
        app.get('port'),
        app.get('env')
    );
});

module.exports = app;
