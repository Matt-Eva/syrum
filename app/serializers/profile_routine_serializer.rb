class ProfileRoutineSerializer < ActiveModel::Serializer
  attributes :id, :user, :title, :description, :favorited

  # def favorited
  #   @instance_options[:favorited]
  # end


end
