/**
 * Role.
 */
 export interface RoleViewModel {
    /**
     * Role id.
     */
    id: string;

    /**
     * Role name.
     */
    name: string;

    /**
     * Role description.
     */
    description: string;

    /**
     * Concurrency stamp.
     */
    concurrencyStamp: string;
}