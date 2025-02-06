import { useState } from "react";
// type fixany = React.ChangeEvent<HTMLInputElement>;
type fixany = React.MouseEvent<HTMLButtonElement>;
const Form = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const handleSummit = (e:fixany) => {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <form>
        <p>{name.firstName}-{name.lastName}</p>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <button onClick={(e) => handleSummit(e)}>summit</button>
      </form>
    </div>
  );
};

export default Form;
