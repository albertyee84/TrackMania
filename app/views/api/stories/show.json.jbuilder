json.set! @story.id do
    json.extract! @story, :id, :project_id, :name, :status, :description, :labels, :requestor_id
end