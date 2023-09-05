function MainContent() {
  return <h1>I`m learning React!</h1>;
}

const Shop = (
  <nav>
    <h1>Poro Shop</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contanct</li>
    </ul>
  </nav>
);

ReactDOM.render(Shop, document.getElementById("root"));
