class UsersController < ApplicationController

    # POST / signup 
    def signup 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: 201
    end

    def me
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render_unauthorized
        end
    end 

    private

    def user_params
      params.permit(:id, :username, :name, :password)
    end

end
