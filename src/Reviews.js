import React from "react";

export default function Reviews() {
  const users = [
    {
      id: 1,
      name: "Masayoshi",
      review: "Harganya murah tapi kualitas bukan kaleng-kaleng",
    },
    {
      id: 2,
      name: "Masay",
      review: "Harganya murah tapi kualitas bukan kaleng-kaleng",
    },
    {
      id: 3,
      name: "Masayomi",
      review: "Harganya murah tapi kualitas bukan kaleng-kaleng",
    },
  ];
  const listUsers = users.map((item) => (
    <div className="Item" key={item.id}>
      <img
        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="User">
        <h3>{item.name}</h3>
        <p>{item.review}</p>
      </div>
    </div>
  ));

  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listUsers}
    </div>
  );
}
