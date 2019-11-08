export const getProjects = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/projects`
    });
};

export const createProject = (project) => {
    return $.ajax({
        method: "POST",
        url: `/api/users/${project.user_id}/projects`,
        data: { project }
    });
};