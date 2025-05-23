import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
   const [text, setText] = useState("")
   const [category, setCategory] = useState(categories?.find((category) => category !== "All") || "")

   function handleSubmit(e) {
    e.preventDefault()
    const newTask = { text, category }
    onTaskFormSubmit(newTask)
    setText("")
    setCategory(categories[1])
   }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e)=> setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
     {(categories || [])
  .filter((category) => category !== "All")
  .map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
))}

        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;