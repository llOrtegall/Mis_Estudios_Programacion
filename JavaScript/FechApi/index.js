const loadBotton = document.getElementById('loadTxt')
loadBotton.addEventListener('click', getData)

function getData() {
  const URL = './data/datos.txt'

  fetch(URL)
    .then(response => response.text())
    .then(data => {
      const result = document.getElementById('result')
      result.textContent = data
    })
}