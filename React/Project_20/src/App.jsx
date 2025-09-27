import { useEffect } from "react";

function App() {
  useEffect(
    () =>
      async function fetchData() {
        try {
          const data = await fetch(
            "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
          const result = await data.json();
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      }
  );

  return <h1>hello</h1>;
}

export default App;

// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await fetch(
//           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//         );
//         const result = await data.json();
//         console.log(result);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     }

//     fetchData();
//   }, []);

//   return <h1>hello</h1>;
// }

// export default App;
