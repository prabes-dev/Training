import Lrn from "../components/Lrn";
import Lrn2 from "../components/Lrn2";


const PropsT = () => {

  const person1 = {
    name: "John",
    age: 20,
  };
  const person2 = {
    name: "sia",
    age: 25,
    emoji: "😊",
  };
  
  return (
    <>
      <Lrn 
      person1={person1}
      person2={person2}
     />

     <Lrn2 />
    </>
  );
};

export default PropsT;
