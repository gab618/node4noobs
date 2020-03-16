const express = require('express');

const app = express();
app.use(express.json());

const users = [];

//Listar todos os usuários
app.get('/users', (req, res) => {
    return res.json(users);
})

//Listar um usuário do array pelo index
app.get('/users/:index', (req, res) => {
    const {index} = req.params;
    return res.json(users[index]);
})

//Criar novo usuário
app.post('/users', (req, res) => {
    const { user } = req.body;
    users.push(user);
    return res.json(users);
});

//Editar usuário pelo index
app.put('/users/:index', (req,res) => {
    const {index} = req.params;
    const {user} = req.body;

    users[index] = user;
    return res.json(users);

});

//Apagar usuário pelo index
app.delete('/users/:index', (req, res) => {
    const {index} = req.params;
    users.splice(index, 1);
    return res.json(users);
});




app.listen(3000);