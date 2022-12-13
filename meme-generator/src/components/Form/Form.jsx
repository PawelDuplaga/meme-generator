import React, {useState} from "react";
import './Form.css'
import memeData from '../../data/memeDatas'


export default function Form () {


    const[meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImg:"http://i.imgflip.com/1bij.jpg"
    })
    const[allMemeImages,setAllMemeImages] = useState(memeData)

    function getRandomMemeData () {
        const memesArray = allMemeImages.data.memes
        const randomIndex = Math.floor(Math.random() * memesArray.length)
        const memeUrl =  memesArray[randomIndex].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: memeUrl
        }))
    }



    return (
        <div>
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
            <img className="meme-image" src = {meme.randomImg}/>
        </div>
    )
}