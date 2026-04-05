const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.get('/usuarios', (req, res) => {
    res.status(200).json({ mensagem: "Lista de usuários consultada."});
});

app.post('/usuarios', (req, res) =>{
    const dados = req.body;
    res.status(201).json({mensagem: "Usuario criado com sucesso!", dados});
});

app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({mensagem: `Usuário ${id} atualizado com sucesso!`});
});

app.patch('/usuarios/:id', (req, res) =>{
    const { id } = req.params;
    res.status(200).json({ mensagem: `Status do usuário ${id} alterado.` });
});

app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({ mensagem: `Usuário ${id} deletado.` });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});