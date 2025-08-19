interface ProductIncomplete {
  id: number
  name?: string
  price?: number
}

// type ProductComplete = Required<ProductIncomplete>

const product: Required<ProductIncomplete> = { id: 1, name: 'test', price: 20 }

const test: Required<Partial<ProductIncomplete>> = { id: 1, name: 'test', price: 20 }