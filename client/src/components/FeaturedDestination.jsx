import React from 'react';
import {roomsDummyData} from "../assets/assets.js";
import HotelCard from "./HotelCard.jsx";
import Title from "./Title.jsx";

const FeaturedDestination = () => {
    return (
        <div className='flex flex-col items-centre px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

            <Title title='Featured Destinations' subTitle='Explore the best destinations in the world.'/>

            <div className='flex flex-wrap items-centre justify-centre gap-6 mat-20'>
                {roomsDummyData.slice(0,4).map((room, index)=>(
                    <HotelCard key={room._id} room={room} index={index} />
                    ))}
            </div>
        </div>
    );
};

export default FeaturedDestination;