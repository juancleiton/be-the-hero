const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

/**
 * Rota - exemplo: localhost:3333/
 * Recurso - exemplo: users (localhost:3333/users) Estou buscando um recurso (dados) de usuários
 */

/**
 * Métodos HTTP - GET, POST, PUT, DELETE
 * GET: Buscar/Listar uma informação do back-end (o retorno dos dados), Ex.: JSON com dados do usuário 
 * POST: Enviar dados para o back-end (Criar um usuário)
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados via url (Na rota) após o '?' (servem para filtro, paginação)
 * Route Params: Utilizados para identificar recursos. Ex.: /id (users com id 25 = "/25")
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
 */
routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes