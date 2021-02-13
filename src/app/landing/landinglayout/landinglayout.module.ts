import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, SliderComponent, AboutComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent, SliderComponent, AboutComponent, FooterComponent
  ]
})
export class LandinglayoutModule { }
