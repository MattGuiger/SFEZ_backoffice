import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ProfileService } from '../services/profile.service'
import { CommonFunctionsService } from '../services/commonFunctions.service'
import { Router, ActivatedRoute } from '@angular/router'
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../form/confirm-dialog/confirm-dialog.component';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { local, values } from 'd3';
declare var $;

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
  folderCategory: any
  closeResult: string;
  addedItems = []
  removei = []
  checkBool = false;
  imageCount = 0
  selectedGoogleDriveUrl: any;
  checkImageCountFlag = false
  authEmail: any
  isChecked = 0;
  google_sheet_url: any
  checkStatus = 1;
  showPage = 1;
  checkboxFlag = false
  testGoogleURl: any
  checkGoogleDriveFlag: any
  checkFolder: any[] = []
  addedCategories = []
  showTutorialTable = true;
  showBlueColoredTable = true;
  checkSecondFlag = false
  selectedGoogleDriveFolder: any
  google_drive_url: any;
  showZerothTab = true;
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
  owncategory: string = "";

  @ViewChild(NgbTabset) set content(content: ViewContainerRef) {
    this.tabSet = content;
  };
  constructor(private toastr: ToastrService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService,
    private modalService: NgbModal,
    private _ProfileService: ProfileService, 
    private slimLoader: SlimLoadingBarService, 
    private _CommonFunctionsService: CommonFunctionsService, 
    private _Router: Router) {

  }
 
  ngAfterViewInit() {
    if (this.googleEmail) {
      this.tabSet['activeId'] = 'tb2'
    }
  }
  removeITEMS: any = []
  onChange(event, item) {
    if (event.checked == true) {
      if (this.addedCategories.indexOf(item) == -1)
        this.addedCategories.push(item)
    }
  }

  REMOVEITEM() {
    this.removei.map((item, i) => {
      this.removeItemFromArray(item)

    })
  }
  addItems() {
    this.addedItems = this.addedCategories
  }

  onChange1(event, item) {
    if (event.checked) {
      this.removei.push(item)
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
    this.getgoogleauthntication();
    this.getAllCategories();
    this.getAllGoogleSheetDetails()
    this.route.params.subscribe(data => {
      this.googleEmail = data.email
    })
    this.getFolderbyEmail()
  }
  onSelect(event) {
    const formData = new FormData();
    formData.append('file', event.addedFiles[0]);
  }

  getFolderbyEmail(isTabchange: boolean = false) {
    if (this.googleEmail) {
      const data = {
        email: this.googleEmail
      }
      this.ngxService.start();
      this._ProfileService.getFoldersCreatedInDrive(data).subscribe(res => {
        console.log('getFoldersCreatedInDrive', res)
        this.drivefolders = res.data;
        this.isChecked = 2;
        const tabCount = isTabchange ? 1 : 0;
        this.demo1TabIndex = tabCount;
        // if (this.showFirstTab) {
        //   const tabCount = 2;
        //   this.demo1TabIndex = tabCount;
        // }
        this.fetchFolder()
        this.showBlueColoredTable = false;
        this.showZerothTab = false;
        this.showFirstTab = true;
        this.showSecondTab = true;
        this.showThirdTab = true;
        this.showFourthTab = true;
        this.showFifthTab = true;
        this.ngxService.stop();
      })
    }
  }
  fetchFolder() {
    this.drivefolders.filter((value) => {
      this.checkFolder.push(value.foldername)
    })
  }
  testFetchFolder(category) {
    if (this.checkFolder.indexOf(category) !== -1) {
      return true
    } else {
      return false
    }
  }

  formData = new FormData();
  file: any;
  category_file: any;
  /**
   * 
   * @param event 
   * @param folderId 
   * @param category 
   */
  onFileSelect(event,fileName) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.file = file;
      fileName.user_id = file.name;
      console.log(fileName,file);
    }
  }

  /**
   * 
   * @param event 
   * @param folderId 
   * @param category 
   */
  onCategoryImageSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.category_file = file;
    }
  }

  menuItemList = [];
  tempMenuItem: any = '';
  /**
   * 
   * @param index 
   */
  submitSheetData(folderId, category,folder) {
    let menu_name = $('#menu_name' + folderId).val().toString();
    let price = $('#price' + folderId).val().toString();
    let category_description = $('#category_description' + folderId).val().toString();

    if (menu_name !== "" && price !== "" && category_description !== "") {
      let formData1 = new FormData();
      formData1.append('file', this.file);
      formData1.append('folderId', folderId);
      formData1.append('email', this.googleEmail);
      formData1.append('category', category);
      formData1.append('menu_name', menu_name);
      formData1.append('price', price);
      formData1.append('category_description', category_description);
      $('#menu_name' + folderId).val("");
      $('#price' + folderId).val("");
      folder.user_id = "";
      $('#category_description' + folderId).val("");
      const reader = new FileReader();
      reader.onloadend = () => {
        this.tempMenuItem = {
          folderId: folderId,
          menu_name: menu_name,
          price: price,
          img_url: reader.result,
          description: category_description
        };
      };
      reader.readAsDataURL(this.file);
      this.uploadImageToDrive(formData1, folderId, category);
    } else {
      this.toastr.error("Please fill all required fields")
    }
  }


  deleteFolder(index) {
    this.drivefolders.splice(index, 1)
  }
  returnZero() {
    return 0;
  }
  onFileSelect1(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      // formData.append('folderId',folderId);
      // formData.append('email',this.googleEmail);
      // formData.append('category',category);
      this.user = this._CommonFunctionsService.checkUser().user;
      this._ProfileService.uploadaddons(formData, this.user.company_id).subscribe(res => {
        this.toastr.success('Upload Menu successfully');
      });;
    }
  }
  uploadImageToDrive(formData, folderId, category) {
    this.user = this._CommonFunctionsService.checkUser().user;
    this.ngxService.start();
    this._ProfileService.uploadImageTodrive(this.user.company_id, formData).subscribe(res => {
      this.ngxService.stop();
      this.authentication_url = res.data;
      this.google_drive_url = res.data.drive_url;

      (this.tempMenuItem !== "") ? this.menuItemList.push(this.tempMenuItem) : "";
      this.tempMenuItem = "";
      this.toastr.success('Upload successfull to drive');
    }, error => {
      this.ngxService.stop();
      this.toastr.error('Failed to upload, please try again later')
    })
    this.getAllGoogleSheetDetails()
  }

  categoryList: any[] = [];
  selectedCategoryList: any[] = [];
  isCheckAllCategory = true;

  getMenuItem(category) {
    let index = this.selectedCategoryList.indexOf(category.id);
    if (index != -1) {
      this.selectedCategoryList.splice(index, 1);
    } else {
      this.selectedCategoryList.push(category.id);
    }
    this.filterProductList();
    this.isCheckAllCategory = this.categoryList.filter((item) => item.active).length == this.selectedCategoryList.length ? true : false;
  }

  toggleCheckAll() {
    if (this.isCheckAllCategory) {
      this.isCheckAllCategory = false;
      this.selectedCategoryList = [];
      this.filterProductList();
    } else {
      this.isCheckAllCategory = true;
      this.selectedCategoryList = this.categoryList.map((cat) => cat.id);
      this.filterProductList();
    }
  }

  filterProductList() {
    this.productList.forEach(item => {
      if (this.selectedCategoryList.indexOf(item.category) == -1) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }

  getAllProductList() {
    this.processing = true;
    this.user = this._CommonFunctionsService.checkUser().user;
    if (this.user.company_id) {
      this._ProfileService.getCategory(this.user.company_id).subscribe((res: any) => {
        this.categoryList = res.data;
        this.categoryList.forEach((item) => {
          this.selectedCategoryList.push(item.id);
        })
      });
    }
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
      this.checkBool = true;
      this.isChecked += 1
      this.authentication_url = res.data
      //this.toastr.success('Google account verified please move to step 2')
    });
  }
  onClickGetStarted() {
    this.showZerothTab = true;
    this.showTutorialTable = false;
  }
  googlesheetUrl(google_sheet_url) {
    window.open(google_sheet_url)
  }
  googleDriveUrl(google_drive_url) {
    window.open(google_drive_url)
  }
  getAllGoogleSheetDetails() {
    this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.getAllGoogleSheetDetails(this.date).subscribe((res: any) => {
      this.googleSheet = res.data;
      this.imageCount = res.data.length;
      this.checkImageCountFlag = true;
    }, error => {
      //  
    })
  }

  createFolderinDrive() {
    const data = {
      folder: this.addedItems,
      email: this.googleEmail,
      // user_id: '11744'
      user_id: ''
    }

    this._ProfileService.createfolderInGoogleDrive(data).subscribe(res => {
      //const tabCount = 2;
      this.demo1TabIndex = 1;
      this.toastr.success('Folders created successfully');
      this.getFolderbyEmail(true)
    })
  }
  onClick(event) {
    event.preventDefault();
    this.ref._checked = !this.ref._checked;
  }
  getCompanyProfile() {
    this.user = this._CommonFunctionsService.checkUser().user;
    if (this.user.unit_id) {

      this._ProfileService.getCompanyprofile(this.user.unit_id).subscribe((res: any) => {
        this.profile = res.data;
        this.google_sheet_url = res.data.google_sheet_url
      })

    } else {
      this.user.unit_id = localStorage.getItem("unit_id")
      this._ProfileService.getCompanyprofile(this.user.unit_id).subscribe((res: any) => {
        this.profile = res.data;
        this.google_sheet_url = res.data.google_sheet_url
      }, error => {
        //  
      })
    }
  }
  getProductList(event) {
    if (event.activeId === 'tb2') {
      this.getAllProductList()
    }
  }
  googleDrive_url(event, folderName, contentGoogleDriveUrl, index) {
    this.checkGoogleDriveFlag = index
    this.selectedGoogleDriveFolder = folderName
    this.modalService.open(contentGoogleDriveUrl, { ariaLabelledBy: 'modal-basic-title', windowClass: 'linkModal', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  uploadGoogleMenuSheet() {
    this.ngxService.start();
    this._ProfileService.uploadGoogleMenuSheet().subscribe((res: any) => {
      this.ngxService.stop();
      if (res.success) {
        this.toastr.success("Sync successful");
        // this._ProfileService.uploadGoogleMenuSheet().subscribe((res: any) => {
        this.getAllProductList();
        // })
      }
    }, error => {
      this.toastr.error('Sync failed, Please try again later')
    })
  }
  getAllCategories() {
    this._ProfileService.getAllCategories().subscribe(res => {
      this.categories = res.data
    })
  }
  openProduct(item) {
    this.getAllProductList();
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
      if (dialogResult) {
        this._ProfileService.getGoogleAuthenication().subscribe(res => {
          this.authentication_url = res.data
        })
      }
    })
  }

  /**
   * Add own category
   */
  addOwnCategory() {
    if (this.owncategory !== "") {
      this.ngxService.start();
      this._ProfileService.addOwnCategory({ category: this.owncategory }).subscribe((res) => {
        this.toastr.success("Category successfully added");
        this.categories.push(res.data[0]);
        this.owncategory = "";
        this.ngxService.stop();
      }, err => {
        this.ngxService.stop();
        this.toastr.error(err.error);
      })
    } else {
      this.toastr.error("Please insert category name.");
    }
  }
}

