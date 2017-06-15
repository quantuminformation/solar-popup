/* global describe, it, beforeEach */
import assert from 'assert'
import { KeyCodes } from 'vanilla-typescript'

import SolarPopup from '../SolarPopup'

let popup: SolarPopup

describe('Basic tests', () => {
  it('Renders', (done) => {
    showSimplePopup()
    assert.equal(document.querySelectorAll('.solar-popup').length, 1)
    assert.equal(document.querySelectorAll('.modal-background').length, 1)
    popup.destroy().then((data) => {
      done()
    })
  })
  it('Closes on submit button click', (done) => {

    showSimplePopup()
    document.querySelector('button[type="submit"]').dispatchEvent(new Event('click'))
    setTimeout(() => {

      assert.equal(document.querySelectorAll('.solar-popup').length, 0)
      assert.equal(document.querySelectorAll('.modal-background').length, 0)

      done()
    }, 300)
  })
  it('Closes on close button click', (done) => {

    showSimplePopup()
    document.querySelector('.close').dispatchEvent(new Event('click'))
    setTimeout(() => {

      assert.equal(document.querySelectorAll('.solar-popup').length, 0)
      assert.equal(document.querySelectorAll('.modal-background').length, 0)

      done()
    }, 300)
  })
  it('Closes on ESC key press', (done) => {

    showSimplePopup()

    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape' }))
    setTimeout(() => {

      assert.equal(document.querySelectorAll('.solar-popup').length, 0)
      assert.equal(document.querySelectorAll('.modal-background').length, 0)

      done()
    }, 300)
  })
})

function showSimplePopup () {
  let child = document.createElement('DIV')
  child.innerHTML =
    `<p>This is some content that can be supplied to the popup</p>
           <p>Also press the [ESC] key to close]</p>
           <button type="submit">Clicking a submit button will also close it</button>
        `
  popup = new SolarPopup(child)
  popup.show()
}
