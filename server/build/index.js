"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const poetasRoutes_1 = __importDefault(require("./routes/poetasRoutes"));
const poemasRoutes_1 = __importDefault(require("./routes/poemasRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); //Fija puerto para el servidor
        this.app.use(morgan_1.default('dev')); //muestra por consola las peticiones que realiza el cliente
        this.app.use(cors_1.default()); //Se utiliza cors para que nuestro servidor pueda recibir las peticiones del servidor angular
        this.app.use(express_1.default.json()); // Nos permite poder aceptar formatos json de aplicaciones cliente
        this.app.use(express_1.default.urlencoded({ extended: false })); //En case de enviar datos desde un formulario HTML
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/poetas', poetasRoutes_1.default);
        this.app.use('/api/poemas', poemasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
