// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalCOntext } from './Context';

function App() {
 const {loading} = useGlobalCOntext()

 if(loading){
  return <main>
    <div className="loading" style={{marginTop: "6rem"}}></div>
  </main>
 }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
