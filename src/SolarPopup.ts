import { ModalBackground } from "./ModalBackground"
import { IComponent, KeyCodes, OptionalDimensions } from "vanilla-typescript"
import "./SolarPopup.pcss"
import { constants } from "./constants"

// re-export stuff //todo maybe a better way to do this

/**
 * A Popup that can take any content
 *
 * Features
 * Closes in response to [ESC] keypress, submit events.
 * Adds modal background that fades in with CSS3 transitions
 * Popup itself slides in with CSS3 transitions
 *
 * If you specify fixed Dimensions then it will explicitly set the width and height optionally
 *
 * @constructor
 */
export class SolarPopup implements IComponent {
  destroyBoundWithThis = this.destroy.bind(this)
  modalBackground = new ModalBackground()
  hostElement: HTMLElement
  keyupHandler = event => {
    if (event.keyCode === KeyCodes.ESC) {
      this.destroyBoundWithThis()
    }
  }

  constructor(child: HTMLElement, optionalDimensions?: OptionalDimensions) {
    const tempElement: HTMLElement = document.createElement("DIV")

    tempElement.innerHTML = `<article class='solar-popup' data-is-initialising='true'>
        <a class='close'><!--&#x274c-->&#x2716</a>
          <div class='childContainer'></div>
       </article>`
    this.hostElement = tempElement.firstChild as HTMLElement
    this.hostElement.querySelector(".childContainer").appendChild(child)

    var htmlStyles = window.getComputedStyle(document.querySelector("html"))
    var popupWidth = htmlStyles.getPropertyValue("--popup-width") // todo, use to center popup

    if (optionalDimensions) {
      if (window.innerWidth > 2 * 10 + optionalDimensions.width) {
        document.documentElement.style.setProperty("--popup-width", optionalDimensions.width + "px")
      }
      if (window.innerHeight > 2 * 10 + optionalDimensions.height) {
        // todo adjust for small height
        this.hostElement.style.height = `${optionalDimensions.height}px`
      }
    }
  }

  /**
   * Shows
   * @param {Element} child we need to keep the reference to keep custom functionality in the child
   */
  show(): Promise<void> {
    document.body.appendChild(this.hostElement)
    // let currentWidth = window.getComputedStyle(document.querySelector('p'))

    this.modalBackground.render()

    return new Promise((resolve, reject) => {
      // we need to set this in a timeout in order to trigger the css transition
      setTimeout(() => {
        this.hostElement.dataset["isInitialising"] = "false"
      })
      // when the popup is has finished moving via the css transition resolve the promise to tell the callee
      setTimeout(() => {
        this.addListeners()
        resolve()
      }, constants.TRANSITION_TIMES)
    })
  }

  addListeners() {
    const closeElement = this.hostElement.querySelector("a")
    closeElement.addEventListener("click", this.destroyBoundWithThis)
    this.hostElement.classList.remove("offscreen")

    document.addEventListener("keyup", this.keyupHandler)

    this.hostElement.addEventListener("submit", event => {
      this.destroyBoundWithThis()
      event.preventDefault()
    })

    // handle the first child submit button click, close popup by default
    // this is a convention that gets popup to behave in sensible way
    const submitBtn = this.hostElement.querySelector('button[type="submit"]')
    if (submitBtn) {
      submitBtn.addEventListener("click", this.destroyBoundWithThis)
    }
  }

  destroy(): Promise<any> {
    // visual indicator for this element and delegate to the modal
    this.hostElement.dataset["isDestructing"] = "true"
    this.modalBackground.destroy()

    return new Promise(resolve => {
      setTimeout(() => {
        // previous popup won't be removed from garbage collector in time
        document.removeEventListener("keyup", this.keyupHandler)

        this.hostElement.parentElement.removeChild(this.hostElement)

        resolve()
      }, constants.TRANSITION_TIMES)
    })
  }
}
