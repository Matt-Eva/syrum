class StepsController < ApplicationController

    def index
        user = User.find(params[:user_id])
        routine = Routine.find(params[:routine_id])

        steps = user.steps
        render json: steps
    end

    # def new_step 
    #     user = User.find(session[:user_id])
    #     routine = Routine.find(params[:routine_id])

    #     step = user.steps.create!(step_params)
    #     render json: new_routine, status: :created
    # end 

    def step_params
        params.permit(:number, :instructions, :product_id, :routine_id, :user_id)
    end 

end
