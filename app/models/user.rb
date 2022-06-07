class User < ApplicationRecord

    has_many :products
    has_many :routines
    has_many :steps, through: :routines

end
