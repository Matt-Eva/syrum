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

    def create 
        user = User.find(session[:user_id])
        product = Product.create!(product_params)
        render json: product, status: :created
    end 

    def destroy
        product = Product.find_by(id: params[:id])
        product.destroy
        head :no_content
    end 

    private 

    def product_params
        params.permit(:name, :brand, :ingredients, :notes, :user_id)
    end
end
