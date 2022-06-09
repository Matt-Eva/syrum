class StepsController < ApplicationController

    def index
        user = User.find(params[:user_id])
        routine = Routine.find(params[:routine_id])

        steps = user.steps
        render json: steps
    end


end
