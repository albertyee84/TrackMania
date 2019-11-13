export const getStories =  (story ) => {
    return $.ajax({
        method: "GET",
        url: `/api/stories`,
        data: { story }
    });
};

export const createStory = story => {
    return $.ajax({
        method: "POST",
        url: `/api/stories`,
        data: { story }
    });
};

export const updateStory = story => {
    return $.ajax({
        method: "PATCH",
        url: `/api/stories/${story.id}`,
        data: { story }
    });
};

export const deleteStory = story => {
    return $.ajax({
        method: "DELETE",
        url: `/api/stories/${story.id}`,
    });
};