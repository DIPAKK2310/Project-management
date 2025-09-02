export const UserRollesEnum = {
  Admin: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBER: "member"

}
// Passing the object values to an array for easier use in components using object.values() 
export const AvailableUserRole = Object.values(UserRollesEnum); 

export const TaskStatusEnum = {
    TODO: "todo",
    IN_PROGRESS: "in_progress",
    DONE: "done"
}

export const AvailableTaskstatues = Object.values(TaskStatusEnum);

