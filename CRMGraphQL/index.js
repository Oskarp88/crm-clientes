const { ApolloServer} = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');
const conectarDB = require('./config/db');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variable.env'});

//conectar la db
conectarDB();

// servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
        //console.log(req.headers['authorization'])
        const token = req.headers['authorization'] || '';
        if(token){
            try {
                const usuario = jwt.verify(token, process.env.SECRETA);
                // console.log(usuario);
                return{
                    usuario
                }
            } catch (error) {
                console.log('hubo un error')
                console.log(error);
            }
        }
    }
});

server.listen().then( ({url}) => {
   console.log(`Servidor listo en la URL ${url}`);
});