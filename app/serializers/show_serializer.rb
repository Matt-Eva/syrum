class ShowSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :products, :show_follow

  def show_follow
    @instance_options[:show_follow]
  end

end