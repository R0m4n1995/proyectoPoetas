import {Router} from 'express';
import {poemasController} from '../controllers/poemasController';

class PoemasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void { //Definir rutas 
        this.router.get('/', poemasController.list);
        this.router.get('/:id', poemasController.getOne);
        this.router.post('/', poemasController.create);
        this.router.delete('/:id', poemasController.delete);
        this.router.put('/:id', poemasController.update);
    }
}

const poemasRoutes = new PoemasRoutes();
export default poemasRoutes.router;