import './App.css';
import Login from './login';
import Main from './Main';
import Help from './Help'
import io from "socket.io-client";
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import UserContext,{socket} from './UserContext';
function App() {
  const [user, setuser] = useState(null);
  const [deluxe, setDeluxe] = useState({});
  const [joinJoined, setJoinJoined] = useState(null);
  const [remJoinChat, setRemJoinChat] = useState(true);
  const [messageList, setMessageList] = useState([]);
  const [color, setColor] = useState(0);
 


  return (
    <BrowserRouter>
      <Header title="Sociablast" />
      {(socket !== undefined) ?


        <UserContext.Provider value={{ user, setuser, deluxe, setDeluxe, joinJoined, setJoinJoined, remJoinChat, socket, setRemJoinChat, messageList, setMessageList, color, setColor }}>
          <Routes>
            {<Route exact path="/" element={<Home />} />}
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={< Login />} />
            <Route path="/Help" element={<Help />} />

            
          </Routes>
        </UserContext.Provider> : <div></div>}
      <Footer />
    </BrowserRouter>
  );
}

export default App;