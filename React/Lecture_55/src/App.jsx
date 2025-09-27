import "./App.css";

function Product({title, price}) {
  return (
    <>
      <h1>{title}</h1>
      <h3>{price}</h3>
    </>
  );
}

function App({shoeDat}) {
  return (
    <>
    {/* {shoeData.map((data) => {
      return <Product title={data.title} price={data.price} />
    })} */}

    {/* {shoeData.map(data => (
      <Product title={data.title} />
    ))} */}

    {shoeDat.map(data => <Product key={data.id} title={data.title} price={data.price} />)}


    </>
  );
}

export default App;
