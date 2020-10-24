import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user$: BehaviorSubject<undefined | User> = new BehaviorSubject<undefined | User>(undefined);

  public constructor() {

    setTimeout(()=>{
      const user: User = { id: "id", name: "John Deo" };
      this.user$.next(user);
    },4000)

  }
}
