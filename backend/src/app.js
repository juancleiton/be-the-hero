const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate');
const routes = require('./routes')

const app = express()

/**
 * CORS - Módulo de Segurança
 * Ele determina quem pode acessar nossa aplicação
 * 
 * OBS1: Caso deixe o código assim: "app.use(cors())"
 * isso permite que qualquer aplicação font-end acesse nossa api rest full
 * 
 * OBS2: Caso tenhamos que colocar essa aplicação em produção, então
 * precisaremos determinar com url que será permitida o acesso.
 * O código deve ser modificado para este abaixo:
 * app.use(cors({
 *  origin: 'http://meu-font-end.com'
 * }))
 */
app.use(cors())

/**
 * Importante o "app.use(express.json())" estar antes de
 * qualquer rota para que todas entendam o formato json
 */
app.use(express.json())

/**
 * Importante o "app.use(routes)" esteja após o "app.use(express.json())"
 * para que o formato JSON seja reconhecido
 */
app.use(routes)

/**
 * CELEBRATE
 * esse codigo de erros serve para lidar com os erros
 * que ocorrer quando o sistema validar os dados enviados
 * pelo usuário.
 */
app.use(errors())

/**
 * Tipos de Banco de Dados
 * SQL: MySQL, SQLite, PostrgeSQL, Oracle, SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Tipos de comunicação com o banco de dados
 * Driver: Ex.: SELECT * FORM users (Forma oficial)
 * Query Builder: Ex.: table('users').select('*').where()
 * 
 * Decidido utilizar o "Query builder" com a ferramenta para o node, o "KNEX.JS"
 * http://knexjs.org/
 */

module.exports = app
// app.listen(3333)
// console.log('Servidor: Rodando...')