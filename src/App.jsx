import React, { useState } from 'react';
import './index.css';

const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

function getPassword() {
    let passwordlength = 15;
    let password = "";

    for (let i = 0; i < passwordlength; i++) {
        const randomNumber = Math.floor(Math.random() * allCharacters.length);
        const randomCharacter = allCharacters[randomNumber];
        password = password + randomCharacter;
    }

    return password;
}

function App() {
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');

    function generatePassword() {
        const newPassword = getPassword();
        setPasswordOne(newPassword);
        setPasswordTwo(newPassword);
    }

    return (
        <div>
            <h1>Generate a random Password</h1>
            <p id="note-pasword">Never use an insecure password again.</p>
            <button onClick={generatePassword}>Generate Passwords</button>
            <p id="line"></p>
            <p id="password-one">{passwordOne}</p>
            <p id="password-two">{passwordTwo}</p>
        </div>
    );
}

export default App;