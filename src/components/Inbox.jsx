// import { messages } from "../messages";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function Inbox() {
    const navigate = useNavigate();
    let [data, setData] = useState([]);

    const fetchReceived = async () => {
        const response = await getDocs(collection(db, "received-emails"));
        const newData = data.slice();
        response.forEach(doc => {
            newData.push({ ...doc.data(), id: doc.id });

        })
        newData.sort((a, b) => {
            return (a.date < b.date) ? 1 : ((a.date > b.date) ? -1 : 0)
        });
        setData(newData);
        // querySnapshot.forEach((doc) => console.log(doc.id));
    }

    useEffect(() => {
        fetchReceived();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container-inbox">
            {data.length === 0 && <h2>No received messages</h2>}
            {data.length !== 0 && data.map(el => <div key={el.id} className="inbox-item" onClick={() => navigate(`/inbox/${el.id}`)}>
                <p className="left-text">{el.from.name}</p>
                <p className="mid-text">{el.subject} &mdash; <em>{el.body}</em></p>
                <p className="right-text">{new Date(el.date).toString().substring(0, 15)}</p>
            </div>)}
        </div>
    )
}

export default Inbox;