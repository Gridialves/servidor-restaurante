const express = require('express');
const cors = require('cors')  

const comidas = [
    {
      nome: "Batata frita",
      descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
      imagem: "img/Batata-frita.jpg"
    },
    {
      nome: "Macarronada",
      descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
      imagem: "img/macarronada.jpg"
    },
    {
      nome: "Falafel",
      descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
      imagem: "img/falafel.jpg"
    },
    {
      nome: "Creme de abóbora",
      descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
      imagem: "img/creme-de-abobora.jpg"
    },
  
  ]

  const server = express();
  server.use(cors())

  server.get("/comidas", (request, response)=>{
    response.send(controller.getAll())

  })

server.listen(3000);
console.log('Servidor rodando na porta 3000');