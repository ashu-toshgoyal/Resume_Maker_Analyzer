import './App.css'
import HomePost from './Components/HomePost';
import Rank from './Components/Rank';
import Navbar from './Components/Searchbar';
import SideBar from './Components/SideBar';


function App() {
  return (
    <div>
      <Navbar />
      {/* <MyC></MyC> */}
      <SideBar></SideBar>
      <HomePost/>
      <Rank/>
    </div>
  );
}

export default App;
