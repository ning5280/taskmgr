import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule} from '../shared/shared.module';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports:[ HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if(parent) {
      throw new Error('模块已经存在，不再次加载');
    }
  }
}
