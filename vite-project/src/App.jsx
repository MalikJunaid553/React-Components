import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App(){
  const [user , setUser] = useState("Junaid")
  return(
    <>
   <div class="alert alert-success" role="alert">
    Practicing React Components!!!
    </div>
    <Header />
    <div className="h">React Components</div>
    <Footer  userName={user} setUser= {setUser} />
    </>
  );
}
export default App;