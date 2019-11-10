export const getProjects = (project) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${project.userId}/projects`,
        data: { project }
    });
};

export const createProject = (project) => {
    return $.ajax({
        method: "POST",
        url: `/api/users/${project.user_id}/projects`,
        data: { project }
    });
};

export const updateProject = (project) => {
    debugger
    return $.ajax({
        method: "PATCH",
        url: `api/users/${project.user_id}/projects/${project.id}`,
        data: { project }
    });
};

export const searchProject = (params) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${params.user_id}/projects/${params.search}`,
    });
};

