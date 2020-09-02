import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: any, orderid: any): any {
    if(orderid.toString().length == 1){
      return "000"+value;
    }else if(orderid.toString().length == 2){
      return "00"+value;
    }else if(orderid.toString().length == 3){
      return "0"+value;
    }else{
      return value;
    }
  }

}
