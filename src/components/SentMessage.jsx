import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

// import { getMessageById } from "../messages";

function SentMessage() {
    const { id } = useParams();
    // let message = getMessageById(id);
    let [message, setMessage] = useState(undefined);

    const fetchMsg = async () => {
        const docRef = doc(db, "sent-emails", id);
        const docSnap = await getDoc(docRef);
        setMessage(docSnap.data());
    }

    useEffect(() => {
        fetchMsg();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container-message">
            {message === undefined && <h2>Loading...</h2>}
            {message !== undefined && <div className="container-details">
                <h2>{message.subject}</h2>
                <h4>{message.to.name} &lt;{message.to.email}&gt;</h4>
                <p>{message.body}</p>
            </div>}
        </div>
    )
}

export default SentMessage;