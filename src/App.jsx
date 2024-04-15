import Card from "./components/Card";
import Header from "./components/Header";
import Video from "./components/Video";

function App() {
  return (
    <div className="lg:mx-10 md:mx-5 sm:mx-2">
      <Header />
      <div className="grid grid-cols-2 max-h-9">
        <Card />
        <Video />
      </div>
    </div>
  );
}

export default App;
