class Item {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static fromObject(obj) {
        return new Item(obj.id, obj.name);
    }
}

module.exports = Item;
