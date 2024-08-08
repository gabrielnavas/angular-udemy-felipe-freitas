import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  // @HostBinding('style') attrStyle = 'background-color: magenta; color: white;';
  
  // @HostBinding('style') propStyle = 'background-color: magenta; color: white;';
  
  // @HostBinding('style.backgroundColor') bgColor = 'magenta';
  // @HostBinding('style.color') colorText = 'white';

  // @HostBinding('style.width.px') widthPx = '100';
  // @HostBinding('style.padding') padding = '5px 10px';
  // @HostBinding('style.border') border = '1px solid red';
  // @HostBinding('style.fontSize.px') fontWeight = '10';

  // recommended
  @HostBinding('style') objStyle = {
    backgroundColor: 'magenta',
    color: 'white',
  };
}