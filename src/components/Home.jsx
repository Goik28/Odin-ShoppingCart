import { Link } from "react-router-dom";
import "./Home.css";

export function Home() {
  return (
    <main className="home">
      <h1>
        This is <span>ANOTHER</span> fake store!
        <p>
          Actually this is just so the developer could practice his{" "}
          <span>REACT</span> skills. Read the footer dudes!
        </p>
      </h1>
      <div className="clipPath"></div>
      <h2>
        Here, we <span>PRETEND</span> to sell fake stuff.
        <p className="checkItems">
          <Link to={"/products"}>Check our items!</Link>
        </p>
      </h2>
    </main>
  );
}
