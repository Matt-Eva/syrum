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

    def routine_steps
        user = User.find(params[:user_id])

        routines = user.routines.steps
        render json: routines
    end


end
