import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { RestService } from "../services/rest.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private rest: RestService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)

  {
    const currentUser = this.rest.getUserFromSession()
	const platform_client = this.rest.getClientPlatformFromSession();
    if (currentUser || platform_client ) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
	console.log('Navigationg heare');
    this.router.navigate(["/login"], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }
}
