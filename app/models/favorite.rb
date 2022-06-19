class Favorite < ApplicationRecord

    belongs_to :user, foreign_key: :user_id

    belongs_to :routine, foreign_key: :routine_id
end
