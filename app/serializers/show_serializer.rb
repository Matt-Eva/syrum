class ShowSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :products, :following

  def following
    puts @options
   false
  end

end
