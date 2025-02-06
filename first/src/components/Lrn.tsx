interface Person {
    name: string;
    age: number;
  }
  
  interface LrnProps {
    person1: Person;
    person2: Person & { emoji: string };
  }

const Lrn = ({ person1, person2 }: LrnProps) => {
  return (
    <div>
      <p>hello my name is {person1.name}</p>
      <p>my age is {person1.age}</p>
      <p>
        hello my name is {person2.name}
        {person2.emoji}
      </p>
      <p>my age is {person2.age}</p>
    </div>
  );
};

export default Lrn;
