class Step < ApplicationRecord

    belongs_to :product
    belongs_to :routine
    # belongs_to :user
    #:inverse_of=>:steps

end
