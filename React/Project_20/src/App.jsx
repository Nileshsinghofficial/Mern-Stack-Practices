// import { useEffect } from "react";
import Head from "./components/Head";
import Body from "./components/Body";

function App() {

  // useEffect(
  //   () =>
  //     async function fetchData() {
  //       try {
  //         const data = await fetch(
  //           "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //         );
  //         const result = await data.json();
  //         // console.log(result);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  // );

  return (
    <div>
      <Head />
      <Body />

    </div>
  );
}

export default App;

 