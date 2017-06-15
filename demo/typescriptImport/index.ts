import SolarPopup from '../../'

import '../../src/index.pcss'


function showSimplePopup() {
  var child = document.createElement('DIV')
  child.innerHTML =
    `<p>This is some content that can be supplied to the popup</p>
           <p>Also press the [ESC] key to close]</p>
           <button type="submit">Clicking a submit button will also close it</button>
        `
  var popup = new SolarPopup(child)
  popup.show()
}

function showBigPopup() {
  var child = document.createElement('DIV')
  child.innerHTML =
    `<form>
              <h3>Some amazing form</h3>
              <p>The submit won't fire until all the fields are valid</p>
              <div class="form-group">
                <input type="number"  required placeholder="Project budget">
                <input type="range"  required placeholder="Project range">
                <input type="date"  required placeholder="Project date">
                <input type="reset">
              </div>


              <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                                        class="btn btn-success" style="margin-top: 10px"></div>
            </div>
          </form>
        `
  var popup = new SolarPopup(child)
  popup.show()
}
showBigPopup()
