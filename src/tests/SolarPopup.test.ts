/* global describe, it, beforeEach */
import assert from "assert"
import { KeyCodes, Dimensions } from "vanilla-typescript"

import { SolarPopup } from "../"

let popup: SolarPopup

describe("Basic tests", () => {
  it("Renders", done => {
    showSimplePopup()
    assert.equal(document.querySelectorAll(".solar-popup").length, 1)
    assert.equal(document.querySelectorAll(".modal-background").length, 1)
    popup.destroy().then(data => {
      done()
    })
  })
  it("Closes on submit button click", done => {
    showSimplePopup()
    document.querySelector('button[type="submit"]').dispatchEvent(new Event("click"))
    setTimeout(() => {
      assert.equal(document.querySelectorAll(".solar-popup").length, 0)
      assert.equal(document.querySelectorAll(".modal-background").length, 0)

      done()
    }, 300)
  })
  it("Closes on close button click", done => {
    showSimplePopup()
    document.querySelector(".close").dispatchEvent(new Event("click"))
    setTimeout(() => {
      assert.equal(document.querySelectorAll(".solar-popup").length, 0)
      assert.equal(document.querySelectorAll(".modal-background").length, 0)

      done()
    }, 300)
  })
  it("Closes on ESC key press", done => {
    showSimplePopup()

    document.dispatchEvent(new KeyboardEvent("keyup", { key: "Escape" }))
    setTimeout(() => {
      assert.equal(document.querySelectorAll(".solar-popup").length, 0)
      assert.equal(document.querySelectorAll(".modal-background").length, 0)

      done()
    }, 300)
  })
  it("Dimensions are applied correctly", done => {
    let dim: Dimensions = { width: 100, height: 100 }
    showSimplePopup(dim)
    let el: HTMLElement = document.querySelector(".solar-popup") as HTMLElement

    assert.equal(window.getComputedStyle(el).height, dim.height)
    assert.equal(window.getComputedStyle(el).width, dim.width)

    done()
  })
})

function showSimplePopup(dimensions?: Dimensions) {
  let child = document.createElement("DIV")
  child.innerHTML = `<p>This is some content that can be supplied to the popup</p>
           <p>Also press the [ESC] key to close]</p>
           <button type="submit">Clicking a submit button will also close it</button>
        `
  popup = dimensions ? new SolarPopup(child, dimensions) : new SolarPopup(child)
  popup.show()
}
