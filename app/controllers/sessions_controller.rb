class SessionsController < ApplicationController

    def login
        user = User.find_by(name: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else 
            render json: { errors: "not authorized"}, status: 401
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
