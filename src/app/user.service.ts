import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { tap } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})


export class UserService {
  
  private usersUrl = 'api/users'
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }
  
  getUser(id: number): Observable<User>{
    const url = `${this.usersUrl}/${id}`
    return this.http.get<User>(url)
  }
  
  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.usersUrl, user, httpOptions)
  }
  
  updateUser(user: User): Observable<any>{
    return this.http.put<User>(this.usersUrl, user, httpOptions).pipe(
      tap(_=> console.log(`inside user.service: updated user id: ${user.id}`))
      )
  }
  
  deleteUser(user: User | number): Observable<User>{
    const id = typeof(user) !== 'number' ? user.id : user
    const url = `${this.usersUrl}/${id}`
    return this.http.delete<User>(url, httpOptions)
  
  }
  constructor(private http: HttpClient) { }
}
