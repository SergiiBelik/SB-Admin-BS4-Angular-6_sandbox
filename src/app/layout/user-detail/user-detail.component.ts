import { Component, OnInit, Input, ViewEncapsulation, Inject } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';
// import { UserDetailComponent } from '../user-detail/user-detail.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})


export class UserDetailComponent implements OnInit {

  user: User

  constructor(
    // private route: ActivatedRoute,
    // private location: Location,
    private userService: UserService,
    public dialogRef: MatDialogRef<UserDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data

    ) { }

  ngOnInit(): void {
    this.getUser()
  }
  
  getUser(): void{
    // const id = +this.route.snapshot.paramMap.get('id')
    this.userService.getUser(this.data.id)
      .subscribe(user => this.user = user)
  }
  
  save(): void {
    console.log('inside user-detail.component.ts' + this.user.Id);
    this.userService.updateUser(this.user)
      .subscribe(() => this.onCancelClick())
  }
  
  onCancelClick(): void {
    this.dialogRef.close();
  }
  

}
