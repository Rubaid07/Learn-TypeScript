// type UserRole = 'Admin' | 'Editor' | 'Viewer';
enum UserRole {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer'
}

const canEdit = (role: UserRole) => {
    if(role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    } else return false;
}

const isEditPermitted = canEdit(UserRole.Editor);
console.log(isEditPermitted);