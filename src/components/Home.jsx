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
      <h2>
        Here, we <span>PRETEND</span> to sell fake products,{" "}
          <a href="/products"> check our items!</a>
      </h2>
    </main>
  );
}
