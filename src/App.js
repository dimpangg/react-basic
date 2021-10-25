import "./App.css";

function App() {
  return (
    <div className="ParentBox">
      <FotoProduk />
      <ProdukInfo category="Lebaran" name="Youdora Dora" />
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

function ProdukInfo(props) {
  const { category, name } = props;
  return (
    <div className="Desc">
      <p className="cafe">{category}</p>
      <h1 className="title">{name}</h1>
      <p className="price">IDR 73.309.999</p>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
        recusandae. Corporis officiis unde hic incidunt. Molestias magni
        reprehenderit itaque libero, numquam eos odit at sint et consequatur
        dolorum quia est!
      </p>
      <a onClick={(e) => TambahCart(e)} href="#">
        Add to Cart
      </a>
    </div>
  );
}

function TambahCart(e) {
  e.preventDefault();
  console.log("Membeli Produk");
}

export default App;
