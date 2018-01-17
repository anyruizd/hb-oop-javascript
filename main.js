import Controller from './modules/Controller.js'
import SquareDisplay from './modules/SquareDisplay.js'

const controller1 = new Controller(
  document.querySelector('.controller-1'),
  ['Button-1', 'Button-2', 'Button-3', 'Button-4'],
  (identifier) => {
    console.log('identifier:', identifier)
  }
)
const controller2 = new Controller(
  document.querySelector('.controller-2'),
  ['btn-1', 'btn-2', 'btn-3', 'btn-4'],
  (identifier) => {
    console.log('identifier:', identifier)
  }
)
