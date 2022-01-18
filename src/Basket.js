class Basket {
    constructor() {
        this.capacity = 5
        this.items= []
        

    }
    addItems(item) {
        return this.items.push(item)

    }
}