json.set! @project.id do 
    json.extract! @project, :user_id, :project_name, :id, :archived
end