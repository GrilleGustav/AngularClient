import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../_services/authentication.service";

/**
 * Check user rights.
 */
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    authorized: boolean = false;

    /**
     * Check user rights.
     * @param _authService Authentication service, used to manage user authenfification state.
     * @param _router A service that provides navigation among views and URL manipulation capabilities.
     * @param _snackBar Service to dispatch Material Design snack bar messages.
     */
    constructor(private _authService: AuthenticationService, private _router: Router, private _snackBar: MatSnackBar) {}

    /**
     * 
     * @param route Contains the information about a route associated with a component loaded in an outlet at a particular moment in time.
     * @param state Represents the state of the router at a moment in time.
     * @returns Returns true if the user is logged in and have the rights to access the resource. If user not logged in sends him to login page.
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.authorized = false;
        if (this._authService.isUserAuthenticated()) {
           let roles = this._authService.getRolesfromUser();
            if (typeof roles === 'string') {
                if (route.data[roles] && route.data[roles].some(x => x === roles)) {
                    this.authorized  = true;
                }
            }
            else {
                roles.forEach((role: string) => {
                    if (route.data[roles] && route.data[roles].some(x => x === role)) {
                        this.authorized = true;
                    }
                });
            }
            if (this.authorized) {
                return true;
            }
            let snackBarRef = this._snackBar.open("Access denied. Please contact an admin for the required rights.", 'Info', { duration: 3000 });
            return false;
        }

        if (this.authorized) {
            return true;
        }
        this._authService.sendAuthStateChangeNotification(false); 
        this._router.navigate(['/user/login'], { queryParams: { returnUrl: state.url }}); // If user not logged in sends him to login page. 
        return false;
    }
}