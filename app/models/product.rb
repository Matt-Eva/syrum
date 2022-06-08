class Product < ApplicationRecord

    belongs_to :user
    has_many :steps

    # validates :name, presence: true
    # validates :brand, presence: true
    # validates :ingredients, presence: true
    # validates :user_id, presence: true
    

end
