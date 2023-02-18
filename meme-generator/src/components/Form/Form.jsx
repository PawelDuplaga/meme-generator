import React, {useState} from "react";
import './Form.css'
import memeData from '../../data/memeDatas'


export default function Form () {

    //state
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

    function handleChange (event) {
        const {name,value,type,checked} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : type === checked ? checked : value
        }))
    }

    // fix performance 
    // remember to do main content component

    return (
        <div>
            <main>
                <div className="form-container">
                    <input
                    type="text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                    placeholder="Top text"
                    className="form--input"
                    />
                    <input
                    type="text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
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
            <div className="meme">
                <img className="meme-image" src = {meme.randomImg}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}