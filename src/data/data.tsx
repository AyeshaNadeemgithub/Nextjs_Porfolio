
import golf from '../assets/projects/golf.png';
import twogood from '../assets/projects/twogood.png';
import carRent from '../assets/projects/carRent.png';
import ecommerce from '../assets/projects/ecommerce.png';
import resume from '../assets/projects/resume.png';
import reveal from '../assets/projects/reveal.png';
import travel from '../assets/projects/travel.png';
import Youtube from '../assets/projects/youtube.png';
import type { StaticImageData } from 'next/image';


// Define the type for the project data
interface Project {
    id: number;
    name: string;
    image: StaticImageData;
    github: string;
    live: string;
}

// Define the data array with the correct type
export const data: Project[] = [
    {
        id: 1,
        name: "Car Rent Website",
        image: carRent,
        github: "",
        live: "",
    },
    {
        id: 2,
        name: "E-Commerce Website",
        image: ecommerce,
        github: "",
        live: "",
    },
    {
        id: 3,
        name: "Golf Club Website",
        image: golf,
        github: "",
        live: "",
    },
    {
        id: 4,
        name: "E-Commerce Website",
        image: twogood,
        github: "",
        live: "",
    },
    {
        id: 5,
        name: "Youtube Clone",
        image: Youtube,
        github: "",
        live: "",
    },
    {
        id: 6,
        name: "Image Reveal Effect",
        image: reveal,
        github: "",
        live: "",
    },
    {
        id: 7,
        name: "Interactive Resume Builder Website",
        image: resume,
        github: "",
        live: "",
    },
    {
        id: 8,
        name: "Travel Website",
        image: travel,
        github: "",
        live: "",
    }
  
];
