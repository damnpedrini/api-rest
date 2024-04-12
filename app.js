const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const storagePath = './storage/';

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo à API REST do Servidor S3');
});

app.get('/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = storagePath + filename;
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return res.status(404).send('Arquivo não encontrado');
        }
        res.send(data);
    });
});

app.post('/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = storagePath + filename;
    const fileData = req.body;

    fs.writeFile(filePath, JSON.stringify(fileData), (err) => {
        if (err) {
            return res.status(500).send('Erro ao salvar o arquivo');
        }
        res.status(201).send('Arquivo salvo com sucesso');
    });
});

app.delete('/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = storagePath + filename;

    fs.unlink(filePath, (err) => {
        if (err) {
            return res.status(404).send('Arquivo não encontrado');
        }
        res.send('Arquivo deletado com sucesso');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor S3 simulado iniciado em http://localhost:${PORT}`);
});
