/**
 * User calim update request.
 */
 export interface UserClaimsUpdateRequestModel {
    /**
     * User id.
     */
    userId: string;

    /**
     * Claim.
     */
    claims: string[];
}