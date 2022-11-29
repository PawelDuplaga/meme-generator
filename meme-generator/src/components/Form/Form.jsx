import React from "react";
import './Form.css'
import memeData from '../../data/memeDatas'


export default function Form () {

    let url

    function handleClick(string) {
        console.log({string});
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      }

    function getRandomMemeData () {
        const index = getRandomInt(0,memeData.data.memes.length)
        const memeUrl = memes[index].url;
        url = memeUrl;
        console.log(index);
        console.log(memeUrl);

        return memes[index];
    }


    return (
        <main>
            <div className="form-container">
                <input
                type="text"
                placeholder="Top text"
                className="form--input"
                />
                <input
                type="text"
                placeholder="Bottom text"
                className="form--input"
                />
                <button 
                onClick={getRandomMemeData}
                className="form--button">
                    Get a new meme image
                </button>
            </div>
        </main>
    )
}