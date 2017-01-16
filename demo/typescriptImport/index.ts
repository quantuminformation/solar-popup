import SolarPopup from 'solar-popup'

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

showSimplePopup()
