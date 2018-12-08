import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { StateService } from 'src/services/state.service';
import { RestService } from 'src/services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './users-list/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    FilterPipe,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StateService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
