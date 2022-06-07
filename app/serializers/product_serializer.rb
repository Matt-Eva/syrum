class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :ingredients, :notes, :user_id
end
