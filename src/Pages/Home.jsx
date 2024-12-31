import React, { useEffect } from 'react'
import SplitType from 'split-type'
import '../css/Home.css';
import gsap from 'gsap';

function Home() {

    useEffect(() => {
        const split = new SplitType('#main_header', { types: 'words, chars' });

        if (split.chars) {
            gsap.from(split.chars, {
                opacity: 0,
                y: 50,
                ease: "back",
                duration: 0.2 ,
                stagger: 0.1
            });
        }

        const split2 = new SplitType('#main_sub_header', { types: 'words' });

        if (split2.chars) {
            gsap.from(split2.words, {
                duration: 0.5,
                opacity: 0,
                y: -120,
                stagger: 0.1,
                ease: 'power2.out'
            });
        }

        return () => {
            split.revert();
            split2.revert();
        }; 
    }, []);

    return (
        <div className="h-[90vh] bg-slate-50">
            <div className="h-[90vh] container mx-auto text-center flex flex-col justify-center items-center">
                <p id="main_header" className="text-5xl leading-tight font-semibold">Lorem Ipsum is dummy text of the printing industry.</p>
                <p id="main_sub_header" className="text-lg mt-4 font-medium">Lorem Ipsum has been the dummy text ever since the 1500s</p>
            </div>
        </div>
    )
}

export default Home