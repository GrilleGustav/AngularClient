import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthenticationService } from "../_services/authentication.service";

/**
 * Adds access token on each request to api.
 */
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authentication: AuthenticationService) {}

    /**
     * 
     * @param request An outgoing HTTP request with an optional typed body.
     * @param next Transforms an HttpRequest into a stream of HttpEvents, one of which will likely be a HttpResponse.
     * @returns Http request with access token added.
     */
    intercept(request:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isLoggegIn = this.authentication.isUserAuthenticated();
        const isApiUrl = request.url.startsWith(environment.apiUrl);

        if (isLoggegIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
        }

        return next.handle(request);
    }
}