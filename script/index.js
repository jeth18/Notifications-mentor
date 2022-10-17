import { DATA } from '../data.js'

function addDataNotificaction(el) {
  const section = document.getElementById('notifications-list')

  const content = document.createElement('div')
  content.className = 'notifications-card'

  //imagen creada 
  const img = document.createElement('img')
  img.src = el.img
  img.className = 'img-card'

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

  const notifications = document.createElement('strong')
  notifications.innerHTML = el.notification + ' '
  text.appendChild(notifications)
  if (el.group) notifications.className = 'group'

  if (el.view) {
    const view = document.createElement('span')
    view.className = 'view'
    text.appendChild(view)
    content.className = 'notifications-card no-view'
  }

  const time = document.createElement('span')
  time.innerText = el.time
  time.className = 'time'
  
  div.appendChild(text)
  div.appendChild(time)

  const head = document.createElement('div')
  head.appendChild(img)
  head.appendChild(div)
  head.className = 'd-row'

  content.appendChild(head)

  if (el.message) {
    const message = document.createElement('div')
    message.innerText = el.message
    message.className = 'message'
    content.appendChild(message)
    content.className = 'notifications-card d-col'
  }

  if (el.picture) {
    const picture = document.createElement('img')
    picture.src = el.picture
    picture.className = 'picture'
    content.appendChild(picture)
    content.className = 'notifications-card d-row j-content'
  }

  section.appendChild(content)
}

function createElements() {
  DATA.forEach((el) => {
    addDataNotificaction(el)
  })
}

createElements()
