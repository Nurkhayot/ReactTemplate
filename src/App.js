import "./App.scss";

// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

//Images
import rasm from "./Assets/Images/rasm.jpg";

// SVG
import Apple from "./Components/Lib/Svg/Random";

function App() {
  const spacing = 50;
  return (
    <>
      <Header />
      <main>
        Main
        <img
          className="rasm"
          src={rasm}
          width="100%"
          alt="inforamtion"
          style={{ marginBottom: 5, marginTop: spacing }}
        />
        <Apple width={200} height={100} />
      </main>
      <Footer />
    </>
  );
}

export default App;
