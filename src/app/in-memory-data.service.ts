import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  
  createDb() {
    const users = [
      { id: 1, username: 'tblack', firstName: 'Tom', lastName: 'Black' },
      { id: 2, username: 'swalker', firstName: 'Sky', lastName: 'Walker' },
      { id: 3, username: 'mrwhite', firstName: 'Jack', lastName: 'White' },
      { id: 4, username: 'amacedon', firstName: 'Alex', lastName: 'Macedonskyi' },
      { id: 5, username: 'nbon', firstName: 'Napoleon', lastName: 'Bon' },
      { id: 6, username: 'glee', firstName: 'Gerry', lastName: 'Lee' },
      { id: 7, username: 'bsky', firstName: 'Blu', lastName: 'Sky' },
      { id: 8, username: 'fone', firstName: 'First', lastName: 'One' },
      { id: 9, username: 'mtron', firstName: 'Mega', lastName: 'Tron' },
      { id: 10, username: 'lflash', firstName: 'Lightning', lastName: 'Flash' },
    ]
    return {users}
  }
  
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user=>user.id)) + 1 : 11
  }

}
