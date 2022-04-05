/**
 * Email sender add request.
 */
 export interface EmailSenderAddRequestModel {
    /**
     * Email server id.
     */
    emailServerId: number;

    /**
     * Sender address.
     */
    sender: string;
}