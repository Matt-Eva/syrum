import OneStep from "./OneStep";

const RoutineItem = ({ routine }) => {
  const { title, description, steps } = routine;

  const stepList = steps.map((step) => {
    return <OneStep step={step} />;
  });

  return (
    <div>
      <h1>Title: {title}</h1>
      <h2>description: {description}</h2>
      <ul>{stepList}</ul>
    </div>
  );
};

export default RoutineItem;
