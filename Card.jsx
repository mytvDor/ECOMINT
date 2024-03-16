import React, { useEffect, useState } from "react";
import "../component/allStyle/Card.css";

// import "../component/allStyle/ManageCard.css";

// W:\dev\NodePractice -II\ECOMINT\server\upload\

// import "../assets/react.svg"

const Card = () => {
  const [data, setData] = useState([]);

  const [cartCount, setCartCount] = useState(0);
  let alldata;

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    console.log(cartCount);
  };

  const fetchDta = async () => {
    try {
      const response = await fetch("http://localhost:9000/getProduct");

      if (response.ok) {
        alldata = await response.json();
        setData(alldata);

        console.log(data);
      } else {
        console.error("failed to fetch ");
      }
    } catch (err) {
      console.log("error at fetching", err);
    }
  };

  // fetchDta();
  useEffect(() => {
    fetchDta();
  }, []);

  return (
    <div className="container">
      {data.map((p) => (
        <div className="product-card" key={p.prodid}>
          <div className="product-image">
            <img src={`http://localhost:9000/O.jpg`} alt={p.title} />

            {/* src={`http://localhost:9000/${p.img}`} */}
          </div>
          <div className="product-details">
            <h3>{p.title}</h3>
            <h5>{p.des}</h5>
          </div>
          <div className="product-price">
            <span>${p.price}</span>
          </div>
          <div className="add-to-cart">
            <button>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

// import React, { useEffect, useState } from "react";
// import "../component/allStyle/Card.css";

// const Card = () => {
//   const [data, setData] = useState([]);

//   const fetchDta = async () => {
//     try {
//       const response = await fetch("http://localhost:9000/getProduct");

//       if (response.ok) {
//         const alldata = await response.json();
//         setData(alldata);
//       } else {
//         console.error("Failed to fetch data");
//       }
//     } catch (err) {
//       console.log("Error while fetching data", err);
//     }
//   };

//   useEffect(() => {
//     fetchDta();
//   }, []);

//   return (
//     <div className="container">
//       {data.map((p) => (
//         <div className="product-card" key={p.prodid}>
//           <div className="product-image">
//             <img src={`http://localhost:9000/${p.img}`} alt={p.title} />
//           </div>
//           <div className="product-details">
//             <h3>{p.title}</h3>
//             <h5>{p.des}</h5>
//           </div>
//           <div className="product-price">
//             <span>${p.price}</span>
//           </div>
//           <div className="add-to-cart">
//             <button>Add To Cart</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;
