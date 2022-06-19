class User < ApplicationRecord

     
    has_many :routines
    has_many :steps, through: :routines
    # has_many :products, through: :steps
    has_many :products
    has_many :favorites
    # has_many :routines, through: :favorites
    has_many :favorited_routines, through: :favorites, source: :routine

        # returns an array of follows a user gave to someone else
    has_many :given_follows, foreign_key: :follower_id, class_name: "Follow"
    
    # returns an array of other users who the user has followed
    has_many :followed_users, through: :given_follows, source: :followed_user

    # Will return an array of follows for the given user instance
    has_many :received_follows, foreign_key: :followed_user_id, class_name: "Follow"

    # Will return an array of users who follow the user instance
    has_many :followers, through: :received_follows, source: :follower

    validates :username, presence: true, uniqueness: true

    has_secure_password

    def show_follow?(followed_user)
        self != followed_user && Follow.where(follower: self, followed_user: followed_user).none?
    end

    def favorited?(routine)
        favorited_routines.where(id: routine.id).any?
    end

end
