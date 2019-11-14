class Project < ApplicationRecord
    validates :user_id, presence: true
    validates :project_name, presence: true, uniqueness: true
    belongs_to :user
    has_many :stories
    
end
