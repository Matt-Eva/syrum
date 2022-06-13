class StepSerializer < ActiveModel::Serializer
  attributes :id, :number, :instructions, :routine_id

  belongs_to :product
  belongs_to :routine

end
