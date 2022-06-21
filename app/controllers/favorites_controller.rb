class FavoritesController < ApplicationController

    def index
        user = User.find(session[:user_id])

        favorites = user.favorited_routines
        render json: favorites
    end

    def create
        current_user = User.find(session[:user_id])
        fav_routine = Routine.find(params[:routine_id])

        new_favorite = Favorite.create!(user: current_user, routine: fav_routine)
        render json: new_favorite, status: :created
    end

    def destroy 
        favorite = Favorite.find(params[:id])
        favorite.destroy
        head :no_content
    end 

end
