import Header from "./components/header/Header";
// import SearchField from "./components/search-field/SearchField";
import ItemsList from "./components/to-dos/ItemsList";



function App() {
  return (
    <div className="App">
      <Header />
      {/* <SearchField /> */}
      <ItemsList />
    </div>
  );
}

export default App;
