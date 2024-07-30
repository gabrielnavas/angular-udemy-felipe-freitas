import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent
  ],
  exports: [
    ButtonComponent,
    CardComponent
  ],
  imports: [],
  providers: [],
})
export class ComponentsModule { }