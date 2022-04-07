/**
 * Email message.
 */
 export interface EmailMessageViewModel {
    /**
     * Date the email was sent.
     */
    sendOn: Date;

    /**
     * Receiver email address.
     */
    receiver: string;

    /**
     * Sender email address.
     */
    from: string;

    /**
     * Email subject.
     */
    subject: string;

    /**
     * Email content.
     */
    content: string;

    /**
     * Indicates email was sent.
     */
    isSend: boolean;
}