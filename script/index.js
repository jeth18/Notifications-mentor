import  {DATA} from '../data.js'

function addDataNotificaction(el) {
  const section = document.getElementById('notifiactions-list')

  const content = document.createElement('div')
  content.className = 'notifiactions-card'

  //imagen creada 
  const img = document.createElement('img')
  img.src = el.img
  img.className = 'img-card'

  console.log(el.picture)
  //mensaje
  const div = document.createElement('div')
  const text = document.createElement('p')
  text.className = 'card-text'

  const person = document.createElement('strong')
  person.innerText = el.name + ' '
  text.appendChild(person)
  
  const info = document.createElement('span')
  info.innerText= el.info + ' '
  text.appendChild(info)

  const notifiactions = document.createElement('strong')
  notifiactions.innerHTML = el.notification + ' '
  text.appendChild(notifiactions)

  if(el.view) {
    const view = document.createElement('span')
    view.className = 'view'
    text.appendChild(view)
  }
  //tiempo
  const time = document.createElement('span')
  time.innerText = el.time

  div.appendChild(text)
  div.appendChild(time)

  content.appendChild(img)
  content.appendChild(div)

  section.appendChild(content)

}

function createElements() {
  DATA.forEach((el) => {
    addDataNotificaction(el)
  })
}

createElements()