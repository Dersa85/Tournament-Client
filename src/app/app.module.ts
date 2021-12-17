import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, } from 'ngx-socket-io';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScoreboardsModule } from './modules/scoreboards/scoreboards.module';
import { TeamPointCustomControlComponent } from './modules/team-points/team-point-custom-control/team-point-custom-control.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamPointCustomControlComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(environment.socketConfig),
    BrowserAnimationsModule,
    ScoreboardsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
