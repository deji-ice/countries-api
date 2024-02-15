import axios from "axios";
import { useState } from "react";

const Test = () => {
  const [formData, setFormData] = useState({
    title: "",
    userId: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("https://jsonplaceholder.typicode.com/posts/", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex w-screen justify-center">
      <form
        className=" *:border *:pl-1 *:border-slate-900 gap-5 *:rounded-md flex flex-col w-80"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="userId"
          value={formData.userId}
          placeholder="User Id"
          onChange={handleChange}
        />
        <textarea
          placeholder="body"
          value={formData.body}
          name="body"
          rows={10}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-400 text-white py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Test;
