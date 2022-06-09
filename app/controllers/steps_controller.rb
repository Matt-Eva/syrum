class StepsController < ApplicationController

    def index
        user = User.find(params[:user_id])
        routine = Routine.find(params[:routine_id])

        steps = user.steps
        render json: steps
    end

    def create 
        user = User.find(session[:user_id])
        routine = Routine.find(params[:routine_id])
        product = Product.find(params[:product_id])

        step = Step.create!(step_params)
        render json: step, status: :created
    end 

    def step_params
        params.permit(:number, :instructions, :product_id, :routine_id)
    end 

end
