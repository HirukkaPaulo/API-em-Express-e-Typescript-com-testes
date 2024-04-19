import knex, { Knex } from 'knex';
import knexConfig from '../config/knex';

export class conexao {
  private static conn:Knex
  
  conectar() {
    if (!conexao.conn) {
      return conexao.conn = knex(knexConfig);
    }
  
    conexao.conn = knex(knexConfig);
    return conexao.conn;
  }
  
}

export default conexao
