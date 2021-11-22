import {Request, Response} from 'express';
import pool from '../database';

class PoemasController {

    public async list (req: Request, res: Response): Promise<void> {
        const poems = await pool.promise().query('SELECT * FROM poema');
        res.json(poems[0]);
    } 

    public async getOne(req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const poem = await pool.promise().query('SELECT * FROM poema WHERE idPoema = ?', [id]);
        if (poem.length > 0) {
            var poemString = JSON.stringify(poem[0]);
            var result = JSON.parse(poemString.substring(1,(poemString.length-1)));
            return res.json(result);
        }
        res.status(404).json({message: "The poem does´t exist"});
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.promise().query('INSERT INTO poema set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Poem saved!'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.promise().query('DELETE FROM poema WHERE idPoema = ?', [id]);
        res.json({message: 'Poem deleted successfully!'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.promise().query('UPDATE poema set ? WHERE idPoema = ?', [req.body, id]);
        res.json({message: 'Poem updated successfully!'});
    }
}

export const poemasController = new PoemasController();