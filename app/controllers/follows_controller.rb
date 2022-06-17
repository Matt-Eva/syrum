class FollowsController < ApplicationController

    # users following this user
    def my_followers
        user = User.find(params[:id])
        render json: user.followers, status: :ok
    end

     # USERS this user is FOLLOWING
    def my_following
        user = User.find(params[:id])
        render json: user.followed_users
    end

end
