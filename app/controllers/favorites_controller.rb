class FavoritesController < ApplicationController

    def index
        user = User.find(session[:user_id])

        favorites = user.favorited_routines
        render json: favorites
    end

end
