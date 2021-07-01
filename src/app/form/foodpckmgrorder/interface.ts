export interface IProduct {
        hub_name: string,
        drivers: [
          {
            id: number,
            first_name: string,
            last_name: string,
            cash_payouts: string,
            weekly_total: string,
            orders: [{
              vendor: string,
              address: string,
              method: 'assets/images/cash.png',
              fee: string,
              tips: string
            }],
            weekly_data: [{
              task: string,
              mon: string,
              tue: string,
              wed: string,
              thu: string,
              fri: string,
              sat: string,
              sun: string,
              total: string
            }]
          }]
}