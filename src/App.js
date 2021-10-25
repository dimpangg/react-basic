import "./App.css";

function App() {
  return (
    <div className="ParentBox">
      <FotoProduk />
      <ProdukInfo isDiscount="coming" category="Lebaran" name="Youdora Dora" />

      <ReviewItems />
    </div>
  );
}

function ReviewItems() {
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

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="basketball.jpg" alt="" />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount === "yes") {
    return <p>Diskon 50% Off</p>;
  } else if (isDiscount === "coming") {
    return <p>Akan ada Diskon</p>;
  } else {
    return <p>Belum ada Diskon</p>;
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = [
    "Tidak kusut terkena air",
    "Bahan lebih halus",
    "Tidak gerah",
  ];
  const listBenefits = benefits.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return (
    <div className="Desc">
      <p className="cafe">{category}</p>
      <h1 className="title">{name}</h1>
      <p className="price">IDR 73.309.999</p>
      <CheckDiscount isDiscount={isDiscount} />
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
        recusandae. Corporis officiis unde hic incidunt. Molestias magni
        reprehenderit itaque libero, numquam eos odit at sint et consequatur
        dolorum quia est!
      </p>
      <ul>{listBenefits}</ul>
      <a onClick={(e) => TambahCart(e, name)} href="#">
        Add to Cart
      </a>
    </div>
  );
}

function TambahCart(e, name) {
  e.preventDefault();
  console.log("Membeli Produk " + name);
}

export default App;
