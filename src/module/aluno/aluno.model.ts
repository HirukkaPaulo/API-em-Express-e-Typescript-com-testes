import { Knex } from 'knex';
import { conexao } from '../../service/knex';
import type {Aluno, AlunoCreate} from './aluno.d.ts';

export class ConectionAluno {
  private db:Knex
  
  constructor(knexService:conexao){
    this.db = knexService.conectar()
  }

  getAll = async ():Promise<Aluno[] | []> => {
    return this.db('aluno').select();
  };
  
  store = async (params:AlunoCreate) => {
    return this.db('aluno').insert(params);
  };
  
}


