require('../index.html')
require('../css/package.scss')
var $ = require('zepto-modules')

class Hello {
  constructor(name) {
    this.name = name
  }

  show () {
    window.alert(`Hello ${this.name}`)
  }
}

const hello = new Hello('Babel')

const $loading = $('#J_loading')
const $main = $('#J_main')
const $btn = $('.btn')

$btn.on('touchstart', () => {
  console.log('touchstart')
  hello.show()
})

setTimeout(() => {
  $loading.remove()
  $main.removeClass('hide')
}, 1000)
