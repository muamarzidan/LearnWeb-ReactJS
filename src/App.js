import React from 'react';
import Navbar from './Navbar';
// import './App.css';
// import MyButton from './MyButton';
// import Footer from './Footer'
// import Varibel from './Variabel';
import LifeCycle from './LifeCycle';


// const Click = () => {
//   return alert("Button Lu dah kepencet")
// }

// const foot = () => {
//   return (
//     <div>
//       <marquee>Yoi Mamen</marquee>
//     </div>

//   )
// }


function App() {
  return (
    <div className="App">
    <Navbar />
    <LifeCycle />
    {/* <MyButton Click={Click}/> */}
      {/* <h2> Omiru Code</h2> */}
    {/* <Footer foot={foot} /> */}
    </div>
  );
};

//function component
// export default function navbar() {
//   return <div>
//     <h3>
//       Muamar Zidan
//     </h3>
//   </div>;
// }

//class component
// export default class navbar extends Component {
//   render() {
//     return <div></div>;
//   }
// }

//conts/variabel/arrow function component
// export const navbar = () => {
//   return <div>
//   <h2>
//     Muamar Zidan
//   </h2>
//   </div>;
// };



export default App;
