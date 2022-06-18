class UsersController < ApplicationController

 
    # POST /signup
    def signup 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: 201
    end     

    def me
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end 

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        current_user = User.find(session[:user_id])
        render json: user, status: :ok, serializer: ShowSerializer, following: current_user.following?(user.id)
    end 

  

    # USERS FOLLOWING ME
    # def my_followers
    #     user = User.find(session[:user_id])
    #     render json: user.followers, status: :ok
    # end 

    # # USERS I AM FOLLOWING
    # def my_following
    #     user = User.find(session[:user_id])
    #     render json: user.followed_users
    # end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :id)
    end 

end
