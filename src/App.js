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
    <div class="Foto">
      <img src="basketball.jpg" alt="" />
    </div>
  );
}

function ProdukInfo(props) {
  const { category, name } = props;
  return (
    <div class="Desc">
      <p class="cafe">{category}</p>
      <h1 class="title">{name}</h1>
      <p class="price">IDR 73.309.999</p>
      <p class="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
        recusandae. Corporis officiis unde hic incidunt. Molestias magni
        reprehenderit itaque libero, numquam eos odit at sint et consequatur
        dolorum quia est!
      </p>
    </div>
  );
}

export default App;
