import React from "react";
import ProjectCard from "./ProjectCard";
import { Quicksand } from 'next/font/google'
 
const quicksand = Quicksand({
  weight: '700',    
  subsets: ['latin'],
})

const projectData = [
    {
        id: 1,
        title: "Hotel Booking System",
        description: "Hotel Booking System using Java and Swing UI",
        image: "/projects/Hotel.png",
        gitUrl: "https://github.com/Hopplers/Java_HotelManagement"

    },
    {
        id: 2,
        title: "Apartment Management System",
        description: "Apartment Management System using Python",
        image: "/projects/Apartment.png",
        gitUrl: "https://github.com/Hopplers/Python_ApartmentManagement"
    },
];

const Projects = () => {
    return (
        <div id="projects" className={`w-[75%] ml-14 ${quicksand.className}`}>
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;