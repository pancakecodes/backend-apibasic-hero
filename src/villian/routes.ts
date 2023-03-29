import { Router } from "express";
import { getAll, getById, getByAlte, create, remove, update } from "./controller";


export const villianRoute = Router();

villianRoute.get('/', getAll);

villianRoute.get('/:id', getById);

villianRoute.get('/alte/:alte', getByAlte);

villianRoute.post('/', create);

villianRoute.delete('/:id', remove);

villianRoute.put('/:id', update);