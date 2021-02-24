import React from 'react';
import axios from 'axios';

import './Home.css';

import NavBar from './../NavBar/NavBar';
import Event from './../Event/Event';

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
    },
    {
        title: "I got married",
        date: "July 25 2015",
        location: "American Fork, UT",
        description: "I married my sweetheart."
    }];

const Home = () => {

    let eventsList = events.map((e, i) => {
        return <Event key={i} title={e.title} date={e.date} location={e.location} description={e.description}/>
    }) 

    return(
        <div>
            <NavBar />
            <div className="MyTimeline">
                {eventsList}
            </div>
            <div className="TimelineOptions">
                <button>Add Timeline Event</button>
            </div>
            <button onClick = {() => axios.get('/ping')
                                        .then((response) => console.log(response.data))}>Check to see if it's working!</button>
        </div>
    )
}

export default Home;