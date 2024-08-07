import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: '[appDisabledButton]'
})
export class DisabledButtonDirective {
  @HostBinding('attr.disabled') disabled = true
}