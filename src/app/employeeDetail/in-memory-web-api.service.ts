import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [{
      id: 1,
      fname: 'Jhonie',
      phone: '9999999999',
      lname: 'Khann',
      status: 'Active'
      }, {
      id: 2,
      fname: 'Jacobie',
      phone: '9090909090',
      lname: 'kummm',
      status: 'Inactive'
      }, {
      id: 3,
      fname: 'Ariess',
      phone: '1454585222',
      lname: 'Yummm',
      status: 'Inactive'
      }
    ];
    return  {employees};
}

}
