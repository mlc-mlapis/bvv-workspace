import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { LibaModule } from '@bvv-workspace/liba';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    LibaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
