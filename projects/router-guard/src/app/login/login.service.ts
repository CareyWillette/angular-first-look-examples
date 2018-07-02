import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { UserProfileService } from './user-profile.service';

@Injectable()
export class LoginService {
  constructor(private userProfileService: UserProfileService) {}

  login() {
    return Observable.of(true).pipe(
      delay(1000),
      tap(this.toggleLogState.bind(this))
    );
  }

  logout() {
    this.toggleLogState(false);
  }

  private toggleLogState(val: boolean) {
    this.userProfileService.isLoggedIn = val;
  }
}
