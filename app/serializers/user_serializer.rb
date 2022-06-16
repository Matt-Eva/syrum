class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :products, :following

  def following
    true #@options[:following] || false
  end

end
