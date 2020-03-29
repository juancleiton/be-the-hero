const crypto = require('crypto') //Usando apenas para gerar um texto aleatório

module.exports = function generateUniqueId(){
    return crypto.randomBytes(4).toString('HEX')
}