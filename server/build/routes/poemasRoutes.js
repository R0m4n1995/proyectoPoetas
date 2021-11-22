"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const poemasController_1 = require("../controllers/poemasController");
class PoemasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', poemasController_1.poemasController.list);
        this.router.get('/:id', poemasController_1.poemasController.getOne);
        this.router.post('/', poemasController_1.poemasController.create);
        this.router.delete('/:id', poemasController_1.poemasController.delete);
        this.router.put('/:id', poemasController_1.poemasController.update);
    }
}
const poemasRoutes = new PoemasRoutes();
exports.default = poemasRoutes.router;
