import config from './config';
import express, { Express, Router } from 'express';
import bodyParser from 'body-parser';
import RestRoutes from './rest-routes';
import db from './data-access';

const app: Express = express();
const router: Router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const restRoutes: RestRoutes = new RestRoutes(router);
restRoutes.start();

const PORT: number = config.PORT || 3000;

app.use('/', router);

db.sequelizeInstance.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
  });
});
