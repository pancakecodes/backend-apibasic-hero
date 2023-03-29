import { Request, Response } from "express";
import { AppDataSource } from "../../datasource";
import { Villian } from "../models/villian.entity";

const VillianRepository = AppDataSource.getRepository(Villian);

export const getAll = async (req: Request, res: Response) => {
    const Villians = await VillianRepository.find();
    return res.json(Villians);
}

export const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const Villian = await VillianRepository.findOneBy({ id: Number.parseInt(id) });
    if (!Villian) {
        return res.status(404).json({
            message: `Villian with id: ${id}, not found`
        });
    }
    res.json(Villian);
}

export const getByAlte = async (req: Request, res: Response) => {
    const { alte } = req.params;
    const Villian = await VillianRepository.findOneBy({ alte });
    if (!Villian) {
        return res.status(404).json({
            message: `Villian with alte: ${alte}, not found`
        });
    }
    res.json(Villian);
}

export const create = async (req: Request, res: Response) => {
    const { alte, name} = req.body;

    const oldVillian = await VillianRepository.findOneBy({ alte });

    if (oldVillian) {
        return res.status(400).json({
            message: `Villian with alte: ${alte} already exists`
        });
    }

    const newVillian = VillianRepository.create({ alte, name });
    const Villian = await VillianRepository.save(newVillian);
    res.json(Villian);
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { alte, name } = req.body;

    const Villian = await VillianRepository.findOneBy({ id: Number.parseInt(id) });

    if (!Villian) {
        return res.status(404).json({
            message: `Villian with id: ${id}, not found`
        });
    }

    Villian.alte = alte;
    Villian.name = name;


    await VillianRepository.save(Villian);

    res.json(Villian);
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    const Villian = await VillianRepository.findOneBy({ id: Number.parseInt(id) });

    if (!Villian) {
        return res.status(404).json({
            message: `Villian with id: ${id}, not found`
        });
    }

    await VillianRepository.delete(Villian);

    res.json(Villian);
}
