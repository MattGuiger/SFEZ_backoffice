import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ProfileService } from '../services/profile.service'
import { CommonFunctionsService } from '../services/commonFunctions.service'
import { Router, ActivatedRoute } from '@angular/router'
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../form/confirm-dialog/confirm-dialog.component';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { local } from 'd3';

@Component({
  templateUrl: 'menuitems.component.html',
  styleUrls: ['./menuitems.component.css']
})
export class MenuitemsComponent implements OnInit {
  user: any;
  productList: any[] = [];
  processing: boolean = false;
  googleSheet: any;
  profile: any;
  date = "";
  arr: any;
  counter = 0;
  categories: any;
  addedItems = []
  checkBool = false;
  isChecked = 0;
  google_sheet_url: any
  checkStatus = 1;
  showPage = 1;
  addedCategories = []
  showTutorialTable = true;
  showBlueColoredTable = true;
  google_drive_url: any;
  showZerothTab = false;
  showFirstTab = false;
  showSecondTab = false;
  showThirdTab = false;
  showFourthTab = false;
  showFifthTab = false;
  googleEmail: any;
  @ViewChild('ref') ref;
  authentication_url: any;
  drivefolders: any;
  public demo1TabIndex = 0;
  private tabSet: ViewContainerRef;

  @ViewChild(NgbTabset) set content(content: ViewContainerRef) {
    this.tabSet = content;
  };
  constructor(private toastr: ToastrService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private _ProfileService: ProfileService, private slimLoader: SlimLoadingBarService, private _CommonFunctionsService: CommonFunctionsService, private _Router: Router) {

  }
  // onChange(event, item) {
  //   // can't event.preventDefault();
  //   console.log('onChange event.checked ' + event.checked, item)
  //   if (event.checked) {
  //     this.addedCategories.push(item)
  //   } else {
  //     this.removeItemFromArray(item)
  //   }
  // }
  onChange(event, item) {
    // can't event.preventDefault();
    console.log('onChange event.checked ' + event.checked, item)
    if (event.checked == true) {
      console.log("event.checked " + this.counter)
      if (this.counter < 7) {
        this.counter++
        console.log("counter:" + this.counter)
        this.addedCategories.push(item)
      }else{ 
        event.checked = false;
        console.log("else block:" +  event.checked)
      }
    }
    else {
      console.log("event")
      this.removeItemFromArray(item)
    }
  }
  ngAfterViewInit() {
    console.log(this.tabSet['activeId'], 'ppppppp');
    if (this.googleEmail) {
      this.tabSet['activeId'] = 'tb2'
    }
  }
  addItems() {
    console.log('addedItems', this.addedCategories)
    this.addedItems = this.addedCategories
  }
  onChange1(event, item) {
    // can't event.preventDefault();
    console.log('onChange event.checked ' + event.checked, item)
    if (event.checked) {
      this.removeItemFromArray(item)
    }
  }
  removeCategories() {
    this.addedItems = this.addedCategories
  }
  removeItemFromArray(item) {
    const index = this.addedCategories.indexOf(item);
    if (index > -1) {
      this.addedCategories.splice(index, 1);
    }
  }

