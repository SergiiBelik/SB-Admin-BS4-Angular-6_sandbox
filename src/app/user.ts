export class User {
    Id: number;
    UserName: string;
    FirstName: string;
    LastName: string;
    EntityType: {
        EntityTypeId: number,
        EntityTypeName: string,
        EntityTypeCode: string
    };
    ParentEntityId: string;
    UserRoleType: {
        RoleTypeId: number,
        EntityTypeId: number,
        RoleTypeName: string,
        RoleTypeCode: string
        }
}