import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ProfileService } from '../services/profile.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-greenmoney',
  templateUrl: './greenmoney.component.html',
  styleUrls: ['./greenmoney.component.css']
})
export class GreenmoneyComponent implements OnInit {

  scriptData:any;
  urlId:any;
  accountId:any;
  customerId:any;

  constructor(
    private route: ActivatedRoute,
    private _ProfileService: ProfileService,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  public ngOnInit() {
    

    let urlid = window.location.href.split('/');
    this.urlId = urlid[5];
    localStorage.setItem('orderID', this.urlId);

    let jqueryFile = document.createElement('script');
    jqueryFile.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
    document.head.appendChild(jqueryFile);
    window.open('https://admin.instamarkt.co/#/green-money/42a5e7d5-4b82-4368-a238-3661a78cd7eb','myWindow')
    // this.greenMoney()
  }

 

  async greenMoney() {
    await this._ProfileService.greenMoneyPayment(this.urlId).subscribe(
      (response: any) => {
        
        let getResponse = response;
        getResponse = getResponse.split('<script>');
        
        let getFirstScript = getResponse[1].split('</script>');
        let getSecondScript = getResponse[2].split('</script>');
      
        let appendFirstScript = document.createElement('script');
        appendFirstScript.innerHTML = getFirstScript[0];
        document.head.appendChild(appendFirstScript);

        let appendSecondScript = document.createElement('script');
        appendSecondScript.innerHTML = getSecondScript[0];
        document.head.appendChild(appendSecondScript);

        setTimeout(function(){
          let cashFlowScript = document.createElement('script');
          cashFlowScript.innerHTML = `Cashflow.init({ target: $("#widget")});

          Cashflow.ready = function(id){
              console.log("Session ID: " + id);
              Cashflow.open();
          }

          Cashflow.onFatalError = function(e) {
              console.log("Verde widget failed on startup...", e);
          }

          Cashflow.onCustomerCreation = function(id) {
              console.log("Customer ID: " + id);
              localStorage.setItem('customerId', id);
          }

          Cashflow.onEnrollmentSuccess = function(id, data) {
              console.log("Account ID: " + id);
              console.log("Enrollment Data: " + data);
              var getOrderID = localStorage.getItem('orderID');
              var customerID = localStorage.getItem('customerId');

              var arr = {
                "CustomerToken":customerID,
                "AccountToken":id
              };

              $.ajax({
                method:'POST',
                url:'https://api.instamarkt.co/api/v1/payment/green-money-generate-check/'+getOrderID,
                data:JSON.stringify(arr),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success:function(data){
                  console.log(data);
                  localStorage.clear();
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) { 
                  alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                }    
              })
          }`;

          document.head.appendChild(cashFlowScript);
        },5000);  
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
