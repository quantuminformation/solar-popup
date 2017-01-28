import {ModalBackground} from './ModalBackground'
import {IComponent} from "vanilla-typescript"
import {constants} from "./constants"
import './SolarPopup.pcss'

/**
 * A Popup that can take any content
 *
 * Features
 * Closes in response to [ESC] keypress, submit events.
 * Adds modal background that fades in with CSS3 transitions
 * Popup itself slides in with CSS3 transitions
 *
 * @constructor
 */
export default class SolarPopup implements IComponent {
  destroyBoundWithThis = this.destroy.bind(this)
  modalBackground = new ModalBackground()
  private hostElement: HTMLElement
  private child: HTMLElement

  constructor(child: HTMLElement) {
    this.child = child
  }


  /**
   * Shows
   * @param {Element} child we need to keep the reference to keep custom functionality in the child
   */
  show() {

    const tempElement:HTMLElement = document.createElement('DIV')

    tempElement.innerHTML =
      `<article class='solar-popup' data-is-initialising="true">
        <a class='close'><!--&#x274c;-->&#x2716;</a>
          <div class="childContainer"></div>
       </article>`
    tempElement.querySelector(".childContainer").appendChild(this.child)

    this.hostElement = <HTMLElement>tempElement.firstChild
    document.body.appendChild(this.hostElement)
    let currentWidth = window.getComputedStyle(document.querySelector("p"))

    this.modalBackground.render()

    setTimeout(() => {
      //this triggers a css change
      //let currentWidth = window.getComputedStyle(document.querySelector("p")) }, 50)
      this.hostElement.dataset["isInitialising"] = "false"
    })
    this.addListeners()
  }

  addListeners() {
    const closeElement = this.hostElement.querySelector('a')
    closeElement.addEventListener('click', this.destroyBoundWithThis)
    this.hostElement.classList.remove('offscreen')

    document.addEventListener('keyup', function (event) {
      if (event.keyCode === constants.KEYS.ESC) {
        this.destroyBoundWithThis()
      }
    }.bind(this))

    this.hostElement.addEventListener('submit', function (event) {
      this.destroyBoundWithThis()
      event.preventDefault()
    }.bind(this))


    // handle the first child submit button click, close popup by default
    // this is a convention that gets popup to behave in sensible way
    const submitBtn = this.hostElement.querySelector('button[type="submit"]')
    if (submitBtn) {
      submitBtn.addEventListener("click", this.destroyBoundWithThis)
    }
  }

  destroy() {
    //vistual indicator for this element and delegate to the modal
    this.hostElement.dataset["isDestructing"] = "true"
    this.modalBackground.destroy()
    setTimeout(function () {
      this.hostElement.parentElement.removeChild(this.hostElement)
    }.bind(this), constants.TRANSITION_TIMES)
  }
}


