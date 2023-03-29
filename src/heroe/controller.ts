import { Request, Response } from "express";
import { AppDataSource } from "../../datasource";
import { Heroe } from "../models/heroe.entity";


const heroRepository = AppDataSource.getRepository(Heroe);

export const getAll = async (req: Request, res: Response) => {

    const heroes = await heroRepository.find();
    return res.json(heroes);
}

export const getById = async(req: Request, res: Response) =>{
    const { id } = req.params;

    const hero = await heroRepository.findOneBy({ id: Number.parseInt(id) });

    if(!hero) {
        return res.status(404).json({
            message:`Hero with id: ${id}, not found`
        })
    }

    res.json(hero);
}

export const getByAlte = async (req: Request, res: Response) => {
    const { alte } = req.params;

    const hero = await heroRepository.findOneBy({ alte });

    if(!hero) {
        return res.status(404).json({
            message:`Hero with Alte: ${alte}, not found`
        })
    }

    res.json(hero);
}

export const create = async (req: Request, res: Response) => {
    const {alte, nombre} = req.body;

        const oldHero = await heroRepository.findOneBy({alte});

        if (oldHero){
            return res.status(400).json({   
                message: `Hero with Alte: ${alte} already exists`
                })
            }

            const newwHero =  heroRepository.create({alte, nombre});
       
            const hero = await heroRepository.save({alte, nombre});
       
            res.json(hero);
           }

export const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { alte, nombre } = req.body;
    const hero = await heroRepository.findOneBy({ id: Number.parseInt(id) });
    if(!hero) {
        return res.status(404).json({
            message:`Hero with id: ${id}, not found`
        })
    }
    hero.nombre = nombre;
    hero.alte = alte;
    await heroRepository.save(hero);
    res.json(hero);
    }

    export const remove = async (req: Request, res: Response) => {
        const { id } = req.params;
        const hero = await heroRepository.findOneBy({ id: Number.parseInt(id) });
        if(!hero) {
            return res.status(404).json({
                message:`Hero with id: ${id}, not found`
            })
        }
        await heroRepository.delete(hero);
        res.json(hero);
        }

