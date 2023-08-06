import { createSignal } from "solid-js";
import banner from "./assets/banner.png";
import Card from "./components/Card";

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme())
  }
  return (
    <>
      <div class="container m-auto">
        <header
          class="my-4 p-2 text-xl flex items-center gap-4"
          classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme()}}
        >
          <span class="material-symbols-outlined cursor-pointer" onClick={toggleTheme} >
            light_mode
          </span>
          <h1>Kaizen Shop</h1>
        </header>

        <img class="rounded-md" src={banner} alt="" />
        <div class="grid grid-cols-4 gap-10 my-4">
          {/*<Card title="Red Tee"/>*/}

          <Card rounded={true} flat={false}>
            <h2>Green Tee</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              dolorem, inventore qui debitis alias pariatur!
            </p>
            <button class="btn">View</button>
          </Card>
          <Card rounded={false} flat={true}>
            <h2>Blue Tee</h2>
            <button class="btn">View</button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              dolorem, inventore qui debitis alias pariatur!
            </p>
            <p>Only $9.99</p>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
