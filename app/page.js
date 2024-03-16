"use client";

import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import ResumeBanner from "../components/ResumeBanner";
import Projects from "../components/Projects";
import styles from "./page.module.css";
import { Atomic_Age, Kaisei_Tokumin } from 'next/font/google';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import DownloadIcon from '@mui/icons-material/Download';
import ContactForm2 from "../components/ContactForm2";
import ProjectModal from "../components/Projects/ProjectModal";
import { useState, useEffect } from "react";
import { ProjectData } from "../components/Projects/ProjectData";
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const kaisei_tokumin = Kaisei_Tokumin({
  weight: '400',
  subsets: ['latin'],
});


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 300) {
        let element = document.querySelector("#about-header");
        element.classList.replace(styles.hidden, styles.fadeIn);
      }
      if (window.scrollY > 400) {
        let element = document.querySelector("#about-1");
        element.classList.replace(styles.hidden, styles.fadeIn);
      }
      if (window.scrollY > 500) {
        let element = document.querySelector("#about-2");
        element.classList.replace(styles.hidden, styles.fadeIn);
      }
      if (window.scrollY > 600) {
        let element = document.querySelector("#about-3");
        element.classList.replace(styles.hidden, styles.fadeIn);
      }
      if (window.scrollY > 1200) {
        let element = document.querySelector("#work-1");
        element.classList.replace(styles.hidden, styles.fadeIn);
      }
      if (window.scrollY > 1300) {
        let element = document.querySelector("#work-2");
        element.classList.replace(styles.hidden, styles.fadeIn);
      }
      if (window.scrollY > 1500) {
        let element = document.querySelector("#work-3");
        element.classList.replace(styles.hidden, styles.fadeIn);
      }
      if (window.scrollY > 2000) {
        let element = document.querySelector("#work-4");
        element.classList.replace(styles.hidden, styles.fadeIn);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClick(idx) {
    setProjectIndex(idx);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <main className={kaisei_tokumin.className}>
      {isOpen && <ProjectModal project={ProjectData[projectIndex]} closeModal={closeModal} />}
      <Box sx={{ display: 'flex', zIndex: 2 }}>
        <Box sx={{ width: '25vw', marginBottom: 10}}>
          <Navbar />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '75vw', color: 'white', margin: '50px', padding: '50px' }}>
          <ResumeBanner />
          <Box id="home" className="section" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 25, height: '60vh' }}>       
            <h1 style={{fontSize: 60, fontWeight: '400', letterSpacing: '2px' }}>Trisha Johnson</h1>
            <Box sx={{ display: 'flex', margin: 5 }}>
              <Image src="/tahoeBNW.JPG" width="200" height="200" style={{ borderRadius: "50%" }} />
              <Box sx={{ display: 'flex', margin: '20px', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{fontSize: '16px', fontWeight: "100"}}>
                  I am a Fullstack Software Engineer with a love for the frontend. 
                  I am passionate about bridging communities and industry using technology, seeking new and innovative ways to create, 
                  share and connect.
                </p>
                <Box sx={{ display: 'flex', marginTop: 5, width: '100%' }}>
                  <Link target="_blank" href="https://github.com/trishajjohnson" sx={{ color: 'white', marginRight: '10px', opacity: '0.8', "&:hover": { opacity: 1 } }}>
                    <GitHubIcon />
                  </Link>
                  <Link target="_blank" href="https://www.linkedin.com/in/trishajjohnson/" sx={{ color: 'white', marginRight: '10px', opacity: '0.8', "&:hover": { opacity: 1 } }}>
                    <LinkedInIcon />
                  </Link>
                  <Link target="_blank" href="https://www.instagram.com/trishgoeswesty/" sx={{ color: 'white', marginRight: '10px', opacity: '0.8', "&:hover": { opacity: 1 } }}>
                    <InstagramIcon />
                  </Link>
                  <Link target="_blank" href="https://discordapp.com/users/trishajjohnson" sx={{ color: 'white', marginRight: '10px', opacity: '0.8', "&:hover": { opacity: 1 } }}>
                    <FontAwesomeIcon size="lg" icon={faDiscord} />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box id="about" className="section" sx={{ height: '100vh' }}>
            
            <h1 id="about-header" className={styles.hidden}>
                Hi, my name is Trisha, but you can call me Trish.
            </h1>
            
            <p id="about-1" className={styles.hidden} style={{fontSize: '14px'}}>
              I used to joke and say my Sociology degree was useless.  The thing was, its purpose 
              was difficult for me to define.  It wasn’t a hard skill like fixing a car or building a house.  The truth is, I’ve 
              used it every single day since. The majority of my work experience has been in the service industry, 5 years of which 
              were spent making and serving coffee to the public, and that experience has taught me a very valuable lesson.  Sometimes, I was the 
              first human interaction a customer had in their day and I realized what a powerful position that was to be in.  I had 
              the ability to influence the trajectory of someone’s day, simply by greeting them with a warm smile and a killer cup of joe!
            </p>
            <p id="about-2" className={styles.hidden}>
              Studying social constructs and human behavior has helped me navigate countless difficult situations in my life, personally and 
              professionally.  Understanding why people are the way they are and what motivates them gives you a great deal of power and influence.  
              With this deeper insight, you have the chance of making a difference.  Working in the service industry has taught me that the success 
              of a business does not depend solely on the value of the product or service it provides.  A business will not thrive simply because 
              it has a solid business plan.  Its success can only be measured in comparison to the satisfaction of its customer base.  Bridging 
              the two requires adaptability, and that, in my opinion, is the key to success. 
            </p>
            <p id="about-3" className={styles.hidden}>
              When I'm not developing creative solutions to everyday problems, you'll usually find me snuggled up on the couch with my dog Lou, watching
              something entertaining.  I also love to write and perform music, portrait photography and traveling to new places, and I just started learning to sew.
              If you’re interested in connecting and hearing more about my interests and aspirations, or if you’re curious what it takes to pull the 
              perfect espresso shot, shoot me an email.  I’d love to connect!
            </p>
            
          </Box>
          <Box id="experience" className="section" sx={{ marginBottom: 25 }}>

            <Box id="work-1" className={styles.hidden} sx={{ display: 'flex', flexDirection: 'column', marginBottom: 5 }}>
              <Box sx={{ display: 'flex' }}>
                <Image src="/hack_for_la_logo.jpeg" width="50" height="50" style={{ borderRadius: "5px", margin: 10 }} />
                <Box sx={{ display:  'flex', flexDirection: 'column' }}>
                  <h2>Software Engineer</h2>
                  <h4>Hack for LA</h4>
                </Box>
              </Box>
              <p style={{ margin: 10 }}>
                In this role, I worked with nonprofit, government, and private partners to build civic-minded 
                projects serving the greater LA area. I also collaborated with an internal team to build and service the 
                organization’s website and collaborated with program managers, designers, and developers to discover new 
                solutions for existing issues, often working with Kanban (project management framework) and JavaScript.
              </p>
              <ul style={{ margin: 25 }}>
                <li>
                  Utilized troubleshooting abilities to debug, add, and remove specific sections and update and refactor code, 
                  acquiring a wealth of knowledge from recurring challenges and collaborating with other engineers.
                </li>
                <li>
                  Committed to high-level productivity by meeting deadlines, contributing to meetings, and using project management 
                  framework.
                </li>
              </ul>
            </Box>

            <Box id="work-2" className={styles.hidden} sx={{ display: 'flex', flexDirection: 'column', marginBottom: 5 }}>
              <Box sx={{ display: 'flex' }}>
                <Image src="/logo_tweak copy.png" width="50" height="50" style={{ borderRadius: "5px", margin: 10 }} />
                <Box sx={{ display:  'flex', flexDirection: 'column' }}>
                  <h2>Software Engineer</h2>
                  <h4>Energy of Jade</h4>
                </Box>
              </Box>
              <p style={{ margin: 10 }}>
                Here, I took ownership of designing a new website, considering user experience markers to create an engaging, 
                efficient, well-received site. 
              </p>
              <ul style={{ margin: 25 }}>
                <li>
                  Utilized transparent, tactful, and empathetic communication to determine how to meet client needs successfully 
                  and efficiently, navigating the difficulties of translating client design expectations to tangible goals to 
                  exceed client expectations.
                </li>
                <li>
                  Owned the design process by learning new technologies and frameworks to achieve design goals, including learning 
                  AWS and utilizing React Next JS framework, resulting in boosting client visibility and increasing booked sessions 
                  and brand awareness.
                </li>
              </ul>
            </Box>

            <Box id="work-3" className={styles.hidden} sx={{ display: 'flex', flexDirection: 'column', marginBottom: 5 }}>
              <Box sx={{ display: 'flex' }}>
                <Image src="/heather-website-logo-1 copy.png" width="50" height="50" style={{ borderRadius: "5px", backgroundColor: 'white', margin: 10 }} />
                <Box sx={{ display:  'flex', flexDirection: 'column' }}>
                  <h2>Wordpress Developer</h2>
                  <h4>Heather Gloria Coaching</h4>
                </Box>
              </Box>
              <p style={{ margin: 10 }}>
                I developed a functional, engaging website for a professional life coach, utilizing innovative web design 
                skills and development capabilities to deliver an exceptional product and optimize the conversion rate. I 
                configured the website to collect emails for newsletters and generate a significant following through SEO 
                keywords.
              </p>
              <ul style={{ margin: 25 }}>
                <li>
                  Quick pivoted amid a change in designers to swiftly understand client needs, wants, and overall goals. 
                  Conducted meetings with the client to develop and deliver an ideal product, resulting in increased visibility 
                  of the client’s business and services.
                </li>
                <li>
                  Valued and embraced collaboration to record and transfer client notes to design strategies and devise an 
                  aesthetically pleasing layout and accompanying color palate while maintaining consistent contact with the client 
                  to ensure complete satisfaction. 
                </li>
                <li>
                  Remained committed to motivating the client to meet timeline goals and communicate design needs. Ensured a rapid 
                  turnaround time to deliver the website, accomplishing each phase of the design process from inception to completion.
                </li>
              </ul>
            </Box>

            <Box id="work-4" className={styles.hidden} sx={{ display: 'flex', flexDirection: 'column', marginBottom: 5 }}>
              <Box sx={{ display: 'flex' }}>
                <Image src="/springboard_logo.jpeg" width="50" height="50" style={{ borderRadius: "5px", backgroundColor: 'white', margin: 10 }} />
                <Box sx={{ display:  'flex', flexDirection: 'column' }}>
                  <h2>Software Engineer Fellow</h2>
                  <h4>Springboard</h4>
                </Box>
              </Box>
              <p style={{ margin: 10 }}>
                Here, I received a well-rounded overview of general, full-stack practices and a strong introduction to commonly 
                used frameworks, languages, and technologies. Build projects utilizing front and backend technologies and 
                frameworks, then utilize and build API calls, ultimately building full-scale applications.
              </p>
              <ul style={{ margin: 25 }}>
                <li>
                  Acquired over 700 hours of hands-on course material with a one-on-one industry expert mentor oversight and 
                  completion of in-depth portfolio projects—gained invaluable knowledge from experiences with debugging, 
                  testing, networking, and mentorship.
                </li>
                <li>
                  Mastered skills in front- and back-end web development, databases, and data structures and algorithms. 
                </li>
              </ul>
            </Box>

          </Box>

          <Box id="projects" className="section" sx={{ marginBottom: 25 }}>
            <Projects handleClick={handleClick} projects={ProjectData} />
          </Box>
          <Box id="contact" className="section" sx={{ marginBottom: 10 }}>
            <ContactForm2 />
          </Box>

        </Box>
      </Box>
    </main>
  );
}

