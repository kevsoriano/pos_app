import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'users';

  constructor(private apiService: ApiService) { }

  createUser() {}

  getAllUsers() {}

  getUser(id: number) {
    return this.apiService.get(`${this.url}/${id}`);
  }

  updateUser(id: number) {
    return this.apiService.get(`${this.url}/${id}`);
  }

  deleteUser(id: number) {
    return this.apiService.delete<void>(`${this.url}/${id}`);
  }

  // TODO: update methods. Reference only:

  // getUsers(): Observable<User[]> {
  //   return this.apiService.get<User[]>(this.usersUrl);
  // }

  // getUser(id: number): Observable<User> {
  //   return this.apiService.get<User>(`${this.usersUrl}/${id}`);
  // }

  // createUser(user: User): Observable<User> {
  //   return this.apiService.post<User>(this.usersUrl, user);
  // }

  // updateUser(id: number, user: User): Observable<User> {
  //   return this.apiService.put<User>(`${this.usersUrl}/${id}`, user);
  // }

  // deleteUser(id: number): Observable<void> {
  //   return this.apiService.delete<void>(`${this.usersUrl}/${id}`);
  // }
}
