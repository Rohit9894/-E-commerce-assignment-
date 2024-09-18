import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      <AllRoutes/>
    </div>
  );
};

export default App;
