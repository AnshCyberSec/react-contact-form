import React, { useState } from 'react'
import styles from "./ContactForm.module.css"
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const [submittedName, setSubmittedName] = useState("")
    const [submittedEmail, setSubmittedEmail] = useState("")
    const [submittedText, setSubmittedText] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();
        
        setSubmittedName(name)
        setSubmittedEmail(email)
        setSubmittedText(text)


        setName("");
        setEmail("");
        setText("");

        setSubmitted(true)


    }

    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_button}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />

                    <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
                </div>
                <Button
                    isOutline={true}
                    text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />

                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="8" value={text}
                            onChange={(e) => setText(e.target.value)}/>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "end",
                    }}>
                        <Button text="SUBMIT BUTTON" />
                    </div>
                </form>
                {submitted && (
                    <div className={styles.output}>
                        <h3>Submitted Details:</h3>
                        <p><strong>Name:</strong> {submittedName}</p>
                        <p><strong>Email:</strong> {submittedEmail}</p>
                        <p><strong>Message:</strong> {submittedText}</p>
                    </div>
                )}


            </div>

            <div className={styles.contact_Image}>
                <img src="/images/contact.svg" alt="contact image" />
            </div>
        </section>
    )
}

export default ContactForm