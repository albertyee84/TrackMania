class Story < ApplicationRecord
    validates :name, :description, presence: true
    belongs_to :user,
    foreign_key: :requestor_id,
    class_name: :User

    belongs_to :project

end
