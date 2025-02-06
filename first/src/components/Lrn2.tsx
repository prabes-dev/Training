
const Lrn2 = () => {
    const Fruits = [
    {
      name: "apple",
      color: "red",
      price: 1.2,
    },
    {
      name: "banana",
      color: "yellow",
      price: 0.5,
    },
    {
      name: "grapes",
      color: "green",
      price: 2.5,
    },
    ]
  return (
    <div>
        {Fruits.map((element) => {
            return (
                <div>
                    <li key={element.name}>{element.name}</li>
                    <li key={element.color}>{element.color}</li>
                    <li key={element.price}>{element.price}</li>
                </div>
            )
        })}
    </div>
  )
}

export default Lrn2