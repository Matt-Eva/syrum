class RoutinesController < ApplicationController

    def index
        user = User.find(params[:user_id])

        routines = user.routines
        render json: routines
    end

    def show
        user = User.find(params[:user_id])

        routine = user.routines.find_by(id: params[:id])
        render json: routine
    end

    def create 
        user = User.find(session[:user_id])
        new_routine = user.routines.create!(routine_params)
        render json: new_routine, status: :created
    end 

    def destroy
        routine = Routine.find_by(id: params[:id])
        routine.destroy
        head :no_content
    end

    def discover
        random_routines = Routine.order("RANDOM()").first(3)
        render json: random_routines
    end 
    
    private

    def routine_params
        params.permit(:title, :description)
    end 


end
