import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import Inbox from "./Inbox";
import Login from "./Login";
import Message from "./Message";
import NewEmail from "./NewEmail";
import Sent from "./Sent";
import SentMessage from "./SentMessage";

function Main() {
    let [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!loggedIn) navigate("/login");
        // eslint-disable-next-line
    }, [])

    return (
        <Routes>
            <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/inbox/:id" element={<Message />} />
                <Route path="/sent" element={<Sent />} />
                <Route path="/sent/:id" element={<SentMessage />} />
                <Route path="/new-email" element={<NewEmail />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    )
}

export default Main;