import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


// import { ReversePipe } from './shared/pipes/reverse.pipe';
// import { DateFormatPipe } from '@shared/pipes/date-format.pipe'; 



// import { FibonacciPipe } from '@shared/pipes/fibonacci.pipe'; 
// import { HighlightDirective } from './shared/directives/highlight.directive';

// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    
  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }