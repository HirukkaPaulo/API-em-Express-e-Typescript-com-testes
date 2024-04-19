import { ConectionAluno }  from '../aluno.model'

describe('Unit - Aluno model suite',() =>{
    it('deve retornar um objeto do banco de dados mockado',async () => {
        let knexServiceMock: any

        const knexMock = () => {
            return {
                select: jest.fn().mockReturnValueOnce([{
                    nome:'João Paulo',
                    cpf:12345678912
                }])
            }
        }

        knexServiceMock = {
            conectar: jest.fn(() => knexMock) 
        }

        const aluno = new ConectionAluno(knexServiceMock)
        const response = await aluno.getAll()

        expect(response).toBeTruthy()
        expect(response.length).toBe(1)
    })
    
    it('deve salvar um aluno no banco de dados e retornar o número 1 que representa sucesso',async () => {
        let knexServiceMock: any

        const knexMock = () => {
            return {
                insert: jest.fn().mockReturnValueOnce([1])
            }
        }

        knexServiceMock = {
            conectar: jest.fn(() => knexMock) 
        }

        const aluno = new ConectionAluno(knexServiceMock)
        const response = await aluno.store({
            nome:'João Paulo',
            cpf:1234567899
        })

        expect(response).toBeTruthy()
        expect(response).toEqual([1])
    })
})