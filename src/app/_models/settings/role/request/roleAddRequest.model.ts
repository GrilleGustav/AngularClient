/**
 * Role add request.
 */
 export interface RoleAddRequestModel {
    /**
     * Role name.
     */
    name: string;

    /**
     * Role description.
     */
    description: string;

    /**
     * Role claims.
     */
    claims: string[];
}