import React from 'react';
import axios from 'axios';

import './Home.css';

import NavBar from './../NavBar/NavBar';

let events = [
    {
        title: "I was born",
        date: "January 14 1990",
        location: "Fort Worth, TX",
        description: "I was born!"
    }, 
    {
        title: "I got married",
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
                <span>{events[1].name}</span>
            </div>
            <button onClick = {() => axios.get('/ping')
                                        .then((response) => console.log(response.data))}>Check to see if it's working!</button>
        </div>
    )
}

export default Home;