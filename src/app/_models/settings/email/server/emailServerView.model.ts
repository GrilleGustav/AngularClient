/**
 * Email server view model.
 */
 export interface EmailServerViewModel {
    /**
     * Id.
     */
    id: number;

    /**
     * Server ip address.
     */
    serverIp: string;

    /**
     * Server port address.
     */
    serverPort: string;

    /**
     * Email server login name.
     */
    serverUsername: string;

    /**
     * Email server login password.
     */
    serverPassword: string;

    /**
     * Server description.
     */
    description: string;

    /**
     * Indicates default server.
     */
    default: boolean;

    /**
     * Cocurrency stamp.
     */
    concurrencyStamp: string;
}