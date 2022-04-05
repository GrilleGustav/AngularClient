import { ErrorResponse } from "../errorResponse.model";

/**
 * Token response.
 */
export interface TokenResponse extends ErrorResponse{
    /**
     * Access token.
     */
    token: string;

    /**
     * Refresh token.
     */
    refreshToken: string;
}