  ngOnInit() {
    this.getAllProductList();
    this.getCompanyProfile();
    this.getgoogleauthntication()
    this.getAllCategories();
    this.route.params.subscribe(data => {
      console.log('emailllll', data)
      this.googleEmail = data.email
      if (data.email) {
        console.log('emailllll4444444444444444')
        // const tabCount = 1;
        // this.demo1TabIndex = tabCount;
      }
    })
    this.getFolderbyEmail()
  } 
  onSelect(event) {
    console.log(event);
    // this.feathuredfiles.push(...event.addedFiles);
    const formData = new FormData();
    formData.append('file', event.addedFiles[0]);
    // this.uploadFeaturePhoto(formData);
  }
  getFolderbyEmail() {
    if (this.googleEmail) {
      const data = {
        email: this.googleEmail
      }
      this._ProfileService.getFoldersCreatedInDrive(data).subscribe(res => {
        console.log('getFoldersCreatedInDrive', res)
        this.drivefolders = res.data;
        this.isChecked = 2;
        const tabCount = 1;
        this.demo1TabIndex = tabCount;
        this.showBlueColoredTable = false;
        this.showZerothTab = true;
        this.showFirstTab = true;
        this.showSecondTab = true;
        this.showThirdTab = true;
        this.showFourthTab = true;
        this.showFifthTab = true;
      })
    }
  }
  onFileSelect(event, folderId, category) {
    if (event.target.files.length > 0) {
      console.log(event.target.files[0])
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folderId', folderId);
      formData.append('email', this.googleEmail);
      formData.append('category', category);
      this.uploadImageToDrive(formData, folderId, category);
    }
  }
  onFileSelect1(event) {
    if (event.target.files.length > 0) {
      console.log(event.target.files[0])
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      // formData.append('folderId',folderId);
      // formData.append('email',this.googleEmail);
      // formData.append('category',category);
      this.user = this._CommonFunctionsService.checkUser().user;
      this._ProfileService.uploadaddons(formData, this.user.company_id).subscribe(res => {
        console.log('responese', res)
        this.toastr.success('Upload Menu successfully');
      });;
    }
  }
  uploadImageToDrive(formData, folderId, category) {
    this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.uploadImageTodrive(this.user.company_id, formData).subscribe(res => {
      console.log('googgleData3', res.data)
      this.authentication_url = res.data
      this.google_drive_url = res.data.drive_url
      this.toastr.success('Upload successfull to drive');
    }, error => {
      this.toastr.error('Failed to upload, please try again later')
    }) 
    console.log("uploadImageToDrive123")
    // this.toastr.success('Upload successfull to drive');
    this.getAllGoogleSheetDetails()
  }
  getAllProductList() {
    this.processing = true;
    this.user = this._CommonFunctionsService.checkUser().user;

    if (this.user.unit_id) {
      this._ProfileService.getAllProductList(this.user.unit_id).subscribe((res: any) => {
        this.productList = res.data;
        this.processing = false;
      }, error => {
        //debugger
      })
    } else {
      this.user.unit_id = localStorage.getItem("unit_id")
      this._ProfileService.getAllProductList(this.user.unit_id).subscribe((res: any) => {
        this.productList = res.data;
        this.processing = false;
      }, error => {
        //debugger
      })
    }
  }
  getgoogleauthntication() {
    this._ProfileService.getGoogleAuthenication().subscribe(res => {
      console.log('googgleData2', res.data)
      console.log('1, ' + this.checkBool)
      this.checkBool = true;
      this.isChecked += 1
      console.log("getgoogleauthntication: " + this.isChecked)
      this.authentication_url = res.data
      //this.toastr.success('Google account verified please move to step 2')
    });
  }
  onClickGetStarted() {
    this.showZerothTab = true;
    this.showTutorialTable = false;
  }
  googlesheetUrl(google_sheet_url){

    window.open(google_sheet_url)
  }
  getAllGoogleSheetDetails() {
    this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.getAllGoogleSheetDetails(this.date).subscribe((res: any) => {
      this.googleSheet = res.data;
      console.log('Google Sheet' + this.googleSheet)
    }, error => {
      //  
    })
  }
  //  getgoogleauthntication(){
  //  let googgleData = this._ProfileService.getGoogleAuthenication();
  // console.log('googgleData',googgleData)
  // }
  // onClick(event) {
  //   event.preventDefault();
  // //  console.log('onClick event.checked ' + event.checked);
  // // console.log('onClick event.target.checked '+event.target.checked);
  //   console.log('onClick this.ref._checked '+ this.ref._checked);

  //   }
  createFolderinDrive() {
    const data = {
      folder: this.addedItems,
      email: this.googleEmail,
      user_id: '11744'
    }
    console.log('folderss data', data)

    this._ProfileService.createfolderInGoogleDrive(data).subscribe(res => {
      this.toastr.success('Folders created successfully');
      this.getFolderbyEmail()
    })
  }
  onClick(event) {
    event.preventDefault();
    //  console.log('onClick event.checked ' + event.checked);
    // console.log('onClick event.target.checked '+event.target.checked);
    console.log('onClick this.ref._checked ' + this.ref._checked);

    this.ref._checked = !this.ref._checked;
  }
  getCompanyProfile() {
    this.user = this._CommonFunctionsService.checkUser().user;
    if (this.user.unit_id) {

      this._ProfileService.getCompanyprofile(this.user.unit_id).subscribe((res: any) => {
        this.profile = res.data;
        this.google_sheet_url = res.data.google_sheet_url
        console.log(this.profile)
      }, error => {
        //  
      })

    } else {
      this.user.unit_id = localStorage.getItem("unit_id")
      this._ProfileService.getCompanyprofile(this.user.unit_id).subscribe((res: any) => {
        this.profile = res.data;
        this.google_sheet_url = res.data.google_sheet_url
        console.log(this.profile)
      }, error => {
        //  
      })
    }
  }
  getProductList (event) {
    console.log("getAllProductList:")
    if(event.activeId === 'tb2'){
      this.getAllProductList()
    }
  }
  uploadGoogleMenuSheet() {
    this._ProfileService.uploadGoogleMenuSheet().subscribe((res: any) => {
      this.getAllProductList();
      if (res.error[0].status == 409 || res.error) {
        this._ProfileService.uploadGoogleMenuSheet().subscribe((res: any) => {
          this.toastr.success(res.success);
          this.getAllProductList();
        })
      } 
    }, error => {
      this.toastr.error('Failed to upload, please try again later')
    })
  }
  getAllCategories() {
    this._ProfileService.getAllCategories().subscribe(res => {
      this.categories = res.data
    })
  }
  openProduct(item) {
    this.getAllProductList();
    console.log("menuItems")
    this._Router.navigateByUrl('menuitems/view/' + item.category + '/' + item.id)
  }

  getDescription(description) {
    return description.length > 25 ? description.substr(0, 25) + "..." : description
  }
  getTitle(description) {
    return description.length > 10 ? description.substr(0, 10) + "..." : description
  }
  getgmailuser() {
    const message = `Please get authenticated with gmail account`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "500px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      // this.result = dialogResult;
      console.log('dialogResultdialogResult', dialogResult);
      if (dialogResult) {
        this._ProfileService.getGoogleAuthenication().subscribe(res => {
          this.authentication_url = res.data
          console.log('getgmailuser123')
        })
      }
    })
  }

}

