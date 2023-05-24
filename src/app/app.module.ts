import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import { TimelineModule } from 'primeng/timeline';
import { RiskProfileComponent } from './risk-profile/risk-profile.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'assessment', component: AssessmentComponent },
  { path: 'risk-profile', component: RiskProfileComponent },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    AssessmentComponent,
    RiskProfileComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), TimelineModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
