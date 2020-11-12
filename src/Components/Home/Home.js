import React from 'react';

import './Home.css';

import NavBar from './../NavBar/NavBar';

let events = [
    {
        name: "I was born",
        date: "January 14 1990",
        location: "Fort Worth, TX",
        description: "I was born!"
    }, 
    {
        name: "I got married",
        date: "July 25 2015",
        location: "American Fork, UT",
        description: "I married my sweetheart."
    }];

const Home = () => {
    return(
        <div>
            <NavBar />
            <div className="MyTimeline">
                <span>{events[0].name}</span>
            </div>
        </div>
    )
}

export default Home;