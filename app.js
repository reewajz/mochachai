import express from 'express';
import bodyParser from 'body-parser';
import router from './router/index';

const app = express();

const port = process.env.port || 5008;


// Configure app to user bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Register our routes in app
app.use('/', router);
// Start our server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
// Export our app for testing purposes
export default app;