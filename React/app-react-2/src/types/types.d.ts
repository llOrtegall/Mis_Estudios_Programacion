export type Id = string | number

export interface IntColumn{
  id: Id
  title: string
}

export type Task = {
  id: Id
  columnId: Id
  content: string
}