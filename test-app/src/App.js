import './App.scss';
import {Counter} from "./components/Counter";
import {Breadcrumbs} from "./components/Breadcrumbs";
import {ShoppingCart} from "./components/ShoppingCart";


function App() {
  return (
    <div>
     {/* <Counter/>
        <Breadcrumbs/>*/}
        <ShoppingCart/>
    </div>
  );
}

export default App;
