import Dice1 from "../images/dice1.png";
import Dice2 from "../images/dice2.png";
import Dice3 from "../images/dice3.png";
import Dice4 from "../images/dice4.png";
import Dice5 from "../images/dice5.png";
import Dice6 from "../images/dice6.png";
import RollSound from "../sounds/dice.mp3"
import { useState } from "react";
import "./Section.style.css";

function Section() {
    const [random1, setRandom1] = useState(0);
    const [random2, setRandom2] = useState(0);
    const [winner, setWinner] = useState("Roll The Dice");
    const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
    const [isDisabled, setIsDisabled] = useState(false);
    const [isEditing1, setIsEditing1] = useState(false);
    const [isEditing2, setIsEditing2] = useState(false);
    const [player1, setPlayer1] = useState("Click to edit");
    const [player2, setPlayer2] = useState("Player 2");


    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleEdit = (e) => {
        const { id } = e.target;
        if (id === "player1-Title") {
            setIsEditing1(true);
        }
        else if (id === "player2-Title") {
            setIsEditing2(true);
        }
    };

    const handleInputChange = (e) => {
        const { name } = e.target;
        if (name === "player1") {
            setPlayer1(e.target.value);
        }
        else if (name === "player2") {
            setPlayer2(e.target.value);
        }

    };

    const handleBlur = () => {
        if (player1 === "") {
            setPlayer1("Click to edit")
        } else if (player2 === "") {
            setPlayer2("Player 2")
        }
        setPlayer1(prev => prev.trim());
        setPlayer2(prev => prev.trim());
        setIsEditing1(false);
        setIsEditing2(false);

    };

    function playSound() {
        const audio = new Audio(RollSound);
        audio.play();
    }

    async function handleClick() {
        console.log(player1, player2)
        let newRandom1;
        let newRandom2;
        playSound();
        setIsDisabled(true);

        for (let i = 0; i < 7; i++) {
            newRandom1 = Math.floor(Math.random() * 6);
            newRandom2 = Math.floor(Math.random() * 6);
            setRandom1(newRandom1);
            setRandom2(newRandom2);
            if (player1 === "Click to edit" && player2 === "Player 2") {
                setPlayer1("Player 1");
                setPlayer2("CPU")
            }
            await sleep(300);
        }

        if (newRandom1 > newRandom2) {
            setWinner(`🚩${(player1 === "Click to edit") ? "Player 1" : player1} Wins!`);
        } else if (newRandom1 < newRandom2) {
            setWinner(`${(player2 === "Player 2") ? "CPU" : player2}🚩 Wins!`);
        } else if (newRandom1 === newRandom2) {
            setWinner("Draw🤝");
        }
        setIsDisabled(false);
    }

    return (
        <section className="section">
            <h1>{winner}</h1>
            <div className="dice-container">
                <div className="self-end flex flex-col gap-4">
                    {isEditing1 ? (
                        <input
                            name="player1"
                            type="text"
                            style={{ height: "72px", width: "250px", paddingLeft: "20px" }}
                            value={player1}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            autoFocus
                        />
                    ) : (
                        <h2
                            id="player1-Title"
                            onClick={handleEdit}>{player1}</h2>
                    )}

                    <img src={diceImages[random1]} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                    {isEditing2 ? (
                        <input
                            name="player2"
                            type="text"
                            style={{ height: "72px", width: "250px", paddingLeft: "50px" }}
                            value={player2}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            autoFocus
                        />
                    ) : (
                        <h2
                            id="player2-Title"
                            onClick={handleEdit}>{player2}</h2>
                    )}
                    <img src={diceImages[random2]} alt="" />
                </div>
            </div>
            <div className="button-container">
                <button
                    style={
                        isDisabled ? { backgroundColor: "#043000" } : { backgroundColor: "#4ECCA3" }}
                    disabled={isDisabled} onClick={handleClick}><i className="fa-solid fa-shuffle"></i></button>
            </div>
            <div className="footer">
                <p>www 🎲 Dicee Game 🎲 com</p>
            </div>
        </section>
    )
}

export default Section;