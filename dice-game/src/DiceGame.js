import './DiceGame.css';
import Dice from "./Dice";
import {useState} from 'react';

function DiceGame() {
    const [areDicesRolling, setAreDicesRolling] = useState(false);
    const [playerFirstDiceCurrentNumber, setPlayerFirstDiceCurrentNumber] = useState(1);
    const [playerSecondDiceCurrentNumber, setPlayerSecondDiceCurrentNumber] = useState(1);
    const [computerFirstDiceCurrentNumber, setComputerFirstDiceCurrentNumber] = useState(1);
    const [computerSecondDiceCurrentNumber, setComputerSecondDiceCurrentNumber] = useState(1);

    const getRandomDiceResult = () => Math.floor(Math.random() * 6) + 1;

    function randomizeDices() {
        setAreDicesRolling(true);
        const dicesRollingTimeout = 2000;
        setTimeout(() => {
            setPlayerFirstDiceCurrentNumber(getRandomDiceResult());
            setPlayerSecondDiceCurrentNumber(getRandomDiceResult());

            setComputerFirstDiceCurrentNumber(getRandomDiceResult());
            setComputerSecondDiceCurrentNumber(getRandomDiceResult());
            setAreDicesRolling(false);
        }, dicesRollingTimeout);
    }

    function getPlayerScore() {
        return playerFirstDiceCurrentNumber + playerSecondDiceCurrentNumber;
    }

    function getComputerScore() {
        return computerFirstDiceCurrentNumber + computerSecondDiceCurrentNumber;
    }

    function getWinner() {
        if (getPlayerScore() > getComputerScore()) {
            return <div>You won!</div>;
        } else if (getPlayerScore() < getComputerScore()) {
            return <div>Computer won!</div>;
        } else {
            return <div>Draw!</div>;
        }
    }

    return (
        <div className="DiceGame">
            {areDicesRolling === false ? <div>
                <div className="PlayerDices">
                    Your dices:
                    <Dice currentNumber={playerFirstDiceCurrentNumber}></Dice>
                    <Dice currentNumber={playerSecondDiceCurrentNumber}></Dice>
                    Your result: {getPlayerScore()}
                </div>
                <div className="ComputerDices">
                    Computer dices:
                    <Dice currentNumber={playerFirstDiceCurrentNumber}></Dice>
                    <Dice currentNumber={playerSecondDiceCurrentNumber}></Dice>
                    Computer result: {getComputerScore()}
                </div>
                <div className="WinnerContainer">
                    {getWinner()}
                </div>
            </div> : <div>Dices are rolllling....</div>}
            <div className="ThrowButton">
                <button disabled={areDicesRolling} onClick={randomizeDices}>Throw dice</button>
            </div>
        </div>
    );
}

export default DiceGame;
