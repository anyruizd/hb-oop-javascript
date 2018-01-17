export default class Button {
  constructor (contents, callback) {
    this.node = this.buildUI(contents)
    this.callback = callback
    this.attachEvents()
  }

  buildUI (contents) {
    return this.generateDOM(`<button>${contents}</button>`)
  }

  generateDOM (text) {
    const domParser = new DOMParser()
    return domParser.parseFromString(text, 'text/html').body.children[0]
  }

  attachEvents() {
    this.node.addEventListener('click', (event) => {
      this.callback(event.currentTarget.innerHTML)
    })
  }
}
