
import {constants} from "./constants";
export class ModalBackground {
  private destroyBoundWithThis = this.destroy.bind(this)
  private hostElement: HTMLElement


  constructor(){

  }
  /**
   * Shows
   * @param {Element} child we need to keep the reference to keep custom functionality in the child
   */
  render(){
    this.hostElement = document.createElement('DIV')
    this.hostElement.className = 'modal-background'
    this.hostElement.dataset["isInitialising"] = "true"

    document.body.appendChild(this.hostElement)

    setTimeout(() => {
      this.hostElement.dataset["isInitialising"] = "false"
    }, 0) //to force style re show
  }

  destroy() {
    this.hostElement.dataset["isDestructing"] = "true"

    setTimeout(()=> {
      this.hostElement. parentElement.removeChild(this.hostElement)
    }, constants.TRANSITION_TIMES)
  }

}

