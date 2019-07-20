<img src="https://codeship.com/projects/d17a6c50-f8fa-0134-9e36-76184fa5b855/status?branch=master"/>

# Solar-popup

Ultralight, ultra fast, ultra smooth Vanilla TypeScript popup. Framework independent but can be used with any framework.

12Kb minified

## installation

You can install into your application by running
`npm i solar-popup`

You can then use it like so:

```js
import SolarPopup from "solar-popup"

function showSimplePopup() {
  var child = document.createElement("DIV")
  child.innerHTML = `<p>This is some content that can be supplied to the popup</p>
           <p>Also press the [ESC] key to close]</p>
           <button type="submit">Clicking a submit button will also close it</button>
        `
  var popup = new SolarPopup(child)
  popup.show()
}

showSimplePopup()
```

You can also import the default styles solar-popup.css which will style it for you.

## Why

I made this popup because I had a requirement for a slide-in and slide-out popup with smooth CSS transitions, including a fade-in and fade-out
modal background. I also wanted hooks for once the popup had left the screen and being able to inject arbitrary html inside it.

## Features

- It will close on ESC press key, clicking on the close x button anchor or submit events from children
- Adds a modal background that fades in/our with CSS3 transitions
- Popup itself slides in/out with CSS3 transitions

## Demo

[Live Demo](https://quantumjs.github.io/solar-popup/demo/dist/)

## Video demo

Feel free to watch the video explanation of how it works here:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=lVVPWdUCHLc
" target="_blank"><img src="http://img.youtube.com/vi/lVVPWdUCHLc/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

# Testing

```
npm i
npm test
```
