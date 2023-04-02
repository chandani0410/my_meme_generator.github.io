import React from "react";
// import memesData from "./MemeData";

export default function Meme(){

    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })

    const[allMeme,setAllMeme] = React.useState()

    React.useEffect(() => {
    
        /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
        // async function getMemes() {
        //     const res = await fetch("https://api.imgflip.com/get_memes")
        //     const data = await res.json()
        //     setAllMemes(data.data.memes)
        // }
        // getMemes()
        // return () => {
            
        // }        //check Using an async function inside useEffect (Clone) if confused

        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data=> setAllMeme(data.data.memes))
        // console.log("hello")
    },[])
    
    function getMemeImage(){
        // const memesArray = allMeme
        const randomImage = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomImage].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url,
            topText : "",
            bottomText : "",
        }))
    }
    
    function handleChange(event){
        const{name,value}=event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }

    return(
        <main>
            <div className="meme">
                <input 
                placeholder="First Text" 
                className="input-box" 
                name='topText' 
                value={meme.topText}
                onChange={handleChange}
                />
                <input 
                placeholder="Second Text" 
                className="input-box" 
                name='bottomText' 
                value={meme.bottomText}
                onChange={handleChange}
                />
                <button 
                    onClick={getMemeImage}
                    className="generate-button">
                        Get a new Meme Image
                </button>
            </div>
            <div className="image_section">
                <img src={meme.randomImage} alt='meme' className="meme_image"></img>
                <h2 className="meme_text top">{meme.topText}</h2>
                <h2 className="meme_text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}