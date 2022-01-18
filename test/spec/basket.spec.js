const Basket = require ('../../src/Basket')



describe("bagelTest", ()=> {
   it("addbageltobasket", () => {
    const bagel = new Bagel() 
    const basket = new Basket()
    basket.addItem(bagel) 
    expect(basket).toHaveSize(1)

   }
   ) 
    

})
