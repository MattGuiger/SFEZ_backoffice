import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { ProfileService } from "../services/profile.service";
import { CommonFunctionsService } from "../services/commonFunctions.service";
import { Router, ActivatedRoute } from "@angular/router";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ToastrService } from "ngx-toastr";
import {
  ConfirmDialogComponent,
  ConfirmDialogModel,
} from "../form/confirm-dialog/confirm-dialog.component";
import { NgbTabset } from "@ng-bootstrap/ng-bootstrap";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { MatDialog } from "@angular/material/dialog";
import { local, values } from "d3";
import { data } from "jquery";
import { map } from "rxjs/operators";
import { NgxBootstrapConfirmService } from "ngx-bootstrap-confirm";
import { Observable } from "rxjs";

declare var $;

@Component({
  templateUrl: "menuitems.component.html",
  styleUrls: ["./menuitems.component.css"],
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
  folderCategory: any;
  closeResult: string;
  addedItems = [];
  removei = [];
  checkBool = false;
  imageCount = 0;
  selectedGoogleDriveUrl: any;
  checkImageCountFlag = false;
  authEmail: any;
  isChecked = 0;
  google_sheet_url: any;
  checkStatus = 1;
  showPage = 1;
  checkboxFlag = false;
  testGoogleURl: any;
  checkGoogleDriveFlag: any;
  checkFolder: any[] = [];
  addedCategories = [];
  showTutorialTable = true;
  showBlueColoredTable = true;
  checkSecondFlag = false;
  selectedGoogleDriveFolder: any;
  google_drive_url: any;
  showZerothTab = true;
  showFirstTab = false;
  showSecondTab = false;
  showThirdTab = false;
  showFourthTab = false;
  showFifthTab = false;
  googleEmail: any;
  @ViewChild("ref") ref;
  authentication_url: any;
  drivefolders: any;
  checkingId = "tb2";
  public demo1TabIndex = 0;
  private tabSet: ViewContainerRef;
  owncategory: string = "";
  fileget: any;
  selectedcat: any;
  finalCartdata: any;

  @ViewChild(NgbTabset) set content(content: ViewContainerRef) {
    this.tabSet = content;
  }
  constructor(
    private toastr: ToastrService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService,
    private modalService: NgbModal,
    private _ProfileService: ProfileService,
    private slimLoader: SlimLoadingBarService,
    private _CommonFunctionsService: CommonFunctionsService,
    private _Router: Router,
    private ngxBootstrapConfirmService: NgxBootstrapConfirmService
  ) {}

  ngAfterViewInit() {
    if (this.googleEmail) {
      this.checkingId = "tb2";
    }
  }

  removeITEMS: any = [];
  onChange(event, item) {
    if (event.checked == true) {
      if (this.addedCategories.indexOf(item) == -1)
        this.addedCategories.push(item);
    } else {
      this.addedCategories.splice(this.addedCategories.indexOf(item), 1);
    }
  }

  getGoogleUser(id) {
    return this._ProfileService.getGoogleUser(id);
  }
  REMOVEITEM() {
    this.removei.forEach((element) => {
      this.removeItemFromArray(element);
    });
    this.removei = [];
  }
  addItems() {
    this.addedItems = JSON.parse(JSON.stringify(this.addedCategories));
  }

  onChange1(event, item) {
    if (event.checked) {
      this.removei.push(item);
    }
  }
  removeCategories() {
    this.addedItems = this.addedCategories;
  }
  removeItemFromArray(item) {
    const index = this.addedCategories.indexOf(item);
    if (index > -1) {
      this.addedCategories.splice(index, 1);
    }

    let itemCat = this.categories;
    itemCat.forEach((element) => {
      if (element.category == item) {
        element.status = false;
      }
    });

    this.categories = itemCat;
    this.addItems();
  }
  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem("user")).user.id, "hIII");
    this.user = this._CommonFunctionsService.checkUser().user;
    this.getCompanyProfile();
    this.getgoogleauthntication();
    this.getAllCategories();

    this.getGoogleUser(this.user.id).subscribe(
      (data) => {
        let res = data["data"];
        if (res && res[0]["email"]) {
          this.googleEmail = res[0]["email"];
          this.initCalledAfterEmail();
        }
      },
      (er) => {
        console.log(er);
      }
    );

    this.route.params.subscribe((data) => {
      if (data.email) {
        this.googleEmail = data.email;
        this._ProfileService
          .addGoogleUser({ user_id: this.user.id, email: this.googleEmail })
          .subscribe((data) => {
            this.initCalledAfterEmail();
          });
      }
      if (data.activeTab) {
        this.checkingId = data.activeTab;
      }
    });
  }

  initCalledAfterEmail() {
    this.getAllGoogleSheetDetails();
    this.getFolderbyEmail();
  }

  onSelect(event) {
    const formData = new FormData();
    formData.append("file", event.addedFiles[0]);
  }

  getFolderbyEmail(isTabchange: boolean = false) {
    if (this.googleEmail) {
      const data = {
        email: this.googleEmail,
        user_id: this.user.id,
      };
      this.ngxService.start();
      this._ProfileService
        .getCategory(this.user.company_id)
        .subscribe((res) => {
          this.categoryList = res.data;
          this._ProfileService
            .getFoldersCreatedInDrive(data)
            .subscribe((res) => {
              this.drivefolders = res.data;
              this.categoryList.forEach((activeCat) => {
                this.drivefolders.forEach((driveFolder) => {
                  if (activeCat.name == driveFolder.foldername) {
                    driveFolder.catdescription = activeCat.description;
                    driveFolder.category_file = activeCat.image;
                    driveFolder.active_category_id = activeCat.id;
                  }
                });
              });
              this.isChecked = 2;
              const tabCount = isTabchange ? 1 : 0;
              this.demo1TabIndex = tabCount;
              this.fetchFolder();
              this.showBlueColoredTable = false;
              this.showZerothTab = false;
              this.showFirstTab = true;
              this.showSecondTab = true;
              this.showThirdTab = true;
              this.showFourthTab = true;
              this.showFifthTab = true;
              this.ngxService.stop();
            });
        });
    }
  }
  fetchFolder() {
    this.drivefolders.filter((value) => {
      this.checkFolder.push(value.foldername);
    });
  }
  testFetchFolder(category) {
    if (this.checkFolder.indexOf(category) !== -1) {
      return true;
    } else {
      return false;
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
  onFileSelect(event, folder, type) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      folder[type] = file;
    }
  }

  onFileSelectget(event, folder, type) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileget = file;
      folder[type] = file;
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
  tempMenuItem: any = "";
  /**
   *
   * @param index
   */
  submitSheetData(folder) {
    if (
      !folder.menuItemName ||
      !folder.menuItemDescription ||
      !folder.menuItemPrice ||
      !folder.menu_image
    ) {
      this.toastr.error("Please fill all required fields");
    } else {
      let formData1 = new FormData();
      if (folder.menu_image) {
        formData1.append("file", folder.menu_image);
      }

      // if(folder.category_image){
      //   formData1.append("catimage", folder.category_image);
      // }

      formData1.append("folderId", folder.folderid);
      formData1.append("email", this.googleEmail);
      formData1.append("category", folder.foldername);
      formData1.append("menu_name", folder.menuItemName);
      formData1.append("price", folder.menuItemPrice);
      //formData1.append("catdescription", folder.catdescription);
      formData1.append("menu_description", folder.menuItemDescription);
      this.uploadImageToDrive(formData1, folder);
    }
  }

  /**
   *
   * @param index
   */
  submitCategoryData(folder) {
    if (
      !folder.catdescription ||
      (!folder.category_image && !folder.category_file)
    ) {
      this.toastr.error("Please fill all required fields");
    } else {
      let formData1 = new FormData();

      if (folder.category_image) {
        formData1.append("category_file", folder.category_image);
      }

      formData1.append("title", folder.foldername);
      formData1.append("description", folder.catdescription);
      this.uploadCategoryData(formData1, folder);
    }
  }

  deleteFolder(index) {
    this.drivefolders.splice(index, 1);
  }
  returnZero() {
    return 0;
  }
  onFileSelect1(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      // formData.append('folderId',folderId);
      // formData.append('email',this.googleEmail);
      // formData.append('category',category);
      this.user = this._CommonFunctionsService.checkUser().user;
      this._ProfileService
        .uploadaddons(formData, this.user.company_id)
        .subscribe((res) => {
          this.toastr.success("Upload Menu successfully");
        });
    }
  }

  uploadCategoryData(formData, folder) {
    this.user = this._CommonFunctionsService.checkUser().user;
    this.ngxService.start();
    let apicall = folder.active_category_id
      ? this.updateCategory(folder.active_category_id, formData)
      : this.addCategory(formData);

    apicall.subscribe(
      (res) => {
        this.ngxService.stop();
        //folder.catdescription = "";
        //folder.menuItemDescription = "";
        this.toastr.success("Upload Category successfully");
        folder.active_category_id = res.data.id;
        folder.category_file = res.data.image;
        //this.getAllGoogleSheetDetails();
      },
      (error) => {
        this.ngxService.stop();
        this.toastr.error("Failed to upload, please try again later");
      }
    );
  }

  addCategory(formData) {
    return this._ProfileService.uploadCategoryDetail(
      this.user.company_id,
      formData
    );
  }

  removeCategoryMoltin(categoryId) {
    return this._ProfileService.removeCategoryMol(
      this.user.company_id,
      categoryId
    );
  }

  updateCategory(categoryId, formData) {
    return this._ProfileService.updateCategoryDetail(
      this.user.company_id,
      categoryId,
      formData
    );
  }

  uploadImageToDrive(formData, folder) {
    this.user = this._CommonFunctionsService.checkUser().user;
    this.ngxService.start();
    return this._ProfileService
      .uploadImageTodrive(this.user.company_id, formData)
      .subscribe(
        (res) => {
          this.ngxService.stop();
          this.authentication_url = res.data;
          console.log(res.data, "uploadimages");

          this.google_drive_url = res.data.drive_url;

          this.tempMenuItem !== ""
            ? this.menuItemList.push(this.tempMenuItem)
            : "";
          this.tempMenuItem = "";
          this.toastr.success("Upload successfull to drive");
          folder.menuItemName = "";
          folder.menuItemPrice = "";
          folder.menuItemDescription = "";
        },
        (error) => {
          this.ngxService.stop();
          this.toastr.error("Failed to upload, please try again later");
        }
      );
    this.getAllGoogleSheetDetails();
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
    this.isCheckAllCategory =
      this.categoryList.filter((item) => item.active).length ==
      this.selectedCategoryList.length
        ? true
        : false;
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
    this.productList.forEach((item) => {
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
      this._ProfileService
        .getCategory(this.user.company_id)
        .subscribe((res: any) => {
          this.categoryList = res.data;
          this.categoryList.forEach((item) => {
            this.selectedCategoryList.push(item.id);
          });
        });
    }
    if (this.user.unit_id) {
      this._ProfileService.getAllProductList(this.user.company_id).subscribe(
        (res: any) => {
          this.productList = res.data;
          this.processing = false;
          this.filterProductList();
        },
        (error) => {
          //
        }
      );
    } else {
      this.user.unit_id = localStorage.getItem("unit_id");
      this._ProfileService.getAllProductList(this.user.company_id).subscribe(
        (res: any) => {
          this.productList = res.data;
          this.processing = false;
        },
        (error) => {
          //
        }
      );
    }
  }
  getgoogleauthntication() {
    this._ProfileService.getGoogleAuthenication().subscribe((res) => {
      this.checkBool = true;
      this.isChecked += 1;
      this.authentication_url = res.data;
      console.log(this.authentication_url, "authenticateurl");

      //this.toastr.success('Google account verified please move to step 2')
    });
  }
  onClickGetStarted() {
    this.showZerothTab = true;
    this.showTutorialTable = false;
  }
  googlesheetUrl(google_sheet_url) {
    window.open(google_sheet_url);
  }
  googleDriveUrl(google_drive_url) {
    window.open(google_drive_url);
  }
  getAllGoogleSheetDetails() {
    this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService
      .getAllGoogleSheetDetails({
        user_id: this.user.id,
        email: this.googleEmail,
      })
      .subscribe(
        (res: any) => {
          this.googleSheet = res.data;
          this.imageCount = res.data.length;
          this.checkImageCountFlag = true;
        },
        (error) => {
          //
        }
      );
  }

  createFolderinDrive() {
    let options = {
      title:
        "This will delete unselected categories and create new. Are you sure want to do ?",
      confirmLabel: "Okay",
      declineLabel: "Cancel",
    };
    this.ngxBootstrapConfirmService.confirm(options).then((res: boolean) => {
      if (res) {
        this.syncCategoryInMoltin().subscribe(() => {
          const data = {
            folder: this.addedItems,
            email: this.googleEmail,
            // user_id: '11744'
            user_id: JSON.parse(localStorage.getItem("user")).user.id,
          };
          this._ProfileService
            .createfolderInGoogleDrive(data)
            .subscribe((res) => {
              //const tabCount = 2;
              this.demo1TabIndex = 1;
              this.toastr.success("Folders created successfully");
              this.getFolderbyEmail(true);
            });
        });
      } else {
      }
    });
  }

  syncCategoryInMoltin() {
    let observableBatch = [];
    let addCategoryList = [];
    let removeCategoryList = [];
    this.addedItems.forEach((cat) => {
      let catFound = false;
      this.categoryList.forEach((catL) => {
        if (cat == catL.name) {
          catFound = true;
        }
      });
      if (!catFound) {
        addCategoryList.push(cat);
      }
    });

    this.categoryList.forEach((catL) => {
      let catFound = false;
      this.addedItems.forEach((cat) => {
        if (cat == catL.name) {
          catFound = true;
        }
      });
      if (!catFound) {
        removeCategoryList.push(catL);
      }
    });

    addCategoryList.forEach((element) => {
      let formData1 = new FormData();
      formData1.append("title", element);
      observableBatch.push(this.addCategory(formData1));
    });

    removeCategoryList.forEach((element) => {
      observableBatch.push(this.removeCategoryMoltin(element.id));
    });

    return Observable.forkJoin(observableBatch);
  }

  onClick(event) {
    event.preventDefault();
    this.ref._checked = !this.ref._checked;
  }
  getCompanyProfile() {
    this.user = this._CommonFunctionsService.checkUser().user;
    if (this.user.unit_id) {
      this._ProfileService
        .getCompanyprofile(this.user.unit_id)
        .subscribe((res: any) => {
          this.profile = res.data;
          this.google_sheet_url = res.data.google_sheet_url;
        });
    } else {
      this.user.unit_id = localStorage.getItem("unit_id");
      this._ProfileService.getCompanyprofile(this.user.unit_id).subscribe(
        (res: any) => {
          this.profile = res.data;
          this.google_sheet_url = res.data.google_sheet_url;
        },
        (error) => {
          //
        }
      );
    }
  }
  getProductList(event) {
    if (event.activeId === "tb2") {
      this.getAllProductList();
    }
  }
  googleDrive_url(event, folderName, contentGoogleDriveUrl, index) {
    this.checkGoogleDriveFlag = index;
    this.selectedGoogleDriveFolder = folderName;
    this.modalService
      .open(contentGoogleDriveUrl, {
        ariaLabelledBy: "modal-basic-title",
        windowClass: "linkModal",
        size: "lg",
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  uploadGoogleMenuSheet() {
    this.ngxService.start();
    this._ProfileService.uploadGoogleMenuSheet().subscribe(
      (res: any) => {
        this.ngxService.stop();
        if (res.success) {
          this.toastr.success("Sync successful");
          // this._ProfileService.uploadGoogleMenuSheet().subscribe((res: any) => {
          this.getAllProductList();
          // })
        }
      },
      (error) => {
        this.toastr.error("Sync failed, Please try again later");
      }
    );
  }
  getAllCategories() {
    this._ProfileService.getAllCategories().subscribe((res) => {
      this.categories = res.data.map((x) => ({ ...x, status: false }));
      this.getAllProductList();
      setTimeout(() => {
        this.showSelectedCat();
      }, 1000);
    });
  }

  showSelectedCat() {
    this.user = this._CommonFunctionsService.checkUser().user;
    const data = { email: this.googleEmail, user_id: this.user.id };
    this._ProfileService.getAllSecleted(data).subscribe((res: any) => {
      this.selectedcat = res.data;
      this.selectedcat.forEach((item) => {
        this.addedItems.push(item.category);
        this.addedCategories.push(item.category);
      });
      console.log(this.selectedcat, "selected data");
      this.getStatusChange();
    });
  }

  getStatusChange() {
    this.categories.forEach((element) => {
      this.selectedcat.forEach((value) => {
        if (element.id == value.id) {
          element.status = true;
        }
      });
    });
  }

  openProduct(item) {
    this.getAllProductList();
    this._Router.navigateByUrl(
      "menuitems/view/" + item.category + "/" + item.id
    );
  }

  getDescription(description) {
    return description.length > 25
      ? description.substr(0, 25) + "..."
      : description;
  }
  getTitle(description) {
    return description.length > 10
      ? description.substr(0, 10) + "..."
      : description;
  }
  getgmailuser() {
    const message = `Please get authenticated with gmail account`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "500px",
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult) {
        this._ProfileService.getGoogleAuthenication().subscribe((res) => {
          this.authentication_url = res.data;
          console.log(this.authentication_url, "dialogrefclose");
        });
      }
    });
  }

  /**
   * Add own category
   */
  addOwnCategory() {
    if (this.owncategory !== "") {
      this.ngxService.start();
      this._ProfileService
        .addOwnCategory({ category: this.owncategory })
        .subscribe(
          (res) => {
            this.toastr.success("Category successfully added");
            this.categories.push(res.data[0]);
            this.owncategory = "";
            this.ngxService.stop();
          },
          (err) => {
            this.ngxService.stop();
            this.toastr.error(err.error);
          }
        );
    } else {
      this.toastr.error("Please insert category name.");
    }
  }
}
