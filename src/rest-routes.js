const controllers = require('./controllers')
const makeHttpCallback = require('./http-server/http-server');
const config = require('./config');

class RestRoutes {
    constructor(router){
        this.router = router
    }
    start() {
        this.router.get('/', makeHttpCallback({controller: controllers.greetAction}))
        this.initUsersRoutes();
    }

    initUsersRoutes() {
        this.router.post('/users', makeHttpCallback({controller: controllers.userActions.createUserAction}))
    }
}

module.exports = {RestRoutes};
