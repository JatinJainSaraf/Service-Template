import { Router } from 'express';

import controller from './controllers';
import makeHttpCallback from './http-server/http-server';
const {greetAction, userActions} = controller
class RestRoutes {
    private router: Router;
  constructor(router: Router) {
    this.router = router;
  }

  start(): void {
    this.router.get('/', makeHttpCallback({ controller: greetAction }));
    this.initUsersRoutes();
  }

  initUsersRoutes(): void {
    this.router.post('/users', makeHttpCallback({ controller: userActions.createUserAction }));
  }
}

export default RestRoutes;
