import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";  
//import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { AccordionModule } from 'primeng/components/accordion/accordion';  
import {OrderListModule} from 'primeng/orderlist';  
@NgModule({  
  declarations: [  
    AppComponent  
  ],  
  imports: [  
    BrowserModule,  
    //AppRoutingModule,
	BrowserAnimationsModule,AccordionModule,OrderListModule  
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { } 