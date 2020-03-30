const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

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

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(12).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create)

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), ProfileController.index)

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), IncidentController.index)
routes.post('/incidents', IncidentController.create)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), IncidentController.delete)

module.exports = routes