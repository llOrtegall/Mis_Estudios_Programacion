export interface Item {
  id: number
  nombre: string
  precio: number
}

export interface Bodega {
  id: number
  nombre: string
  direccion: string
  telefono: string
  items: Item[]
}