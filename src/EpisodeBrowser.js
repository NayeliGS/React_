import React, { useState } from "react";
import Episode from "./Episode"

export default function EpisodeBrowser(props){

    const episodes = [
        {
            name:"winter",
            episode: "1",
            cover:"https://depor.com/resizer/2CViV4Fvqq6cFVNqAqKLYAcBxAI=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/5LRR36R4BVB3VPAR3VOYJSJN24.jpg",
        },
        {
            name:"winter2",
            episode: "2",
            cover:"https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fs3.abcstatics.com%2Fmedia%2Fseries%2F000%2F003%2F130%2Frick-y-morty-1.jpg&nuevoancho=690&medio=abc",
        },
        {
            name:"winter3",
            episode: "4",
            cover:"https://bndlstech.com/cdn/shop/articles/rick-morty-while-high-blog-header-3804x964-_2x-1480x482.png?v=1670775265&width=2048",
        },

    ];

    const [episode, setEpisode] = useState(0);
    const [activeEpisode, setActiveEpisode] = useState([0]);

 

    function nextEpisode(){
        if(episode > episodes.length -1){
            alert("no more episodes");
            return;
        }
        setEpisode(episode + 1);
        refreshEpisode();

    }

    function previousEpisode(){
        if(episode == 0){
            alert("no more episodes");
            return;
        }  

        setEpisode(episode - 1);
        refreshEpisode();

    }

    function refreshEpisode(){
        setActiveEpisode(episodes[episode]);

    }


    return(
        <div className="EpisodeBrowser">
            <h1>EpisodeBrowser</h1>   
            <Episode name= {activeEpisode.name} episode= {activeEpisode.episode} cover= {activeEpisode.cover}/>
            <button onClick={previousEpisode}>Previous</button>
            <button onClick={nextEpisode}>Next</button>

        </div>
    );

};