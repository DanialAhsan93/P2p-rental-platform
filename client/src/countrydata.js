
import {
    england,
    sweden,
    germany,
    unitedstates,
    finland,
    norge,
    canada,
    screwdriver,
    choose1,
    choose2,
    choose3
} from './index';
import { LiaWineGlassSolid } from "react-icons/lia";
import { FaRegIdCard, FaThumbsUp } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { PiBicycleBold } from "react-icons/pi";
import { IoUmbrellaOutline } from 'react-icons/io5';




export const countryData = [
    {
        id: 0,
        name: "United Kingdom",
        flag: england
    },{
        id: 1,
        name: "Sweden",
        flag: sweden
    },{
        id: 2,
        name: "Germany",
        flag: germany
    },{
        id: 3,
        name: "United States",
        flag: unitedstates
    },{
        id: 4,
        name: "Canada",
        flag: canada
    },{
        id: 5,
        name: "Finland",
        flag: finland
    },{
        id: 6,
        name: "Norge",
        flag: norge
    },
]

export const categorybtn = [
    {
        id: 0,
        name: "Pressure Washer"
    },
    {
        id: 1,
        name: "Power Station"
    },
    {
        id: 3,
        name: "Carpet & Upholstery Cleaners"
    },
    {
        id: 4,
        name: "Smoke Machine"
    },
    {
        id: 5,
        name: "Projector"
    },
    {
        id: 6,
        name: "Laptops"
    },
    {
        id: 7,
        name: "Guitar"
    },
    {
        id: 8,
        name: "Circular Saw"
    },
    {
        id: 9,
        name: "Telescopic Ladder"
    },
    {
        id: 10,
        name: "Party Lights"
    },
    {
        id: 11,
        name: "TV"
    },
    {
        id: 12,
        name: "Rotary Hammer"
    },
    {
        id: 13,
        name: "Sack truck"
    },
    {
        id: 14,
        name: "Golf Clubs"
    },
    {
        id: 15,
        name: "Scarifier"
    },
]
    
export const film = [
     {
        id: 0,
        name: "Mirrorless Lenses"
    },
    {
        id: 1,
        name: "Mirrorless Camera"
    },
    {
        id: 2,
        name: "Camera Package Deals"
    },
    {
        id: 4,
        name: "Studio lamp"
    },
    {
        id: 5,
        name: "DSLR Lenses"
    },
    {
        id: 6,
        name: "Tripod"
    },
    {
        id: 7,
        name: "Digital Cinema Cameras"
    },
    {
        id: 8,
        name: "Lapel Microphone"
    },
    {
        id: 9,
        name: "DSLR Cameras"
    },
    {
        id: 10,
        name: "Other in Flash and lights"
    },
    {
        id: 11,
        name: "Cinema Prime Lenses"
    },
    {
        id: 12,
        name: "Sound Recorder"
    },
    {
        id: 13,
        name: "Softbox & umbrella"
    },
    {
        id: 14,
        name: "Camera Flash"
    },
    {
        id: 15,
        name: "Lens Accessories"
    },
]

export const carouselData = [
    {
        id :0,
        product : "Sds drill and chisel hammer",
        image: screwdriver,
        price: "£4-7",
        days : "1",
        rating: 5
    },
    {
        id :0,
        product : "Sds drill and chisel hammer",
        image: screwdriver,
        price: "£4-7",
        days : "1",
        rating: 5
    },
    {
        id :0,
        product : "Sds drill and chisel hammer",
        image: screwdriver,
        price: "£4-7",
        days : "1",
        rating: 5
    },
    {
        id :0,
        product : "Sds drill and chisel hammer",
        image: screwdriver,
        price: "£4-7",
        days : "1",
        rating: 5
    },
    {
        id :0,
        product : "Sds drill and chisel hammer",
        image: screwdriver,
        price: "£4-7",
        days : "1",
        rating: 5
    }
]

export const feedbackdata = [
    {
        id :0,
        name : "Bola L",
        time : "5 hours ago",
        comment : "Great experience renting this lens—excellent image quality and performed exactly as expected",
        rentedProduct : "Mirrorless Lenses",
        rating: 5
    },
    {
        id :1,
        name : "Bola L",
        time : "5 hours ago",
        comment : "Great experience renting this lens—excellent image quality and performed exactly as expected",
        rentedProduct : "Mirrorless Lenses",
        rating: 3
    },
    {
        id :2,
        name : "Bola L",
        time : "5 hours ago",
        comment : "Great experience renting this lens—excellent image quality",
        rentedProduct : "Mirrorless Lenses",
        rating: 4
    },
    {
        id :3,
        name : "Bola L",
        time : "5 hours ago",
        comment : "Great experience renting this lens—excellent image quality and performed exactly..",
        rentedProduct : "Mirrorless Lenses",
        rating: 5
    },
    {
        id :4,
        name : "Bola L",
        time : "5 hours ago",
        comment : "Great experience renting this lens—excellent image quality and performed exactly..",
        rentedProduct : "Mirrorless Lenses",
        rating: 5
    },
    {
        id :5,
        name : "Bola L",
        time : "5 hours ago",
        comment : "Great experience renting this lens—excellent image quality and performed exactly..",
        rentedProduct : "Mirrorless Lenses",
        rating: 2   
    },
    {
        id :6,
        name : "Bola L",
        time : "5 hours ago",
        comment : "Great experience renting this lens—excellent image quality and performed exactly..",
        rentedProduct : "Mirrorless Lenses",
        rating: 4
    },
]

export const choosedata =[
    {
        id:0,
        image:choose1,
        title:'Top List from 2025',
        desc : 'Looking for inspiration on what to share? Have a look at our list of most borrowered things from 2025.'
    },
    {
        id:1,
        image:choose2,
        title:'Anwen: Renting a pressure washer was much better than buying one',
        desc : 'Renting on Hygglo saved me money and kept my garage clear of stuff I barely use. It just feels better to borrow what I need, skip owning yet another thing, and cut down on waste.'
    },
    {
        id:2,
        image:choose3,
        title:'Over a Million Rentals in Seven Countries',
        desc : "We want people to buy less and share more. Hygglo's mission is to make it affordable and convenient to get any item, anywhere, without needing to buy it."
    },
]

export const guarantee = [
    {
        id:0,
        title : "Everything is guaranteed",
        desc : "A protection for both the person who rents and the person who rents out",
        icon: LiaWineGlassSolid 
    },
     {
        id:1,
        title : "Everyone is verified",
        desc : "Hygglo is safe. Everyone is verified.",
        icon: FaRegIdCard 
    },
     {
        id:2,
        title : "Cheaper than buying",
        desc : "It is often 60% cheaper to rent through Hygglo than a company.",
        icon: GiArtificialIntelligence 
    },
     {
        id:3,
        title : "Rent in your area",
        desc : "You can usually rent something closer to you than the nearest store.",
        icon : PiBicycleBold ,
    },
     {
        id:4,
        title : "Hours that suit you",
        desc : "Before and after work and weekends work best - just as it should be.",
        icon : IoUmbrellaOutline ,
    },
     {
        id:5,
        title : "Good for the Environment",
        desc : "The more things gets used - the better.",
        icon : FaThumbsUp
    }
]