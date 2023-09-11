import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { UserSchema } from '../users.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: UserSchema = {}
  originalUser : UserSchema={}
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      const { id } = res
      console.log(id);
      this.existingUser(id)
     
    })
  }
    existingUser(id:any){
      this.api.getExistingUser(id).subscribe({
        next: (res: UserSchema) => {
          this.user=res
        },
        error: (err: any) => {
          console.log(err);
          alert(`cannot perform the actio now....`)

        }
      })

    }
  updateUser() {
    this.api.updateuser(this.user.id, this.user).subscribe({
      next: (res: any) => {
        console.log(res);
        alert(`user details udate successfully`)

      },
      error: (err: any) => {
        console.log(err);
        alert(`cannot perform the action now..please try after some time`)

      }
    })
  }
  cancelUpdate(userId:any) {
    console.log(`cancel clicked`);
    this.existingUser(userId)
    
    
}
}
