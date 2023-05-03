import React from 'react';
import welcomeImgData from './data/welcome_img.json'

const Welcome = () => {
    return (
        <div className="scene" id="welcome">
          <article className="content">
            <div className="gallery">
            {
                    welcomeImgData.map((link) => 
                    <li><a className={`icon ${link.class}`} href={`href`}><span>{link.text}</span></a></li>
                    <img src={'src'} alt={'alt'}/>
                    <img className="hidesm" src="https://landonhotel.com/images/hotel/intro_wedding.jpg" alt="Intro Gallery Dining Sample Pictures"/>
                    )
            }
            </div>
            <h1>Welcome to the Landon&nbsp;Hotel</h1>
            <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
          </article>
        </div>
    );
}


export default Welcome;