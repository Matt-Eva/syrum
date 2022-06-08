class StepSerializer < ActiveModel::Serializer
  attributes :id, :number, :instructions, :product_id, :routine_id
end
