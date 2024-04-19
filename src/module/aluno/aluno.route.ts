import * as express from 'express'
import type {Request, Response} from 'express'
import {ConectionAluno} from './aluno.model';
import {conexao} from '../../service/knex'

const router = express.Router();

router.get('/', async (_:Request, res:Response) => {
  const data = await new ConectionAluno(new conexao).getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req:Request, res:Response) => {
  if(!req.body.nome || !req.body.cpf){
    return res.status(400).json({msg: 'Nome e cpf são obrigatórios.' });
  }

  try {
    const data = await new ConectionAluno(new conexao).store(req.body);
    return res.status(201).json({ data });
  } catch (error) {
    return res.status(500).json({msg:"Erro no servidor."})
  }
  
});


export default router;
