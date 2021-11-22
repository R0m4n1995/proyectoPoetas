import {Router} from 'express';
import {poetasController} from '../controllers/poetasController';

class PoetasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void { //Definir rutas 
        this.router.get('/', poetasController.list);
        this.router.get('/:id', poetasController.getOne);
        this.router.post('/', poetasController.create);
        this.router.delete('/:id', poetasController.delete);
        this.router.put('/:id', poetasController.update);
    }
}

const poetasRoutes = new PoetasRoutes();
export default poetasRoutes.router;