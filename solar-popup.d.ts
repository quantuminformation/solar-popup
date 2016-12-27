import {IComponent} from "./src/IComponent";

export = SolarPopup;

declare class SolarPopup implements IComponent{
  constructor(child: HTMLElement);
  destroy: ()=>void
  show: ()=>void
}
