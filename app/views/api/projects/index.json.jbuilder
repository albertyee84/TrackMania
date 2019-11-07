debugger
@projects.each do |project|
    json.set! project.id do 
        json.extract! project, :user_id, :project_name
    end
end