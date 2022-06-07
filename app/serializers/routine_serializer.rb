class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :time_of_day, :reason, :notes
end
