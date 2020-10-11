import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CostElementComponent } from './shared/components/cost-element/cost-element.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MenuElementComponent } from './shared/components/menu-element/menu-element.component';
import { CallPopupComponent } from './shared/components/call-popup/call-popup.component';
import { OrderPopupComponent } from './shared/components/order-popup/order-popup.component';
import { ReviewSectionComponent } from './review-section/review-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { MethodsSectionComponent } from './methods-section/methods-section.component';
import { WhynowSectionComponent } from './whynow-section/whynow-section.component';
import { WhereSectionComponent } from './where-section/where-section.component';
import { SendSectionComponent } from './send-section/send-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CostElementComponent,
    FilterPipe,
    MenuElementComponent,
    CallPopupComponent,
    OrderPopupComponent,
    ReviewSectionComponent,
    AboutSectionComponent,
    MethodsSectionComponent,
    WhynowSectionComponent,
    WhereSectionComponent,
    SendSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
