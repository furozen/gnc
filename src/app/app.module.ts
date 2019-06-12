import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { ToolbarMenuComponent } from './news-page/toolbar-menu/toolbar-menu.component';
import { ToolbarSearchComponent } from './news-page/toolbar-search/toolbar-search.component';
import { ToolbarSettingsComponent } from './news-page/toolbar-settings/toolbar-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsPageComponent,
    ToolbarMenuComponent,
    ToolbarSearchComponent,
    ToolbarSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
