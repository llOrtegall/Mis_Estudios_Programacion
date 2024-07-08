import { faker } from '@faker-js/faker'

class ProductServices {
  constructor () {
    this.products = []
    this.generateProducts()
  }

  async generateProducts () {
    for (let i = 0; i < 100; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        image: faker.image.url()
      })
    }
  }

  async getProducts (limit) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products.slice(0, limit))
      }, 3000)
    })
  }

  async getProduct (id) {
    return this.products.find(product => product.id === id)
  }

  async createProduct (data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }

    this.products.push(newProduct)

    return newProduct
  }

  async updateProduct (id, data) {
    const index = this.products.findIndex(product => product.id === id)

    if (index === -1) throw new Error('Product not found')

    const { name, price, description, image } = data

    if (name) this.products[index].name = name
    if (price) this.products[index].price = price
    if (description) this.products[index].description = description
    if (image) this.products[index].image = image

    return this.products[index]
  }

  async deleteProduct (id) {
    const index = this.products.findIndex(product => product.id === id)

    if (index === -1) throw new Error('Product not found')

    this.products.splice(index, 1)

    return this.products[index]
  }
}

export { ProductServices }
