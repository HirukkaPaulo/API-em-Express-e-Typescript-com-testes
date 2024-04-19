import * as request from 'supertest'

describe('Int - Aluno suit',() => {
    const URL = 'http://localhost:8080'
    it('##GET /aluno',async () =>{
        const response = await request(URL)
        .get('/aluno')

        expect(response.status).toBe(200)
    })

    it('##POST /aluno',async () =>{
        const response = await request(URL)
        .post('/aluno').send({
            nome:"teste",
            cpf:"14532154"
        })

        expect(response.status).toBe(201)
    })

    it('##POST /aluno',async () =>{
        const response = await request(URL)
        .post('/aluno').send({
        })

        expect(response.status).toBe(400)
    })
})