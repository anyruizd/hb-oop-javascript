import Controller from './modules/Controller.js'
import starwarsNames from 'starwars-names'
import title from './title.txt'

const titleContainer = document.querySelector('.title')
titleContainer.innerText = title

const controller1 = new Controller(
  document.querySelector('.controller-1'),
  starwarsNames.random(5),
  (identifier) => {
    console.log('identifier:', identifier)
  }
)
const controller2 = new Controller(
  document.querySelector('.controller-2'),
  starwarsNames.random(5),
  (identifier) => {
    console.log('identifier:', identifier)
  }
)
