export type Id = string | number

export type Item = {
  id: Id
  nombre: Id
}

export type Bodega = {
  id: Id
  name: string
  items: Item[]
}

