function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{aT7B:function(e,t,n){"use strict";n.r(t);var a,i,r,l=n("ofXK"),o=n("tyNb"),s=n("3Pt+"),c=n("fXoL"),m=((a=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||a)},imports:[[l.c]]}),a),d=n("B4Mn"),u=((i=function(){function e(){var t=this;_classCallCheck(this,e),this._data=new d.a,this._dataStream$=this._data.asObservable(),this._subscriptions=new Map,this._dataStream$.subscribe((function(e){return t._onEvent(e)}))}return _createClass(e,[{key:"notifyDataChanged",value:function(e,t){this._data[e]!==t&&(this._data[e]=t,this._data.next({event:e,data:this._data[e]}))}},{key:"subscribe",value:function(e,t){var n=this._subscriptions.get(e)||[];n.push(t),this._subscriptions.set(e,n)}},{key:"_onEvent",value:function(e){(this._subscriptions.get(e.event)||[]).forEach((function(t){t.call(null,e.data)}))}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275prov=c["\u0275\u0275defineInjectable"]({token:i,factory:i.\u0275fac}),i),p=n("1kSV"),f=function e(t,n,a,i,r,l,o,s,c,m,d,u,p,f){_classCallCheck(this,e),this.id=t,this.sender=n,this.senderMail=a,this.subject=i,this.date=r,this.body=l,this.attachment=o,this.attachments=s,this.unread=c,this.sent=m,this.starred=d,this.draft=u,this.trash=p,this.selected=f},h=[new f(1,"Seth Wright","info@wrappixel.com","Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","6:08 PM","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!0,!1,!1,!1,!1,!1),new f(2,"Leo Jons","info@wrappixel.com","Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","12:55 PM","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!0,["assets/images/gallery/chair.png","assets/images/gallery/chair2.png"],!0,!1,!0,!1,!1,!1),new f(3,"Aron Shaur","info@wrappixel.com","consectetuer adipiscing elit.","01.11.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!1,!1,!1,!1,!1),new f(4,"Emily Rhodes","info@wrappixel.com","Aenean commodo ligula eget dolor. Aenean massa.","21.07.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!0,!1,!1,!1,!1,!1),new f(5,"Draft","","no subject","2:14 PM","",!1,[],!1,!1,!1,!0,!1,!1),new f(6,"Draft","","Please confirm your account for furthur process","Jan 7","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet.",!1,[],!1,!1,!1,!0,!1,!1),new f(7,"Kendra","info@wrappixel.com","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.","27.05.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!1,!1,!1,!1,!1),new f(8,"Jimmy Fallon","info@wrappixel.com","consectetuer adipiscing elit.","14.05.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!1,!0,!1,!1,!1),new f(9,"Sam Tighe","info@wrappixel.com","Aenean commodo ligula eget dolor. Aenean massa.","03.05.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!1,!1,!1,!1,!1),new f(10,"Saul","info@wrappixel.com","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.","30.04.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!0,!1,!1,!1,!1),new f(11,"Nathan James","info@wrappixel.com","Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","24.04.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!1,!1,!1,!1,!1),new f(12,"Mia Green","info@wrappixel.com","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.","11.04.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!1,!1,!1,!1,!1),new f(13,"Mario Gomez","info@wrappixel.com","Download the freebies from the site wrappixel.com all the admin template for free","24.02.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!1,!1,!1,!1,!1)],g=Promise.resolve(h),v=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"getInboxMails",value:function(){return g.then((function(e){return e.filter((function(e){return!1===e.sent&&!1===e.draft&&!1===e.trash}))}))}},{key:"getStarredMails",value:function(){return g.then((function(e){return e.filter((function(e){return!0===e.starred}))}))}},{key:"getSentMails",value:function(){return g.then((function(e){return e.filter((function(e){return!0===e.sent}))}))}},{key:"getDraftMails",value:function(){return g.then((function(e){return e.filter((function(e){return!0===e.draft}))}))}},{key:"getTrashMails",value:function(){return g.then((function(e){return e.filter((function(e){return!0===e.trash}))}))}},{key:"getMail",value:function(e){return g.then((function(t){return t.find((function(t){return t.id===+e}))}))}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275prov=c["\u0275\u0275defineInjectable"]({token:r,factory:r.\u0275fac}),r);function b(e,t){if(1&e){var n=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"div",40),c["\u0275\u0275elementStart"](1,"button",9),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](n),c["\u0275\u0275nextContext"]().trash()})),c["\u0275\u0275element"](2,"i",41),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}}var x,S,k=function(){return["mail-compose"]},y=function(){return["mail-list/inbox"]},E=function(){return["mail-list/starred"]},w=function(){return["mail-list/sent"]},C=function(){return["mail-list/drafts"]},M=function(){return["mail-list/trash"]},A=((x=function(){function e(t,n,a,i){var r=this;_classCallCheck(this,e),this.service=t,this.route=n,this.router=a,this.state=i,this.markAsRead=!1,this.markAsUnRead=!1,this.deleteChecked=!1,this.status=!1,this.router.events.subscribe((function(e){e instanceof o.c&&(r.id=r.route.snapshot.firstChild.params.id,r.type=r.route.snapshot.firstChild.params.type,setTimeout((function(){})))}))}return _createClass(e,[{key:"getBack",value:function(){this.router.navigate(this.type?["apps/email/mail-list/"+this.type]:["apps/email/mail-list/inbox"])}},{key:"trash",value:function(){this.service.getMail(this.id).then((function(e){e.trash=!0,e.sent=!1,e.draft=!1,e.starred=!1})),this.router.navigate(["apps/email/mail-list/inbox"])}},{key:"setAsRead",value:function(){this.markAsRead=!this.markAsRead,this.state.notifyDataChanged("markAsRead",this.markAsRead)}},{key:"setAsUnRead",value:function(){this.markAsUnRead=!this.markAsUnRead,this.state.notifyDataChanged("markAsUnRead",this.markAsUnRead)}},{key:"deleteCheckedMail",value:function(){this.deleteChecked=!this.deleteChecked,this.state.notifyDataChanged("deleteChecked",this.deleteChecked)}},{key:"openClleft",value:function(){this.status=!this.status}}]),e}()).\u0275fac=function(e){return new(e||x)(c["\u0275\u0275directiveInject"](v),c["\u0275\u0275directiveInject"](o.a),c["\u0275\u0275directiveInject"](o.f),c["\u0275\u0275directiveInject"](u))},x.\u0275cmp=c["\u0275\u0275defineComponent"]({type:x,selectors:[["app-mail"]],features:[c["\u0275\u0275ProvidersFeature"]([v])],decls:83,vars:21,consts:[[1,"email-container","pr-3","pl-3"],[1,"row"],[1,"col-sm-3","col-md-2","bg-info"],[1,"mb-0","mt-3","text-white"],["href","javascript:void(0)",1,"text-white","float-right","custom-control-button",3,"click"],[1,"ti-menu"],[1,"col-sm-9","col-md-10","bg-info"],[1,"pb-3","pt-3","d-flex"],["data-toggle","tooltip","data-placement","top","data-animation","false",1,"b-btn","mr-1",3,"title"],["type","button",1,"btn","btn-dark","btn-sm",3,"click"],[1,"fa","fa-arrow-left"],["class","b-btn mr-1","data-toggle","tooltip","data-placement","top","data-animation","false","title","Delete",4,"ngIf"],["data-toggle","tooltip","data-placement","top","data-animation","false","title","Refresh",1,"b-btn","mr-1"],["type","button",1,"btn","btn-dark","btn-sm"],[1,"fas","fa-sync-alt"],["ngbDropdown","",1,"btn-group"],["type","button","ngbDropdownToggle","","aria-controls","dropdown-basic",1,"btn","btn-warning","btn-sm"],["id","dropdown-basic","ngbDropdownMenu","",1,""],["href","javascript:void(0);",1,"dropdown-item",3,"click"],[1,"ml-auto"],[1,"mr-1","text-white"],[1,"btn-group","btn-group-sm"],["type","button",1,"btn","btn-dark"],[1,"fa","fa-chevron-left"],[1,"fa","fa-chevron-right"],[1,"col-md-2","bg-white","b-r"],[1,"inbox-panel",3,"ngClass"],["role","button",1,"btn","btn-danger","btn-sm","btn-block","mt-3",3,"routerLink"],[1,"list-group","mt-3","custom-group"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[3,"routerLink"],[1,"badge","badge-info","badge-pill"],[1,"list-group-item"],[1,"list-group","custom-group"],[1,"fa","fa-circle","text-danger","mr-1"],["href","#"],[1,"fa","fa-circle","text-warning","mr-1"],[1,"fa","fa-circle","text-info","mr-1"],[1,"col-md-10","bg-light-part"],[1,"inbox-right-panel"],["data-toggle","tooltip","data-placement","top","data-animation","false","title","Delete",1,"b-btn","mr-1"],[1,"fa","fa-trash"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275elementStart"](2,"div",2),c["\u0275\u0275elementStart"](3,"h3",3),c["\u0275\u0275text"](4," Mailbox "),c["\u0275\u0275elementStart"](5,"a",4),c["\u0275\u0275listener"]("click",(function(){return t.openClleft()})),c["\u0275\u0275element"](6,"i",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"div",6),c["\u0275\u0275elementStart"](8,"div",7),c["\u0275\u0275elementStart"](9,"div",8),c["\u0275\u0275elementStart"](10,"button",9),c["\u0275\u0275listener"]("click",(function(){return t.getBack()})),c["\u0275\u0275element"](11,"i",10),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](12,b,3,0,"div",11),c["\u0275\u0275elementStart"](13,"div",12),c["\u0275\u0275elementStart"](14,"button",13),c["\u0275\u0275element"](15,"span",14),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"div",15),c["\u0275\u0275elementStart"](17,"button",16),c["\u0275\u0275text"](18," More "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](19,"div",17),c["\u0275\u0275elementStart"](20,"a",18),c["\u0275\u0275listener"]("click",(function(){return t.setAsRead()})),c["\u0275\u0275text"](21,"Mark as read"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](22,"a",18),c["\u0275\u0275listener"]("click",(function(){return t.setAsUnRead()})),c["\u0275\u0275text"](23,"Mark as unread"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](24,"a",18),c["\u0275\u0275listener"]("click",(function(){return t.deleteCheckedMail()})),c["\u0275\u0275text"](25,"Delete"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](26,"div",19),c["\u0275\u0275elementStart"](27,"span",20),c["\u0275\u0275elementStart"](28,"b"),c["\u0275\u0275text"](29,"1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](30,"\u2013"),c["\u0275\u0275elementStart"](31,"b"),c["\u0275\u0275text"](32,"50"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](33," of "),c["\u0275\u0275elementStart"](34,"b"),c["\u0275\u0275text"](35,"50"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](36,"div",21),c["\u0275\u0275elementStart"](37,"button",22),c["\u0275\u0275element"](38,"span",23),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](39,"button",22),c["\u0275\u0275element"](40,"span",24),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](41,"div",1),c["\u0275\u0275elementStart"](42,"div",25),c["\u0275\u0275elementStart"](43,"div",26),c["\u0275\u0275elementStart"](44,"a",27),c["\u0275\u0275text"](45,"COMPOSE"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](46,"ul",28),c["\u0275\u0275elementStart"](47,"li",29),c["\u0275\u0275elementStart"](48,"a",30),c["\u0275\u0275text"](49," Inbox "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](50,"span",31),c["\u0275\u0275text"](51,"3"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](52,"li",32),c["\u0275\u0275elementStart"](53,"a",30),c["\u0275\u0275text"](54,"Starred"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](55,"li",32),c["\u0275\u0275elementStart"](56,"a",30),c["\u0275\u0275text"](57,"Sent Mail"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](58,"li",29),c["\u0275\u0275elementStart"](59,"a",30),c["\u0275\u0275text"](60,"Drafts"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](61,"span",31),c["\u0275\u0275text"](62,"2"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](63,"li",32),c["\u0275\u0275elementStart"](64,"a",30),c["\u0275\u0275text"](65,"Trash"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](66,"hr"),c["\u0275\u0275elementStart"](67,"ul",33),c["\u0275\u0275elementStart"](68,"li",32),c["\u0275\u0275element"](69,"span",34),c["\u0275\u0275elementStart"](70,"a",35),c["\u0275\u0275text"](71,"Notes"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](72,"li",32),c["\u0275\u0275element"](73,"span",36),c["\u0275\u0275elementStart"](74,"a",35),c["\u0275\u0275text"](75,"Personal"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](76,"li",32),c["\u0275\u0275element"](77,"span",37),c["\u0275\u0275elementStart"](78,"a",35),c["\u0275\u0275text"](79,"Travel"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](80,"div",38),c["\u0275\u0275elementStart"](81,"div",39),c["\u0275\u0275element"](82,"router-outlet"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](9),c["\u0275\u0275styleProp"]("display",t.id||!t.type?"inline-block":"none"),c["\u0275\u0275propertyInterpolate1"]("title","Back to ",t.type,""),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngIf",t.id),c["\u0275\u0275advance"](1),c["\u0275\u0275styleProp"]("display","/apps/email/mail-compose"==t.router.url||t.id?"none":"inline-block"),c["\u0275\u0275advance"](3),c["\u0275\u0275styleProp"]("display","/apps/email/mail-compose"==t.router.url?"none":"block"),c["\u0275\u0275advance"](27),c["\u0275\u0275property"]("ngClass",t.status?"showlpanel":""),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("routerLink",c["\u0275\u0275pureFunction0"](15,k)),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("routerLink",c["\u0275\u0275pureFunction0"](16,y)),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("routerLink",c["\u0275\u0275pureFunction0"](17,E)),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("routerLink",c["\u0275\u0275pureFunction0"](18,w)),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("routerLink",c["\u0275\u0275pureFunction0"](19,C)),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("routerLink",c["\u0275\u0275pureFunction0"](20,M)))},directives:[l.q,p.n,p.q,p.p,l.n,o.i,o.k],styles:[".email-container{overflow:hidden}.email-container .unread{font-weight:800}.email-container .mail-star .fa-star{color:#f9a913}.email-container .inbox-panel,.email-container .inbox-right-panel{min-height:calc(100vh - 300px)}.email-container .inbox-right-panel{margin:0 -10px}.email-container .inbox-right-panel .table tr{cursor:pointer}.email-container .sender,.email-container .subject{max-width:350px;overflow:hidden;text-overflow:ellipsis}.email-container .sender{max-width:150px}.email-container .custom-control-button{display:none}.email-container .width-50{width:50px}.email-container .custom-group .list-group-item{border:0;padding:.75rem .25rem}.email-container .custom-group .list-group-item a{color:#3e556a}@media (max-width:767px){.email-container .inbox-panel{position:absolute;width:200px;min-height:100%;height:100%;background:#fff;left:-202px;z-index:10;box-shadow:0 2px 20px rgba(0,0,0,.1);padding:0 10px}.email-container .inbox-panel.showlpanel{left:0}.email-container .custom-control-button{display:block}}"],encapsulation:2}),x),I=function(){return["../mail-list/inbox"]},_=((S=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=c["\u0275\u0275defineComponent"]({type:S,selectors:[["app-mail-compose"]],decls:15,vars:2,consts:[[1,"card-body","compose"],["method","get","action","#"],[1,"form-group"],["type","text","placeholder","To",1,"form-control"],["type","text","placeholder","Cc / Bcc",1,"form-control"],["type","text","placeholder","Subject",1,"form-control"],["placeholder","Message","rows","10",1,"form-control"],[1,"form-group","pull-right"],[1,"btn","btn-secondary","mr-2",3,"routerLink"],["type","submit",1,"btn","btn-main"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"form",1),c["\u0275\u0275elementStart"](2,"div",2),c["\u0275\u0275element"](3,"input",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"div",2),c["\u0275\u0275element"](5,"input",4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"div",2),c["\u0275\u0275element"](7,"input",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"div",2),c["\u0275\u0275element"](9,"textarea",6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"div",7),c["\u0275\u0275elementStart"](11,"a",8),c["\u0275\u0275text"](12,"Cancel"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"button",9),c["\u0275\u0275text"](14,"Send"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](11),c["\u0275\u0275property"]("routerLink",c["\u0275\u0275pureFunction0"](1,I)))},directives:[s["\u0275angular_packages_forms_forms_y"],s.NgControlStatusGroup,s.NgForm,o.i],encapsulation:2}),S);n("w/7T");var L,j=((L=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"transform",value:function(e,t){var n=new RegExp(t,"ig");if(e)return e.filter((function(e){if((e.sender||e.subject)&&(-1!==e.sender.search(n)||-1!==e.subject.search(n)))return!0}))}}]),e}()).\u0275fac=function(e){return new(e||L)},L.\u0275pipe=c["\u0275\u0275definePipe"]({name:"MailSearch",type:L,pure:!0}),L),T=function(e,t){return{"mdi-star":e,"mdi-star-outline":t}};function D(e,t){if(1&e){var n=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"td",20),c["\u0275\u0275elementStart"](1,"i",21),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var e=c["\u0275\u0275nextContext"]().$implicit;return c["\u0275\u0275nextContext"]().changeStarStatus(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){var a=c["\u0275\u0275nextContext"]().$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngClass",c["\u0275\u0275pureFunction2"](1,T,a.starred,!a.starred))}}function R(e,t){1&e&&c["\u0275\u0275element"](0,"i",22)}var F=function(e,t){return{unread:e,selected:t}};function P(e,t){if(1&e){var n=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tr",9),c["\u0275\u0275elementStart"](1,"td",10),c["\u0275\u0275elementStart"](2,"div",11),c["\u0275\u0275elementStart"](3,"input",12),c["\u0275\u0275listener"]("ngModelChange",(function(e){return c["\u0275\u0275restoreView"](n),t.$implicit.selected=e}))("ngModelChange",(function(){return c["\u0275\u0275restoreView"](n),c["\u0275\u0275nextContext"]().toggleOne()})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](4,"label",13),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](5,D,2,4,"td",14),c["\u0275\u0275elementStart"](6,"td",15),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var e=t.$implicit;return c["\u0275\u0275nextContext"]().goToDetail(e)})),c["\u0275\u0275text"](7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"td",16),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var e=t.$implicit;return c["\u0275\u0275nextContext"]().goToDetail(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"td",17),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var e=t.$implicit;return c["\u0275\u0275nextContext"]().goToDetail(e)})),c["\u0275\u0275template"](10,R,1,0,"i",18),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"td",19),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var e=t.$implicit;return c["\u0275\u0275nextContext"]().goToDetail(e)})),c["\u0275\u0275text"](12),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit,i=c["\u0275\u0275nextContext"]();c["\u0275\u0275property"]("ngClass",c["\u0275\u0275pureFunction2"](9,F,a.unread,a.selected)),c["\u0275\u0275advance"](3),c["\u0275\u0275propertyInterpolate1"]("id","checkbox",a.id,""),c["\u0275\u0275property"]("ngModel",a.selected),c["\u0275\u0275advance"](1),c["\u0275\u0275attributeInterpolate1"]("for","checkbox",a.id,""),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf","/apps/email/mail-list/trash"!=i.router.url),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](a.sender),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("innerHTML",a.subject,c["\u0275\u0275sanitizeHtml"]),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",a.attachment),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](a.date)}}var V,O=((V=function(){function e(t,n,a,i){var r=this;_classCallCheck(this,e),this.service=t,this.route=n,this.router=a,this.state=i,this.router.events.subscribe((function(e){e instanceof o.c&&(r.unSelectAll(),r.searchText="")})),this.state.subscribe("markAsRead",(function(e){r.markAllAsRead()})),this.state.subscribe("markAsUnRead",(function(e){r.markAllAsUnRead()})),this.state.subscribe("deleteChecked",(function(e){r.deleteAllCheckedMail()}))}return _createClass(e,[{key:"ngOnInit",value:function(){this.getMails()}},{key:"getMails",value:function(){var e=this;this.mails=this.route.params.switchMap((function(t){switch(e.type=t.type,e.type){case"inbox":return e.service.getInboxMails();case"starred":return e.service.getStarredMails();case"sent":return e.service.getSentMails();case"drafts":return e.service.getDraftMails();case"trash":return e.service.getTrashMails();default:return e.service.getInboxMails()}}))}},{key:"toggleAll",value:function(){var e=!this.isAllSelected;this.mails.subscribe((function(t){t.forEach((function(t){t.selected=e}))}))}},{key:"toggleOne",value:function(){var e=this;this.mails.subscribe((function(t){e.isAllSelected=t.every((function(e){return!0===e.selected}))}))}},{key:"unSelectAll",value:function(){this.isAllSelected=!1,this.mails&&this.mails.subscribe((function(e){e.forEach((function(e){e.selected=!1}))}))}},{key:"markAllAsRead",value:function(){this.mails.subscribe((function(e){e.forEach((function(e){e.selected&&(e.unread=!1)}))}))}},{key:"markAllAsUnRead",value:function(){this.mails.subscribe((function(e){e.forEach((function(e){e.selected&&(e.unread=!0)}))}))}},{key:"deleteAllCheckedMail",value:function(){this.mails.subscribe((function(e){e.forEach((function(e){e.selected&&(e.trash=!0,e.sent=!1,e.draft=!1,e.starred=!1)}))})),this.getMails(),this.isAllSelected=!1}},{key:"goToDetail",value:function(e){e.unread=!1,this.router.navigate(["apps/email/mail-list/"+this.type,e.id])}},{key:"changeStarStatus",value:function(e){e.starred=!e.starred}}]),e}()).\u0275fac=function(e){return new(e||V)(c["\u0275\u0275directiveInject"](v),c["\u0275\u0275directiveInject"](o.a),c["\u0275\u0275directiveInject"](o.f),c["\u0275\u0275directiveInject"](u))},V.\u0275cmp=c["\u0275\u0275defineComponent"]({type:V,selectors:[["app-inbox-list"]],decls:13,vars:8,consts:[[1,"d-flex","mailbox-header-bar","p-3","bg-white","border-bottom","align-items-center"],[1,"custom-control","custom-checkbox"],["id","toggle-all","type","checkbox",1,"custom-control-input",3,"ngModel","ngModelChange","click"],["for","toggle-all",1,"custom-control-label"],[1,"ml-auto"],["id","table-search-input","type","text","placeholder","Search mail...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"table-responsive"],[1,"table","table-hover","no-wrap"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"mail-checkbox","pl-3","width-50"],[1,"custom-control","custom-checkbox","mycustomcheckbox"],["type","checkbox",1,"custom-control-input",3,"id","ngModel","ngModelChange"],[1,"custom-control-label"],["class","mail-star width-50",4,"ngIf"],[1,"sender",3,"click"],[1,"subject",3,"innerHTML","click"],[1,"attachment",3,"click"],["class","fa fa-paperclip",4,"ngIf"],[1,"date",3,"click"],[1,"mail-star","width-50"],[1,"font-18","mdi",3,"ngClass","click"],[1,"fa","fa-paperclip"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275elementStart"](2,"input",2),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.isAllSelected=e}))("click",(function(){return t.toggleAll()})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"label",3),c["\u0275\u0275text"](4,"Check all"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"div",4),c["\u0275\u0275elementStart"](6,"input",5),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.searchText=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"div",6),c["\u0275\u0275elementStart"](8,"table",7),c["\u0275\u0275elementStart"](9,"tbody"),c["\u0275\u0275template"](10,P,13,12,"tr",8),c["\u0275\u0275pipe"](11,"MailSearch"),c["\u0275\u0275pipe"](12,"async"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngModel",t.isAllSelected),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngModel",t.searchText),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngForOf",c["\u0275\u0275pipeBind2"](11,3,c["\u0275\u0275pipeBind1"](12,6,t.mails),t.searchText)))},directives:[s.CheckboxControlValueAccessor,s.NgControlStatus,s.NgModel,s.DefaultValueAccessor,l.p,l.n,l.q],pipes:[j,l.b],encapsulation:2}),V);function U(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"span",14),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"]("<",n.mail.senderMail,">")}}function $(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"section",20),c["\u0275\u0275element"](1,"img",21),c["\u0275\u0275elementStart"](2,"h5",22),c["\u0275\u0275text"](3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"p"),c["\u0275\u0275text"](5," 457K \xa0\xa0 "),c["\u0275\u0275elementStart"](6,"a",18),c["\u0275\u0275text"](7,"View"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](8," \xa0\xa0 "),c["\u0275\u0275elementStart"](9,"a",18),c["\u0275\u0275text"](10,"Download"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,a=t.index;c["\u0275\u0275advance"](1),c["\u0275\u0275propertyInterpolate"]("src",n,c["\u0275\u0275sanitizeUrl"]),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"]("image-",a+1,".jpg")}}function N(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",15),c["\u0275\u0275element"](1,"hr"),c["\u0275\u0275elementStart"](2,"div",16),c["\u0275\u0275elementStart"](3,"div",17),c["\u0275\u0275elementStart"](4,"p"),c["\u0275\u0275elementStart"](5,"strong"),c["\u0275\u0275text"](6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](7," \xa0-\xa0 "),c["\u0275\u0275elementStart"](8,"a",18),c["\u0275\u0275text"](9,"Download all attachments"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](10,"\xa0\xa0\xa0 "),c["\u0275\u0275elementStart"](11,"a",18),c["\u0275\u0275text"](12,"View all Images"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](13,$,11,2,"section",19),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](6),c["\u0275\u0275textInterpolate1"]("",n.mail.attachments.length," attachments"),c["\u0275\u0275advance"](7),c["\u0275\u0275property"]("ngForOf",n.mail.attachments)}}function B(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div"),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275elementStart"](2,"h4",2),c["\u0275\u0275text"](3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"div",3),c["\u0275\u0275elementStart"](5,"div",4),c["\u0275\u0275element"](6,"i",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"div",6),c["\u0275\u0275elementStart"](8,"span",7),c["\u0275\u0275text"](9),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](10,U,2,1,"span",8),c["\u0275\u0275elementStart"](11,"span",9),c["\u0275\u0275text"](12,"to me"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"div",10),c["\u0275\u0275elementStart"](14,"span",11),c["\u0275\u0275text"](15),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](16,"div",12),c["\u0275\u0275template"](17,N,14,2,"div",13),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](n.mail.subject),c["\u0275\u0275advance"](6),c["\u0275\u0275textInterpolate"](n.mail.sender),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",n.mail.senderMail),c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate1"](" ",n.mail.date," "),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("innerHTML",n.mail.body,c["\u0275\u0275sanitizeHtml"]),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",n.mail.attachments.length>0)}}var H,J=((H=function(){function e(t,n,a){_classCallCheck(this,e),this.service=t,this.route=n,this.router=a,this.replyMessage=new c.EventEmitter}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.params.switchMap((function(t){return e.service.getMail(+t.id)})).subscribe((function(t){return e.mail=t}))}},{key:"goToReply",value:function(e){this.replyMessage.emit(e)}},{key:"trash",value:function(e){this.service.getMail(e).then((function(e){e.trash=!0,e.sent=!1,e.draft=!1,e.starred=!1})),this.router.navigate(["apps/email/mail-list/inbox"])}}]),e}()).\u0275fac=function(e){return new(e||H)(c["\u0275\u0275directiveInject"](v),c["\u0275\u0275directiveInject"](o.a),c["\u0275\u0275directiveInject"](o.f))},H.\u0275cmp=c["\u0275\u0275defineComponent"]({type:H,selectors:[["app-mail-detail"]],outputs:{replyMessage:"replyMessage"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"card-body"],[1,"mb-3"],[1,"d-flex","mt-4","mb-4"],[1,"round","mr-2","flex-shrink-0"],["aria-hidden","true",1,"fa","fa-user"],[1,""],[1,"font-bold"],["class","email text-truncate d-block w-75",4,"ngIf"],[1,"receiver"],[1,"ml-auto"],[1,"mail-date"],[1,"mailbox-body",3,"innerHTML"],["class","mail-attachments",4,"ngIf"],[1,"email","text-truncate","d-block","w-75"],[1,"mail-attachments"],[1,"row"],[1,"col-sm-6"],["href","#"],["class","attachment",4,"ngFor","ngForOf"],[1,"attachment"],["alt","",3,"src"],[1,"title"]],template:function(e,t){1&e&&c["\u0275\u0275template"](0,B,18,6,"div",0),2&e&&c["\u0275\u0275property"]("ngIf",t.mail)},directives:[l.q,l.p],encapsulation:2}),H);n.d(t,"routes",(function(){return z})),n.d(t,"MailModule",(function(){return G}));var q,z=[{path:"",component:A,children:[{path:"",redirectTo:"mail-list/inbox",pathMatch:"full"},{path:"mail-list/:type",component:O},{path:"mail-compose",component:_},{path:"mail-list/:type/:id",component:J}]}],G=((q=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:q}),q.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||q)},providers:[u],imports:[[l.c,s.FormsModule,m,p.u,o.j.forChild(z)]]}),q)}}]);