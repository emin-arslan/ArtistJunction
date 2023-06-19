import Container from "./components/Container";
import Navi from "./components/Navi";

function App() {
  return (
    <div className="2xl:container xl:container md:container lg:container sm:w-full mx-auto h-screen text-white  ">
     <Navi/>
     <Container/>
    </div>
  );
}

export default App;
