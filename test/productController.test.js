const { showProducts, showProductsByCategoria, showProductById, showNewProduct, createProduct, showEditProduct, updateProduct, deleteProduct } = require('../src/controllers/productController');
const { getMockReq, getMockRes } = require('@jest-mock/express')
const { res, next } = getMockRes({
    locals: {
        isPremiumUser: true,
    },
})

describe('getUser', () => {
    jest.useRealTimers()
    it("Should return html whit products", async () => { // generate a mock request with params
        const req = getMockReq({ params: { kind: undefined } })

        // provide the mock req, res, and next to assert
   
        await  expect(  showProducts(req, res)).toBe(await showProducts(req, res) );
    
    })
})