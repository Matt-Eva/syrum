class Step < ApplicationRecord

    has_one :product
    belongs_to :routine
    
end
