// as const assertion function 

// enum UserRole {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer'
// }
const UserRoles = {
    Admin : 'Admin',
    Editor : 'Editor',
    Viewer : 'Viewer'
} as const;

const canEdits = (role: keyof typeof UserRoles) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else return false;
}

const isEditPermissable = canEdits(UserRoles.Editor);
console.log(isEditPermissable);