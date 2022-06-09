class StepSerializer < ActiveModel::Serializer
  attributes :id, :number, :instructions

  belongs_to :product

  # def product
  #   self.product
  # end
end
