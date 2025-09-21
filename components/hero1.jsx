// import { Image, Link } from 'lucide-react';
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button';
import "@/app/globals.css"; // or whatever the path is


const HeroSection = () => {
    const imageRef= useRef();
    useEffect(() => {
        const imageElement = imageRef.current;
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("Scrolled");
            }
            else{
                imageElement.classList.remove("Scrolled");
            }
        }; 
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    

        return (
      <div className="pb-20 px-4">
        <div className="container mx-auto text-center">
      <h1 className="gradient-title text-5xl md:text-8xl lg:text-[105px] pb-6"> 
        Manage Your Finances <br/> with Intelligence
      </h1>
      <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
        An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.
      </p>
      <div className="flex justify-center space-x-4>">
        <Link href="/dashboard">
        <Button  size ="lg" className="px-8">
            Get Started</Button>
        </Link>
        <Link href="https://www.youtube.com/watch?v=egS6fnZAdzk">
         <Button size ="lg" variant='outline' className="px-8">
         Watch Demo
         </Button>
         </Link>
    </div>
    <div>
        <div className="hero-image-wrapper">
            <div className="hero-image" ref ={imageRef} >
            <Image src="/banner.jpeg" width={1200} height={720}
            alt="Dashboard Preview"
            className="rounded-lg shadow-2xl mx-auto"
            priority
            ></Image>
        </div>
        </div>
        </div>
        </div>
        </div>


  )
}

export default HeroSection;
