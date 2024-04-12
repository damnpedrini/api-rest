let data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

// Obter todos os itens
exports.getAllItems = (req, res) => {
    res.json(data);
};

// Obter um item por ID
exports.getItemById = (req, res) => {
    const id = parseInt(req.params.id);
    const item = data.find(item => item.id === id);

    if (!item) {
        return res.status(404).send('Item not found');
    }

    res.json(item);
};

// Criar um novo item
exports.createItem = (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.status(201).json(newItem);
};

// Atualizar um item existente
exports.updateItem = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    const index = data.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).send('Item not found');
    }

    data[index] = { ...data[index], ...updatedItem };
    res.json(data[index]);
};

// Excluir um item
exports.deleteItem = (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).send('Item not found');
    }

    const deletedItem = data.splice(index, 1);
    res.json(deletedItem[0]);
};
