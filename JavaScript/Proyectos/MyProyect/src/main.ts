import './style.css'

let data = [] as User[]

interface User {
  avatar: string
  creationAt: string
  email: string
  id: number
  name: string
  password: string
  role: string
  updatedAt: string
}

const button = document.querySelector('#buttonData')
const renderItems = document.querySelector('.render-items')

EventListener()

function EventListener(): void {
  button?.addEventListener('click', getDataApi)
  renderItems?.addEventListener('click', deleUserArray)
}

function getDataApi() {
  fetch('https://api.escuelajs.co/api/v1/users')
    .then(response => response.json())
    .then(dataRes => {
      data = dataRes
      printData(data)
    })
}

function printData(data: User[]): void {
  const container = document.querySelector('.render-items')
  if (!container) return
  container.innerHTML = ''
  data.forEach((user: User) => {
    const div = document.createElement('div')
    div.innerHTML = `
      <img src="${user.avatar}" alt="${user.name}" width="100"/>
      <p>${user.name}</p>
      <p>${user.email}</p>
      <p>${user.role}</p>
      <button class="delete-user" id="${user.id}">Eliminar</button>
    `
    container?.appendChild(div)
  })
}

function deleUserArray(ev: any) {
  if (ev.target.classList.contains('delete-user')) {
    const id = ev.target.id
    data = data.filter((user: User) => user.id !== Number(id))
    printData(data)
  }
}





