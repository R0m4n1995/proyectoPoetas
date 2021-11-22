import {json, request, Request, Response} from 'express';
import pool from '../database';

class PoetasController {

    public async list (req: Request, res: Response): Promise<void> {
        const poets = await pool.promise().query('SELECT * FROM poeta');
        res.json(poets[0]);
    } 

    public async getOne(req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const poet = await pool.promise().query('SELECT * FROM poeta WHERE idPoeta = ?', [id]);
        if (poet.length > 0) {
            var poetString = JSON.stringify(poet[0]);
            var result = JSON.parse(poetString.substring(1,(poetString.length-1)));
            return res.json(result);
        }
        res.status(404).json({message: "The poet does´t exist"});
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.promise().query('INSERT INTO poeta set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Poet saved!'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.promise().query('DELETE FROM poeta WHERE idPoeta = ?', [id]);
        res.json({message: 'Poet deleted successfully!'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.promise().query('UPDATE poeta set ? WHERE idPoeta = ?', [req.body, id]);
        res.json({message: 'Poet updated successfully!'});
    }
}

export const poetasController = new PoetasController();