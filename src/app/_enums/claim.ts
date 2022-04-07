/**
 * Application claims. Used on router to indicate wich cliam nedded to access route.
 * Can used in each other situation, who needs rights to access.
 */
 export enum Claim{
    User = 'User',
    Administrator = 'Administrator',
    View ='View',
    Create = 'Create',
    Update = 'Update',
    Delete = 'Delete',
    EmailServerView = 'EmailServerView',
    EmailServerCreate = 'EmailServerCreate',
    EmailServerUpdate = 'EmailServerUpdate',
    EmailServerDelete = 'EmailServerDelete',
    EmailTemplateView = 'EmailTemplateView',
    EmailTemplateCreate = 'EmailTemplateCreate',
    EmailTemplateUpdate = 'EmailTemplateUpdate',
    EmailTemplateDelete = 'EmailTemplateDelete',
    EmailMessagesView = 'EmailMessagesView',
    UserView = 'UserView',
    UserCreate = 'UserCreate',
    UserUpdate = 'UserUpdate',
    UserDelete = 'UserDelete',
    UserRoleAdd = 'UserRoleAdd',
    UserRoleUpdate = 'UserRoleUpdate',
    UserClaimUpdate = 'UserClaimUpdate',
    RoleViwew = 'RoleView',
    RoleCreate = 'RoleCreate',
    RoleUpdate = 'RoleUpdate',
    RoleDelete = 'RoleDelete'
}