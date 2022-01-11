import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InmemorydataService } from './services/inmemorydata.service';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { AddComponent } from './add/add.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { TopbarComponent } from './topbar/topbar.component';
import { EditComponent } from './edit/edit.component';



@NgModule
({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddComponent,
    NavComponent,
    TopbarComponent,
    EditComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule, MatTabsModule ,
    MatFormFieldModule, 
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatCommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatMenuModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InmemorydataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
}
)
export class AppModule { }
