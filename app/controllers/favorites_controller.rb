class FavoritesController < ApplicationController

    def index
        user = User.find(session[:user_id])

        favorites = user.favorited_routines
        render json: favorites
    end

    def create
        current_user = User.find(session[:user_id])
        fav_routine = Routine.find(params[:routine_id])

        new_follow = Favorite.create!(user: current_user, routine: fav_routine)
        render json: {}, status: :created
    end

end
