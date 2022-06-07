class User < ApplicationRecord

    has_many :products
    has_many :routines
    has_many :steps, through: :routines

    validates :username, presence: true, uniqueness: true

    has_secure_password

end
