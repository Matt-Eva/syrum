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

    def create
        current_user = User.find(session[:user_id])
        followed_user = User.find(params[:followed_user_id])

        Follow.create!(follower: current_user, followed_user: followed_user)
        render json: {}, status: :ok
    end

end
