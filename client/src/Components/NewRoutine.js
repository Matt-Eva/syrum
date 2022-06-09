import { useState } from 'react'

const NewRoutine = () => {

    const [formData, setFormData] = useState('')

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData({...formData, [name]: value})
      }

    // console.log(formData)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        const newRoutine = {
            title: formData.title,
            description: formData.description
        }
        // fetch('')
        // get form data
        // post to backend
        // get id of new routine
        // navigate to /users/1/routines/{new_id}
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
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
        {/* <AddStep routine={routine} /> */}
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default NewRoutine;
