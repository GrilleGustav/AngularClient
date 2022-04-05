import { EmailTemplateType } from "src/app/_enums/emailTemplateType";
import { Language } from "src/app/_enums/language";

/**
 * Emial template.
 */
export interface EmailTemplateUpdateRequestModel {
    /**
     * Template id.
     */
    id: number;

    /**
     * Template name.
     */
    name: string;

    /**
     * Template description.
     */
    description: string;

    /**
     * Template content.
     */
    content: string;

    /**
     * Template language.
     */
    language: Language;

    /**
     * Indicates default template.
     */
    default: boolean;

    /**
     * Descripes the type of template.
     */
    emailTemplateType: EmailTemplateType;

    /**
     * Indicates the template is predefined.
     */
    predefined: boolean;

    /**
     * Sender id.
     */
    emailSenderId: number;

    /**
     * Cocurrency stamp.
     */
    concurrencyStamp: string;
}