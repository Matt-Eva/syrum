class ShowSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :products, :following

  def following
    @instance_options[:following]
  end

end