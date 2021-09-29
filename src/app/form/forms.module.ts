import { TextMaskModule } from "angular2-text-mask";
import { NgModule, Component, ElementRef, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsRoutes } from "./forms.routing";
import { CustomFormsModule } from "ngx-custom-validators";
import { NGXFormWizardModule } from "./ngx-wizard/ngx-wizard.module";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

import { FormBasicComponent } from "./form-basic/basic.component";
import { FormvalComponent } from "./form-validation/form-validation.component";
import { CheckradioComponent } from "./checkbox-radio/cr.component";
import { ForminputsComponent } from "./form-inputs/inputs.component";
import { GridsComponent } from "./input-grids/grids.component";
import { InputgroupsComponent } from "./input-groups/input-groups.component";
import { FormhorizontalComponent } from "./form-horizontal/horizontal.component";
import { FormactionsComponent } from "./form-actions/actions.component";
import { FormrowsepComponent } from "./form-row-separator/row-sep.component";
import { FormstripedComponent } from "./form-striped-row/striped.component";
import { FormdetailComponent } from "./form-detail/detail.component";
import { MultiselectComponent } from "./multiselect/multiselect.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { UnitComponent } from "./units/units.component";
import { TerritoryComponent } from "./territory/territory.component";
import { FoodParkComponent } from "./foodparks/foodparks.component";
import { ViewFoodParkComponent } from "./viewfoodparks/viewfoodparks.component";
import { HubComponent } from "./hubs/hubs.component";
import { HubmemberComponent } from "./hubmanager/hubmanager.component";
import { DriverComponent } from "./drivers/drivers.component";
import { CompanyComponent } from "./company/company.component";
import { CompanyviewComponent } from "./companyview/companyview.component";
import { ViewunitComponent } from "./viewunits/viewunits.component";
import { UnitorderComponent } from "./unitsorder/unitsorder.component";
import { FoodpckmgrorderComponent } from "./foodpckmgrorder/foodpckmgrorder.component";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";

import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { Ng5SliderModule } from "ng5-slider";
import { TagInputModule } from "ngx-chips";
import { AgmCoreModule } from "@agm/core";
import { CustompipePipe } from "./custompipe.pipe";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";

import { CustomMaterialModule } from "../custom-material/custom-material.module";
import { ManagerEditComponent } from "./manager-edit/manager-edit.component";
import { NgxMaskModule } from "ngx-mask";
import { MaterialModule } from "../menuitems/material/material.module";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { DatePipe } from "@angular/common";
import { DriverDialogComponent } from "./driver-dialog/driver-dialog.component";
import { CallbackPipe } from "./callback.pipe";
import { FoodpckmgrorderDriverComponent } from "./foodpckmgrorder/driver-tab/drivers.component";
import {FoodpckmgrorderWeeklyReconComponent } from './foodpckmgrorder/weekly-recon-tab/weekly-recon.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormsRoutes),
    Ng5SliderModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBLXlb_YUHwakS59P-aI5_xJHRwXBtA_hE", //'AIzaSyBl-UKKzfU6aOgD-aixzgRy_yJ7_BIvbms',
      libraries: ["places", "visualization", "drawing", "geometry"],
    }),
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgxDatatableModule,
    NgxMaskModule.forRoot(),
    TagInputModule,
    NGXFormWizardModule,
    NgMultiSelectDropDownModule,
    NgbModule,
    CustomMaterialModule,
    CustomFormsModule,
    ConfirmDialogModule,
    GooglePlaceModule,
    ReactiveFormsModule,
    MaterialModule,
    MatAutocompleteModule,
  ],
  declarations: [
    FormBasicComponent,
    FormvalComponent,
    CheckradioComponent,
    ConfirmDialogComponent,
    ForminputsComponent,
    DriverDialogComponent,
    GridsComponent,
    InputgroupsComponent,
    FormhorizontalComponent,
    FormactionsComponent,
    FormrowsepComponent,
    FormstripedComponent,
    FormdetailComponent,
    MultiselectComponent,
    UnitComponent,
    TerritoryComponent,
    FoodParkComponent,
    ViewFoodParkComponent,
    HubComponent,
    HubmemberComponent,
    DriverComponent,
    CompanyComponent,
    CompanyviewComponent,
    ViewunitComponent,
    UnitorderComponent,
    FoodpckmgrorderComponent,
    CustompipePipe,
    ManagerEditComponent,
    FoodpckmgrorderDriverComponent,
    FoodpckmgrorderWeeklyReconComponent
  ],
  providers: [ConfirmationService, DatePipe],
  entryComponents: [ConfirmDialogComponent, DriverDialogComponent],
})
export class FormModule {}
