import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';

export interface DialogData {
    id: number
}

@Component({
    selector: 'app-users-page',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    
    users: User[]
    // id: number
    // selectedUser: User
    
    constructor(private userService: UserService,
                public dialog: MatDialog) {}

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
    
    openDialog(user: User){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        // dialogConfig.position = {
        //     top: '0',
        //     left: '0'
        // }
        dialogConfig.data = {
            id: user.id
        }
        
        const dialogRef = this.dialog.open(
            UserDetailComponent, dialogConfig)
        dialogRef.afterClosed().subscribe(
            result => {
                console.log("The dialog was closed")
                this.getUsers()
            }
            )
    }
    

    // onSelect(user: User): void{
    //     this.selectedUser = user
    // }
}
