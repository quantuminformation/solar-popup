import { ModalBackground } from "./ModalBackground";
import { IComponent, OptionalDimensions } from "vanilla-typescript";
import "./SolarPopup.pcss";
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
export declare class SolarPopup implements IComponent {
    destroyBoundWithThis: any;
    modalBackground: ModalBackground;
    hostElement: HTMLElement;
    constructor(child: HTMLElement, optionalDimensions?: OptionalDimensions);
    /**
     * Shows
     * @param {Element} child we need to keep the reference to keep custom functionality in the child
     */
    show(): Promise<void>;
    addListeners(): void;
    destroy(): Promise<any>;
}
