class SessionsController < ApplicationController

    def login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else 
            render json: { errors: "Incorrect username or password!"}, status: 401
        end 
    end 

    def logout
        if session[:user_id]
            session.destroy
            head :no_content
        else 
            render_unauthorized
        end 
    end 


end
