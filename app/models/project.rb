class Project < ApplicationRecord
    validates :user_id, :project_name, presence: true
    belongs_to :user
    has_many :stories
    
end
