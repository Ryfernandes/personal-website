'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import './index.css';
import Image from 'next/image';
import { IconFileText, IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';

export default function Home() {
  const [logoSize, setLogoSize] = useState(40);

  const router = useRouter();

  const backToGallery = () => {
    router.push('/');
  }

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="https://www.linkedin.com/in/ryan-fernandes-088109284/" target="_blank" rel="noopener noreferrer">
            <IconBrandLinkedin color="white" size={logoSize} />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <IconFileText color="white" size={logoSize} />
          </a>
          <a href="mailto:ryan@fernandes.us" target="_blank" rel="noopener noreferrer">
            <IconMail color="white" size={logoSize} />
          </a>
          <a href="https://github.com/Ryfernandes" target="_blank" rel="noopener noreferrer">
            <IconBrandGithub color="white" size={logoSize} />
          </a>
          <a href="https://www.instagram.com/ryanmartie/" target="_blank" rel="noopener noreferrer">
            <IconBrandInstagram color="white" size={logoSize} />
          </a>
        </div>
      </div>
      <div className="content-container">
        <div className="empty"></div>
        <div className="content">
          <div>
            <h2>Hi, I'm Ryan</h2>
            <p>
              and I'm a sophomore studying Electrical Engineering and Computer
              Science at Yale. Originally from Natick, Massachusetts, my love
              for technology blossomed in 5th grade when I founded the Scratch
              Club with two of my friends. Fast forward 8 years and I can't 
              believe how far I've come!
            </p>
            <p>
              One thing that hasn't changed since then is my love for learning, 
              and I'm always looking for opportunities to try something new.
              Especially when working as a part of a team, I constantly
              seek inspiration and advice from those around me.
            </p>
            <p>
              On a more personal note, I love to sing and bake (especially
              french macarons). I'm a die-hard Buffalo Bills fan from New
              England and am famously fanatic for Josh Allen and Justin 
              Bieber. On the quad, I'm a (self-proclaimed) professsional 
              Spikeball player and am always down for a game of any sort.
              I'm unquestionably competitive, but also just love having 
              fun (as long as I win, of course).
            </p>
            <p>
              To learn more about me, check out some of my projects below!
              You can also find my resume{" "}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                here
              </a>
              {" "}or connect with me on{" "}
              <a href="https://www.linkedin.com/in/ryan-fernandes-088109284/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              . Or, return to the{" "}
              <a onClick={backToGallery}>gallery</a>
              {" "}to check out some snapshots from my life!
            </p>
          </div>
          <div>
            <h3>My technical skills</h3>
            <p>...</p>
          </div>
        </div>
      </div>
    </>
  )
}