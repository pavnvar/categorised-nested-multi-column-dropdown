import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import { MulticatNestedDropdownComponent } from './multicat-nested-dropdown/multicat-nested-dropdown.component';






@NgModule({
  declarations: [
    AppComponent,
    MulticatNestedDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    TieredMenuModule,
    ButtonModule,
    DropdownModule,
    ListboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
