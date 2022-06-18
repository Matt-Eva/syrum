class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :products, :following

  def following
    true #@options[:following] || false
  end

end
