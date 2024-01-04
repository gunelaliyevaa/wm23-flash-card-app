import React, {useState} from 'react';
import "./style/FlashCards.css"
import axios from "axios";

export default function CreateCardForm({onCreateCard}) {

    const [newFront, setNewFront] = useState('');
    const [newBack, setNewBack] = useState('');

    const handleCreateCard = () => {
        const newCard = {
            front: newFront,
            back: newBack,
            lastModified: new Date().toISOString(),
        };

        axios
            .post('http://localhost:3000/cards', newCard)
            .then(() => {
                // Notify the parent component that a card has been created
                onCreateCard(newCard);
                // Clear the form inputs
                setNewFront('');
                setNewBack('');
            })
            .catch((error) => {
                console.error('Error creating card:', error);
            });
    };
    return (
        <div className="add-card-form">
            <h2>Add New Flashcard</h2>
            <label>Front:</label>
            <input type="text" value={newFront} onChange={(e) => setNewFront(e.target.value)}/>
            <label>Back:</label>
            <input type="text" value={newBack} onChange={(e) => setNewBack(e.target.value)}/>
            <button className="action-btn" onClick={handleCreateCard}>
                Add Flashcard
            </button>
        </div>
    );
}