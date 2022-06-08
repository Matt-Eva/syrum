class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :description
end
