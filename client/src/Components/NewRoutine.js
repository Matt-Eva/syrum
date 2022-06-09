const NewRoutine = ( { addNewRoutine, setFormData, formData } ) => {

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData({...formData, [name]: value})
      }

  return (
    <>
      <form onSubmit={addNewRoutine}>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Routine Title"
          value={formData.title}
        />
        <input
          onChange={handleChange}
          type="text"
          name="description"
          placeholder="Routine description"
          value={formData.description}
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default NewRoutine;
