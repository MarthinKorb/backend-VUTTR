import { Request, Response } from 'express';

import Tool from '../models/Tool';
import { getRepository } from 'typeorm';

import * as Yup from 'yup';

export default {

    async index(request: Request, response:Response) {
        
        const toolsRepository = getRepository(Tool);      

        const tools = await toolsRepository.find();

        return response.status(200).json(tools);        
    },

    async create(request: Request, response: Response) {
        const data = request.body;
        
        const toolsRepository = getRepository(Tool);             

        const schema = Yup.object().shape({
            title: Yup.string().required(),
            link: Yup.string().required().max(300),
            description: Yup.string().required(),
            tags: Yup.string().required(),
        });

        await schema.validate(data, { 
            abortEarly: false
        });
    
        const tool = toolsRepository.create(data);
    
        await toolsRepository.save(tool);
    
        return response.status(201).json(tool);
    },

    async delete(request: Request, response: Response) {
       const { id } = request.params;

       const toolsRepository = getRepository(Tool); 

       const toolToBeDelected = await toolsRepository.findOne(id);

       if(!toolToBeDelected){
            return response.status(404).json({message: 'tool could not be found.'})
       }

       toolsRepository.delete(id);

       return response.status(200).json({ message: 'Tool deleted.'});

    },
    
    async edit(request: Request, response: Response): Promise<any> {
        const { id } = request.params;

        const { title, link, description, tags } = request.body;

        const toolsRepository = getRepository(Tool); 

        const toolToUpdate = await toolsRepository.findOne(id);

        if(!toolToUpdate){
            throw new Error();
        }

        const schema = Yup.object().shape({
            title: Yup.string().required(),
            link: Yup.string().required().max(300),
            description: Yup.string().required(),
            tags: Yup.string().required(),
        });

        await schema.validate({ title, link, description, tags }, { 
            abortEarly: false
        });

        const data = toolToUpdate as Tool;

        await toolsRepository.update(data,{
            title,
            link,
            description,
            tags
        });

        return response.status(200).json({id, title, link, description, tags});
    },

    async find(request: Request, response: Response): Promise<void> {
        const q = request.query.q;

        console.log(q);
    }
};