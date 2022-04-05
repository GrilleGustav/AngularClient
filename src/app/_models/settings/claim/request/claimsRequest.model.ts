/**
 * Claims request.
 */
export interface ClaimsRequestModel {
    /**
     * Claims.
     */
    claims: string[];

    /**
     * Role id.
     */
    roleId: string;
}