import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import poetasRoutes from './routes/poetasRoutes';
import poemasRoutes from './routes/poemasRoutes';

class Server { //Configuración del servidor

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config():void { //Configuración server
        this.app.set('port', process.env.PORT || 3000); //Fija puerto para el servidor
        this.app.use(morgan('dev')); //muestra por consola las peticiones que realiza el cliente
        this.app.use(cors());//Se utiliza cors para que nuestro servidor pueda recibir las peticiones del servidor angular
        this.app.use(express.json()); // Nos permite poder aceptar formatos json de aplicaciones cliente
        this.app.use(express.urlencoded({extended: false})); //En case de enviar datos desde un formulario HTML
    }

    routes() :void { //Definir rutas desde archivos externos
        this.app.use('/', indexRoutes);
        this.app.use('/api/poetas', poetasRoutes);
        this.app.use('/api/poemas', poemasRoutes);
    }

    start(): void { //Inicia el servidor
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();