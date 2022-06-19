class RoutineSerializer < ActiveModel::Serializer
  attributes :id, :user, :title, :description, :steps

  def steps
    object.steps.collect do |step|
      { :id => step.id, :number => step.number, :instructions => step.instructions, :product => step.product}
    end
  end


end
