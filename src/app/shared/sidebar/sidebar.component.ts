import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES,FOODPARKMGRROUTES, ADMINROUTE,UNITMGRROUTE } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonFunctionsService } from 'src/app/services';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  firstName:string='';
  lastName:string='';
  public sidebarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private commonServices : CommonFunctionsService
  ) {}

  // End open close
  ngOnInit() {
    let user = this.commonServices.checkUser();
   
    this.firstName = user.user.first_name;
    this.lastName = user.user.last_name;
  
    if(user.user && user.user.role=='ADMIN'){
      this.sidebarnavItems = ADMINROUTE.filter(sidebarnavItem => sidebarnavItem);
    }
    if(user.user && user.user.role=='OWNER'){
      this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
    }
    if(user.user && user.user.role=='FOODPARKMGR'){
      this.sidebarnavItems = FOODPARKMGRROUTES.filter(sidebarnavItem => sidebarnavItem);
    }
    if(user.user && user.user.role=='UNITMGR'){
      this.sidebarnavItems = UNITMGRROUTE.filter(sidebarnavItem => sidebarnavItem);
    }
    
  }
}
