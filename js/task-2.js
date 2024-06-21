class Storage {
    #items;
    constructor(items) {
        this.#items = items;
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        return this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        const indexToDelete = this.#items.indexOf(itemToRemove);
        if(indexToDelete !== -1) {
            this.#items.slice(indexToDelete, 1);
        } else {
            return itemToRemove;
        }
    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); 

storage.addItem("Droid");
console.log(storage.getItems()); 

storage.removeItem("Prolonger");
console.log(storage.getItems()); 

storage.removeItem("Scaner");
console.log(storage.getItems());