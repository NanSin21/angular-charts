import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsComponent } from './charts/charts.component';
import { OhlcComponent } from './ohlc/ohlc.component';
import { CandlestickComponent } from './candlestick/candlestick.component';
import { RouterModule, Routes } from '@angular/router';
import { InversedAreaComponent } from './inversed-area/inversed-area.component';
import { SplineAreaComponent } from './spline-area/spline-area.component';
// import {
//   ChartAllModule,
//   RangeNavigatorAllModule,
//   StockChartAllModule,
// } from '@syncfusion/ej2-angular-charts';

const appRoutes: Routes = [
  { path: 'ohlc', component: OhlcComponent },
  { path: 'candlestick', component: CandlestickComponent },
  { path: 'inversed-area', component: InversedAreaComponent },
  { path: 'spline-area', component: SplineAreaComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    OhlcComponent,
    CandlestickComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // StockChartAllModule,
    // RangeNavigatorAllModule,
    // ChartAllModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
