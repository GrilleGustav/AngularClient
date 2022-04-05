/**
 * Email server add request.
 */
 export interface EmailServerAddRequestModel {
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
     * Flag indicating default server.
     */
    default: boolean;

    /**
     * Cocurrency stamp.
     */
    concurrencyStamp: string;
}