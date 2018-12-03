import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';


@Component({
    selector: 'app-users-page',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    
    users: User[];
    selectedUser: User
    
    constructor(private userService: UserService
                
    ) {}

    ngOnInit() {
        this.getUsers()
    }
    
    getUsers(): void{
        this.userService.getUsers()
            .subscribe(users => this.users = users)
    }
    add(firstName: string, lastName: string, username: string): void {
        firstName = firstName.trim()
        lastName = lastName.trim()
        username = username.trim()
        if(!firstName || !lastName || !username){ return }
        this.userService.addUser( {firstName, lastName, username} as User)
            .subscribe(user => {
                this.users.push(user)
            })
    }
    
    deleteUser(user: User): void{
        this.users = this.users.filter(h => h !== user)
        this.userService.deleteUser(user).subscribe()
    }
    

    onSelect(user: User): void{
        this.selectedUser = user
    }
}
