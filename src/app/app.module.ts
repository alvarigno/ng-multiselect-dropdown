import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TabsModule, ButtonsModule } from 'ngx-bootstrap';
import { NgMultiSelectDropDownModule } from '../ng-multiselect-dropdown/src';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { SelectSectionComponent } from './components/select-section';
import { SampleSectionComponent } from './components/sample-section.component';
import { SingleDemoComponent } from './components/select/single-demo';
import { MultipleDemoComponent } from './components/select/multiple-demo';
import { ShCodeViewer } from '../code-viewer/code-viewer.module';

import { AppComponent } from './app.component';

// Components
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

@NgModule({
  declarations: [SelectSectionComponent, SampleSectionComponent, SingleDemoComponent, MultipleDemoComponent, AppComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    ShCodeViewer,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
