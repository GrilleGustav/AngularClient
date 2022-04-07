/**
 * Email confirm link request.
 */
 export interface EmialConfirmLinkRequestModel {
    /**
     * User email.
     */
    email: string;

    /**
     * Url to client route for email confirmation.
     */
    clientURI: string;
}