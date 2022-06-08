class RoutinesController < ApplicationController

    def index
        user = User.find(params[:user_id])

        routines = user.routines
        render json: routines
    end
end
