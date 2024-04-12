const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const storagePath = './storage/';

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the S3 Server REST API');
});

app.get('/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = storagePath + filename;
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return res.status(404).send('File not found');
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
            return res.status(500).send('Error saving the file');
        }
        res.status(201).send('File saved successfully');
    });
});

app.delete('/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = storagePath + filename;

    fs.unlink(filePath, (err) => {
        if (err) {
            return res.status(404).send('File not found');
        }
        res.send('File deleted successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Pedrini's simulated S3 server started at http://localhost:${PORT}`);
});
