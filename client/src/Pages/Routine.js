import NewRoutine from "../Components/NewRoutine";

const Routine = ({ user, addNewRoutine, formData, setFormData }) => {
  return (
    <NewRoutine
      user={user}
      formData={formData}
      setFormData={setFormData}
      addNewRoutine={addNewRoutine}
    />
  );
};

export default Routine;
