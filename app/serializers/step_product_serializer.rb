class StepProductSerializer < ActiveModel::Serializer
  attributes :id, :number, :instructions

  belongs_to :product
end
