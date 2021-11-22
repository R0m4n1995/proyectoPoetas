"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const poetasController_1 = require("../controllers/poetasController");
class PoetasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', poetasController_1.poetasController.list);
        this.router.get('/:id', poetasController_1.poetasController.getOne);
        this.router.post('/', poetasController_1.poetasController.create);
        this.router.delete('/:id', poetasController_1.poetasController.delete);
        this.router.put('/:id', poetasController_1.poetasController.update);
    }
}
const poetasRoutes = new PoetasRoutes();
exports.default = poetasRoutes.router;
