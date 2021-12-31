import "./App.css";
import { useEffect, useState } from "react";
import TableCustom from "./components/TableCustom";

const MySuspense = ({ children, fallback, isLoading }) => {
  useEffect(() => {
    console.log("Suspense.js");
  }, [isLoading]);
  return isLoading ? fallback : children;
};
function App() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    console.log("App.js");
  }, []);
  return (
    <div className="App">
      <MySuspense isLoading={isLoading} fallback={<h1>Loading...</h1>}>
        <TableCustom />
      </MySuspense>
    </div>
  );
}

export default App;
