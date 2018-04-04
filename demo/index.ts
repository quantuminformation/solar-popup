import {SolarPopup} from '../src'
import { OptionalDimensions } from 'vanilla-typescript'

function showSimplePopup () {
  var child: HTMLElement = document.createElement('DIV')
  child.innerHTML =
    `<p>This is some content that can be supplied to the popup</p>
           <p>Also press the [ESC] key to close]</p>
           <button type="submit">Clicking a submit button will also close it</button>
        `
  var popup = new SolarPopup(child)
  popup.show()
}

function showBigPopup () {
  var child = document.createElement('DIV')
  // language=HTML
  child.innerHTML =
      `
    <form>
      <h3>Some amazing form</h3>
      <p>The submit won't fire until all the fields are valid</p>
      <div class="form-group">
        <input type="number" required placeholder="Project budget">
        <input type="range" required placeholder="Project range">
        <input type="date" required placeholder="Project date">
        <input type="reset">
      </div>
      <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                                class="btn btn-success" style="margin-top: 10px"></div>
      </div>
    </form>
  `

  let dim: OptionalDimensions = { "width": 400, height: 500 }
  var popup = new SolarPopup(child, dim)
  popup.show()
}

//showBigPopup()

(document.querySelector('#showSimple') as HTMLElement).onclick = (e: MouseEvent) => {
  showSimplePopup()
}
(document.querySelector('#showBig') as HTMLElement).onclick = (e: MouseEvent) => {
  showBigPopup()
}
