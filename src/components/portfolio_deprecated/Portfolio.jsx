import  React, { useRef, useEffect, useState } from 'react'
import './portfolio.css'
import DATA_IMG from '../../assets/img/portfolio/data_analytics/data_img.jpg'
import WEB_DEV_IMG from '../../assets/img/portfolio/web_development/web_dev_nia_document_tracker.png';

const Portfolio_Old = () => {
    const slideRef = useRef(null);
    const [loadingProgress, setLoadingProgress] = useState(0);
    
    const handleClickNext = () => {
        let items = slideRef.current.querySelectorAll(".item");
        slideRef.current.appendChild(items[0]);
    };

    const handleClickPrev = () => {
        let items = slideRef.current.querySelectorAll(".item");
        slideRef.current.prepend(items[items.length - 1]);
    };
    const data = [
        //Link to Tableau or GitHub goes here.
        {
            id: 1,
            imgUrl: DATA_IMG,
            desc: "Unleashing Insights. Powering Success with Data Analytics.",
            name: "Data Analytics",
        },
        {
            id: 2,
            imgUrl: WEB_DEV_IMG, //Overlay Images from src\assets\img\portfolio\web_development
            desc: "Some beautiful roads cannot be discovered without getting loss.",
            name: "Web Development",
        },
    ];
    return (
        <div className = "container container-slider">
            <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
            <div id="slide" ref={slideRef}>
                {data.map((item) => (
                <div
                    key={item.id}
                    className="item"
                    style={{ backgroundImage: `url(${item.imgUrl})` }}
                >
                    <div className="content">
                    <div className="name">{item.name}</div>
                    <div className="des">{item.desc}</div>
                    <button>See more</button>
                    </div>
                </div>
                ))}
            </div>
            <div className="buttons">
                <button id="prev" onClick={handleClickPrev}>
                Previous
                </button>
                <button id="next" onClick={handleClickNext}>
                Next
                </button>
            </div>
        </div>
    )
}

export default Portfolio_Old