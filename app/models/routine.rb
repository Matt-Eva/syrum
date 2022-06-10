class Routine < ApplicationRecord
    
    belongs_to :user
    has_many :steps, dependent: :destroy
    # has_many :products, through: :steps

    # validates :steps, presence: true


end
