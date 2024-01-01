import "./style/Form.css"
import React from 'react';

export default function Form() {
    return (
        <div>
            <form>
                <label htmlFor="">Your Name</label>
                <input type="text"/>

                <label htmlFor="">Email</label>
                <input type="email"/>

                <label htmlFor="">Subject</label>
                <input type="text"/>

                <label htmlFor="">Message</label>
                <textarea rows="7" placeholder="Type Your Message Here"/>
                <button className="btn">Send</button>
            </form>
        </div>
    );
}