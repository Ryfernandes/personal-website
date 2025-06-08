'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import './index.css';
import Image from 'next/image';
import { IconFileText, IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';
import technicalLogos from '@/utils/logos';

export default function Home() {
  const [logoSize, setLogoSize] = useState(40);
  const [techLogoSize, setTechLogoSize] = useState(40);
  const [logoDescriptor, setLogoDescriptor] = useState('');

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
        <div className="ryan">
          <Image
            src="/assets/ryan-standing.png"
            alt="Ryan Fernandes"
            width={500}
            height={2500}
            className='ryan-image'
          />  
        </div>
        <div className="content">
          <div>
            <Image
              src="/assets/square-ryan.jpeg"
              alt="Ryan Fernandes Logo"
              width={500}
              height={500}
              className='ryan-logo'
            />
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
              Bieber. On the quad, I'm a (self-proclaimed) professional 
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
            <p className="inspiration">
              Webiste inspiration from:{" "}
                <a href="https://addisongoolsbee.com/#/" target="_blank" rel="noopener noreferrer">
                  Addison Goolsbee
                </a>
              ,{" "}
                <a href="https://ethanmathieu.com/" target="_blank" rel="noopener noreferrer">
                  Ethan Mathieu
                </a>
              , and{" "}
                <a href="https://www.filippofonseca.com/" target="_blank" rel="noopener noreferrer">
                  Filippo Fonseca
                </a>
            </p>
          </div>
          <div>
            <div className='technical-header'>
              <h3>My technical skills & familiarities</h3>
              {logoDescriptor.length > 0 && <p>({logoDescriptor})</p>}
            </div>
            <div className='logos-container'>
              {technicalLogos.map((logo, index) => (
                <div key={index} className='logo-item' onMouseEnter={() => setLogoDescriptor(logo.name)} onMouseLeave={() => setLogoDescriptor('')}>
                  <Image
                    src={`/logos/${logo.filename}`}
                    alt={logo.name}
                    width={techLogoSize}
                    height={techLogoSize}
                    className='logo-image'
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2>Featured projects</h2>
            <div className='project'>
              <div className='project-header'>
                <a className='inline-block' href="https://yalelabs.io" target="_blank" rel="noopener noreferrer">
                  <h3>y/labs</h3>
                </a>
                <a href="https://github.com/YaleComputerSociety/ylabs" target="_blank" rel="noopener noreferrer">
                  <IconBrandGithub color="black" size={25} />
                </a>
              </div>
              <p>
                y/labs is an all-in-one platform for Yale students and professors to connect for research.
                This was a project that I joined in the fall of my freshman year and was chosen to lead a
                few months later. Upon taking over, I led our team through a complete overhaul of the
                old platform (Yale Research Database) and turned it into y/labs within 12 weeks - in time
                for our first launch. In all, the project went from ~3 users a week in the fall to over 1000
                new users in the first 2 weeks of release and ~30 per week over the summer.
              </p>
              <p>
                Contributions:
              </p>
              <ul>
                <li key={1}>Created a brand new MongoDB schema system with denormalized patterns for faster searches</li>
                <li key={2}>Restructured authentication and data handling for {">"}6k user profiles</li>
                <li key={3}>Secured backend routes and wrote microservices for search, account creation, listing manipulation</li>
                <li key={4}>Redesigned the entire frontend and 2 new pages. Later implemented Design at Yale suggestions</li>
                <li key={5}>Led team through feature planning/delegation and coordinated launch/marketing</li>
              </ul>
            </div>
            <div className='project'>
              <div className='project-header'>
                <a className='inline-block' href="https://yalecomputersociety.org/" target="_blank" rel="noopener noreferrer">
                  <h3>Yale Computer Society - Co-President</h3>
                </a>
                <a href="https://github.com/yalecomputersociety" target="_blank" rel="noopener noreferrer">
                  <IconBrandGithub color="black" size={25} />
                </a>
              </div>
              <p>
                The Yale Computer Society (y/cs) is Yale's premier tech organization and one of the most impactful student
                groups on campus. With 70+ student developers spread across 6 live products and 2 in development, our
                organization has 20,000+ unique users across all applications and is only growing. In addition to our
                products, we organize an annual Catalyst program to train 30+ Yale students in full-stack development.
                Elected as Co-President this past spring by my peers, I am working alongside{" "}
                  <a href="https://www.linkedin.com/in/zhiyu-lily-lin/" target="_blank" rel="noopener noreferrer">
                    Lily Lin
                  </a>
                {" "}to elevate y/cs's on-campus impact, legitimize our external presence and collaborate with companies
                and colleges to bring more opportunities to our members. If interested in collaborating with y/cs, please
                reach out to us at{" "}
                  <a href="mailto:yalecomputersociety@gmail.com" target="_blank" rel="noopener noreferrer">
                    yalecomputersociety@gmail.com
                  </a>
                .
              </p>
              <p>
                Contributions:
              </p>
              <ul>
                <li key={1}>Authored sponsorship propendum, packages and contracts, coordinating with interested sponsors</li>
                <li key={2}>Collaborating on plans and building network for a collegiate tech union</li>
              </ul>
            </div>
            <div className='project'>
              <div className='project-header'>
                <a className='inline-block' href="https://beamish-truffle-c1b96c.netlify.app/demo-1" target="_blank" rel="noopener noreferrer">
                  <h3>Document conversion pipeline (WIP)</h3>
                </a>
                <a href="https://github.com/Ryfernandes/next-document-ingestion" target="_blank" rel="noopener noreferrer">
                  <IconBrandGithub color="black" size={25} />
                </a>
              </div>
              <p>
                As a part of my Red Hat internship this summer, I am building out a UI-based document conversion
                pipeline to remedy some of the pain points of converting documents in Jupyter notebooks. This
                open source tool extends the functionality of the Docling project to allow users to convert 
                company documents (e.g. PDFs, Word docs) to Markdown and JSON formats usable in RAG and fine tuning.
                Building this pipeline into a UI enables simple customization of conversion settings for batches
                of documents and enhances the conversion review/revision process.
              </p>
              <p>
                Contributions:
              </p>
              <ul>
                <li key={1}>Created a full Figma wireframe for every stage of the re-imagined document conversion process</li>
                <li key={2}>Presented wireframe to UX and engineering teams to update wireframe with feedback</li>
                <li key={3}>Implemented Stages 1 and 2 in a Next.js project, up to creation and assignment of conversion profiles</li>
                <li key={4}>
                  Created a fully parameterized table component to add to Red Hat's Patternfly component library with
                  sorting, SHIFT/CTRL multi-select connected to button/dropdown actions and element removal
                </li>
              </ul>
            </div>
            <div className='project'>
              <div className='project-header'>
                <a className='inline-block' href="https://github.com/MarioKartYale" target="_blank" rel="noopener noreferrer">
                  <h3>Mario Kart Yale (WIP)</h3>
                </a>
                <a href="https://github.com/MarioKartYale/mky-website" target="_blank" rel="noopener noreferrer">
                  <IconBrandGithub color="black" size={25} />
                </a>
              </div>
              <p>
                One day during lunch, I was joking with some friends that we should be able to watch Subway Surfers on
                the dining hall projectors while eating and conversing. Then, the thought shifted and I came up with the
                idea for Mario Kart Yale. A summer project that I am collaborating with my friend{" "}
                  <a href="https://www.linkedin.com/in/david-sadka-215241230/" target="_blank" rel="noopener noreferrer">
                    David Sadka
                  </a>
                {" "}on, MKY will allow Yale students to scan in with their student ID cards and compete against students
                from other residential colleges. Combined with OCR processing, controller mapping/emulation and OBS streaming,
                this project will allow for a robust experience with scores, personalized stats and race results all updated
                live. We're just at the beginning, but will have more updates as the summer progresses!
              </p>
              <p>
                Contributions:
              </p>
              <ul>
                <li key={1}>Set up  up a Vite framework for the scores/results website with a navbar, page routing and sample data</li>
                <li key={2}>Created simple placeholder displays for race results and individual lap times</li>
                <li key={3}>Began design and implementation of our database on Firestore to leverage realtime updates</li>
              </ul>
            </div>
          </div>

          <div>
            <h2>Other projects</h2>
            <div className='project'>
              <div className='project-header'>
                <a className='inline-block' href="https://youtu.be/6AjUqiDKBO0" target="_blank" rel="noopener noreferrer">
                  <h3>Whack-A-Mole</h3>
                </a>
                <a href="https://github.com/Ryfernandes/whack_a_mole" target="_blank" rel="noopener noreferrer">
                  <IconBrandGithub color="black" size={25} />
                </a>
              </div>
              <p>
                No, this is not a website. It is actually Whack-A-Mole, constructed with pneumatic pistons and controlled
                by an Arduino transmitting serial data to my laptop. This project was one that I made for a fundraiser
                in high school that I was running with the Model UN team. Yes, it was a bit over the top, but it was a lot
                of fun to construct and definitely something I had never done before! With a short timeline, the final product
                was literally duck-taped together, but it worked just as designed and lasted for the entire event. Shout out to
                {" "}
                  <a href="https://www.facebook.com/krissy.fernandes" target="_blank" rel="noopener noreferrer">
                    my very talented mom
                  </a>
                {" "}for helping me last-minute with her woodworking skills.
              </p>
            </div>
            <div className='project'>
              <div className='project-header'>
                <h3>Prom Algorithm</h3>
              </div>
              <p>
                Unfortunately, I made this without very high expectations and didn't upload it to GitHub before my old
                computer died and the code was lost. However, the program was very useful in splitting our prom group of
                70+ people into 10-12 person tables that everyone would be happy with. I wrote this program in Python and
                essentially used a CSV of "familiarity" cross-rankings between members of our group as a loss function. Then,
                I generated batches of prom table arrangements and iterated towards the best local arrangement through multiple
                generations. After running the full program a few times, we had the configuration with the best overall score that
                we ended up using with a couple minor tweaks for prom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}