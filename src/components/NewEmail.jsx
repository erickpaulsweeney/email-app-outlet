import { collection, addDoc } from "firebase/firestore"; 
import { useState } from "react";
import { db } from "../firebase-config";

function NewEmail() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [body, setBody] = useState(''); 

    const sendMsg = async () => {
        let sendObj = {
            from: {
                name: 'Logan McAnsh',
                email: 'logan@remix.run'
            },
            to: {
                name: name,
                email: email
            }, 
            subject: subject,
            body: body,
            date: new Date().toISOString()
        }
        await addDoc(collection(db, "sent-emails"), sendObj);
        alert('Email successfully sent!');
        setName('');
        setEmail('');
        setSubject('');
        setBody('');
    }
    
    return (
        <div className="container-new-email">
            <label htmlFor="recipient-name">Recipient Name</label>
            <input type="text" name="recipient-name" value={name} onChange={(ev) => setName(ev.target.value)}/>
            <label htmlFor="recipient-email">Recipient Email</label>
            <input type="text" name="recipient-email" value={email} onChange={(ev) => setEmail(ev.target.value)}/>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" value={subject} onChange={(ev) => setSubject(ev.target.value)}/>
            <label htmlFor="body">Message</label>
            <textarea name="body" id="" cols="30" rows="10" value={body} onChange={(ev) => setBody(ev.target.value)}/>
            <button className="send-button" onClick={() => {
                if (name.length > 0 && email.length > 0 && subject.length > 0 && body.length > 0) {
                    sendMsg();
                }
            }}>Send</button>
        </div>
    )
}

export default NewEmail;