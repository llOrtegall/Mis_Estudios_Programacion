export interface Item {
  id: number
  nombre: string
  precio: number
}

export interface Bodega {
  id: string
  nombre: string
  direccion: string
  telefono: string
  items: Item[]
}