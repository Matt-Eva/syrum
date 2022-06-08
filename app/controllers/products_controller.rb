class ProductsController < ApplicationController
    def show
        product = Product.find_by(id: params[:id])
        render json: product
    end

    def index
        user = User.find(params[:user_id])

        products = user.products
        render json: products
    end
end
