import Button from './Button.js'

export default class Controller {
  constructor (node, list, callback) {
    this.node = node
    this.callback = callback
    this.buildUI(list)
  }

  buildUI (list) {
    const buttons = list.map((identifier) => {
      return new Button(identifier, this.callback)
    })

    buttons.forEach((button) => {
      this.node.appendChild(button.node)
    })
  }
}
