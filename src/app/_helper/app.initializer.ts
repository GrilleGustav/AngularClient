import { AuthenticationService } from "../_services/authentication.service";

/**
 *  Used to automatic logon of user if refresh token is valid and   exist. Otherwise opens login page.
 * @param authenticationService Instance to authentification service.
 * @returns nothing or token response with access and refresh token.
 */
export function appinitializer(authenticationService: AuthenticationService): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise((resolve, reject) => {
            authenticationService.refreshToken()
                .then(response => resolve(response));
        });
    };
}