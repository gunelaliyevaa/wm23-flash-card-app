import React, {useState, useEffect} from 'react';
import "./style/FlashCards.css";
import axios from "axios";

export default function FlashCards() {
    const [flashcards, setFlashcards] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:3000/cards")
            .then(res => {
                const sortedQuestions = res.data.map((questionItem, index) => {
                    return {
                        id: `${index}-${Date.now()}`,
                        front: questionItem.front,
                        back: questionItem.back,
                        status: questionItem.status,
                        lastModified: questionItem.lastModified,
                        flip: false,
                    }
                }).sort((a, b) => b.lastModified - a.lastModified)

                setFlashcards(sortedQuestions);
                console.log(res)
            }).catch(error => {
            console.error("Error fetching questions:", error);
        })
    }, [])// Empty dependency array [] to run the effect only once when the component mounts


    const handleCardClick = (id) => {
        setFlashcards((prevFlashcards) => {
            return prevFlashcards.map((flashcard) =>
                flashcard.id === id ? { ...flashcard, flip: !flashcard.flip } : flashcard
            );
        });
    };

    return (
        <div>
            <div className="fc-container">
                <div className="card-grid">
                    {flashcards.map((flashcard) => (
                        <div className={flashcard.flip ? 'card flip' : 'card'} onClick={() =>  handleCardClick(flashcard.id)} key={flashcard.id}>
                            <div className="front">{flashcard.front}</div>
                            <div className="back">{flashcard.back}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
