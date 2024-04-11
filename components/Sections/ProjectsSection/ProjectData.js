import GitHubIcon from '@mui/icons-material/GitHub'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from '@fortawesome/free-brands-svg-icons';


export const ProjectData = {
    sections: {
        home: {
            id: "home",
            name: "Trisha Johnson",
            image: {
                path: "https://dl.dropboxusercontent.com/scl/fi/gg7g7676rva48q9haeogt/tahoeBNW.JPG?rlkey=hqs3c6fh9jv6jem4y7ghtpkho&dl=0",
                alt: "headshot"
            },
            description: 
                `I am a Fullstack Software Engineer with a love for the frontend. 
                I am passionate about bridging communities and industry using technology, seeking new and innovative ways to create, 
                share and connect.`,
            socials: [
                {
                    url: "https://github.com/trishajjohnson",
                    icon: () => <GitHubIcon />
                },
                {
                    url: "https://www.linkedin.com/in/trishajjohnson/",
                    icon: () => <LinkedInIcon />
                },
                {
                    url: "https://www.instagram.com/trishgoeswesty/",
                    icon: () => <InstagramIcon />
                },
                {
                    url: "https://discordapp.com/users/trishajjohnson",
                    icon: () => <FontAwesomeIcon size="lg" icon={faDiscord} />
                }
            ]
            
        },
        about: {
            id: "about",
            header: "Hi, my name is Trisha, but you can call me Trish.",
            description: [
                `I used to joke and say my Sociology degree was useless.  The thing was, its purpose 
                was difficult for me to define.  It wasn't a hard skill like fixing a car or building a house.  The truth is, I've 
                used it every single day since. The majority of my work experience has been in the service industry, 5 years of which 
                were spent making and serving coffee to the public, and that experience has taught me a very valuable lesson.  Sometimes, I was the 
                first human interaction a customer had in their day and I realized what a powerful position that was to be in.  I had 
                the ability to influence the trajectory of someone's day, simply by greeting them with a warm smile and a killer cup of joe!`,
                
                `Studying social constructs and human behavior has helped me navigate countless difficult situations in my life, personally and 
                professionally.  Understanding why people are the way they are and what motivates them gives you a great deal of power and influence.  
                With this deeper insight, you have the chance of making a difference.  Working in the service industry has taught me that the success 
                of a business does not depend solely on the value of the product or service it provides.  A business will not thrive simply because 
                it has a solid business plan.  Its success can only be measured in comparison to the satisfaction of its customer base.  Bridging 
                the two requires adaptability, and that, in my opinion, is the key to success.`,
                
                `When I'm not developing creative solutions to everyday problems, you'll usually find me snuggled up on the couch with my dog Lou, watching
                something entertaining.  I also love to write and perform music, portrait photography and traveling to new places, and I just started learning to sew.
                If you're interested in connecting and hearing more about my interests and aspirations, or if you're curious what it takes to pull the 
                perfect espresso shot, shoot me an email.  I'd love to connect!`
            ],
        },
        experience: {
            id: "experience",
            jobs: [
                {
                    id: "work-1",
                    title: "Software Engineer",
                    company: "Hack for LA",
                    image: {
                        path: "https://dl.dropboxusercontent.com/scl/fi/o2l765hn5eahnw0gchlpe/hack_for_la_logo.jpeg?rlkey=066rka2opxz5fbraimtnbifbr&dl=0",
                        alt: "hack-for-la-logo"
                    },
                    description: 
                        `In this role, I worked with nonprofit, government, and private partners to build civic-minded 
                        projects serving the greater LA area. I also collaborated with an internal team to build and service the 
                        organization's website and collaborated with program managers, designers, and developers to discover new 
                        solutions for existing issues, often working with Kanban (project management framework) and JavaScript.`,
                    metrics: [
                        `Utilized troubleshooting abilities to debug, add, and remove specific sections and update and refactor code, 
                        acquiring a wealth of knowledge from recurring challenges and collaborating with other engineers.`,
                        `Committed to high-level productivity by meeting deadlines, contributing to meetings, and using project management 
                        framework.`
                    ]
                },
                {
                    id: "work-2",
                    title: "Software Engineer",
                    company: "Energy of Jade",
                    image: {
                        path: "https://dl.dropboxusercontent.com/scl/fi/jjy89dotkppgr75vpxjh5/logo_tweak-copy.png?rlkey=atehumc8sjel4zzf9oiih1nl8&dl=0",
                        alt: "eoj-logo"
                    },
                    description: 
                        `Here, I took ownership of designing a new website, considering user experience markers to create an engaging, 
                        efficient, well-received site.`,
                    metrics: [
                        `Utilized transparent, tactful, and empathetic communication to determine how to meet client needs successfully 
                        and efficiently, navigating the difficulties of translating client design expectations to tangible goals to 
                        exceed client expectations.`,
                        `Owned the design process by learning new technologies and frameworks to achieve design goals, including learning 
                        AWS and utilizing React Next JS framework, resulting in boosting client visibility and increasing booked sessions 
                        and brand awareness.`
                    ]
        
                },
                {
                    id: "work-3",
                    title: "Wordpress Developer",
                    company: "Heather Gloria Coaching",
                    image: {
                        path: "https://dl.dropboxusercontent.com/scl/fi/uv0y81iicrlstunyhvxo6/heather-website-logo-1-copy.png?rlkey=eo0occu30t8178ynoltwl2j9t&dl=0",
                        alt: "hg-coaching-logo"
                    },
                    description: 
                        `I developed a functional, engaging website for a professional life coach, utilizing innovative web design 
                        skills and development capabilities to deliver an exceptional product and optimize the conversion rate. I 
                        configured the website to collect emails for newsletters and generate a significant following through SEO 
                        keywords.`,
                    metrics: [
                        `Quick pivoted amid a change in designers to swiftly understand client needs, wants, and overall goals. 
                        Conducted meetings with the client to develop and deliver an ideal product, resulting in increased visibility 
                        of the client's business and services.`,
                        `Valued and embraced collaboration to record and transfer client notes to design strategies and devise an 
                        aesthetically pleasing layout and accompanying color palate while maintaining consistent contact with the client 
                        to ensure complete satisfaction.`,
                        `Remained committed to motivating the client to meet timeline goals and communicate design needs. Ensured a rapid 
                        turnaround time to deliver the website, accomplishing each phase of the design process from inception to completion.`
                    ]
        
                },
                {
                    id: "work-4",
                    title: "Software Engineer Fellow",
                    company: "Springboard",
                    image: {
                        path: "https://dl.dropboxusercontent.com/scl/fi/zx0y7tqjrkopyrvi1dmyn/springboard_logo.jpeg?rlkey=eiaxqgeh7ablv4wgmfuaroaw5&dl=0",
                        alt: "springboard-logo"
                    },
                    description: 
                        `Here, I received a well-rounded overview of general, full-stack practices and a strong introduction to commonly 
                        used frameworks, languages, and technologies. Build projects utilizing front and backend technologies and 
                        frameworks, then utilize and build API calls, ultimately building full-scale applications.`,
                    metrics: [
                        `Acquired over 700 hours of hands-on course material with a one-on-one industry expert mentor oversight and 
                        completion of in-depth portfolio projects—gained invaluable knowledge from experiences with debugging, 
                        testing, networking, and mentorship.`,
                        `Mastered skills in front- and back-end web development, databases, and data structures and algorithms.`
                    ]        
                },
            ]
        },
        projects: {
            id: "projects",
            projects: [
                {
                    id: 1,
                    name: 'Energy of Jade',
                    video: 'https://dl.dropboxusercontent.com/scl/fi/wa790ekfmuq5j133rrvb7/Screen-Recording-2024-01-17-at-7.55.23-PM.mp4?rlkey=x2qp3s8u9zmq7m2arhekcakwu&dl=0',
                    imageUrl: 'https://dl.dropboxusercontent.com/scl/fi/rpsl5bk4huots9wheeblj/EOJ_ss.png?rlkey=z2lpb5ehlgneidug5ge3k3o5e&dl=0',
                    description: [
                        `In this role, I took ownership of designing a new website, considering user experience markers to create an engaging, 
                        efficient, well-received site.  I utilized transparent, tactful, and empathetic communication to determine how to meet 
                        client needs successfully and efficiently, navigating the difficulties of translating client design expectations to 
                        tangible goals to exceed client expectations.  I owned the design process by learning new technologies and frameworks 
                        to achieve design goals, including learning AWS and utilizing React Next JS framework, resulting in boosting client 
                        visibility and increasing booked sessions and brand awareness.`
                    ],
                    technologies: [
                        "Next.js", 
                        "React.js", 
                        "AWS", 
                        "Material UI", 
                        "Adobe Suite"
                    ],
                    github: 'https://github.com/trishajjohnson/energy-of-jade-website',
                    url: 'https://main.dedxlhp7cdh1f.amplifyapp.com/'
                },
                {
                    id: 2,
                    name: 'Heather Gloria Coaching',
                    video: 'https://dl.dropboxusercontent.com/scl/fi/ndl8d1xhu1mak78u27smd/Screen-Recording-2024-01-17-at-8.05.22-PM.mp4?rlkey=0w9zesl8pytmg5hq4cy5hjzuo&dl=0',
                    imageUrl: 'https://dl.dropboxusercontent.com/scl/fi/8w6c23a16oq5vnitirq2r/HGC_ss.png?rlkey=ae0zaiskd1bxlkrt0w8uilbh6&dl=0',
                    description: [
                        `I developed a functional, engaging website for a professional life coach, utilizing innovative web design 
                        skills and development capabilities to deliver an exceptional product and optimize the conversion rate. I 
                        configured the website to collect emails for newsletters and generate a significant following through SEO 
                        keywords.  I quickly pivoted amid a change in designers to swiftly understand client needs, wants, and overall goals. 
                        I conducted meetings with the client to develop and deliver an ideal product, resulting in increased visibility 
                        of the client&apos;s business and services.  Remained committed to motivating the client to meet timeline goals 
                        and communicate design needs.`
                    ],
                    technologies: [
                        "Wordpress", 
                        "Elementor", 
                        "WPForms", 
                        "WP Mail SMTP", 
                        "Mailchimp", 
                        "Adobe Suite"
                    ],
                    github: 'none',
                    url: 'https://heathergloriacoaching.com/'
                },
                {
                    id: 3,
                    name: 'Spotafly',
                    video: 'https://dl.dropboxusercontent.com/scl/fi/kqi8nf5aepxlosmzg5jvh/Screen-Recording-2024-01-17-at-8.10.37-PM.mp4?rlkey=myfx7pgr27ygfr629uen1vljs&dl=0',
                    imageUrl: 'https://dl.dropboxusercontent.com/scl/fi/u5og97f6o7v84btl2pe57/Spotafly_ss.png?rlkey=6uvuy645wrrn7ypcr6tpnk73w&dl=0',
                    description: [
                        `Spotafly is a near clone of Spotify, designed for users to find and follow their favorite artists, 
                        their songs and albums. With the use of Spotify's API, users may build their own profile, discover artists, 
                        like their songs and build playlists.`
                    ],
                    technologies: [
                        "Node.js", 
                        "React.js", 
                        "Heroku", 
                        "Material UI", 
                        "PostgreSQL", 
                        "Express.js", 
                        "Surge",
                        "PostgreSQL",
                        "RESTful API"
                    ],
                    github: 'https://github.com/trishajjohnson/spotafly',
                    url: 'https://spotafly.surge.sh/'
                },
                {
                    id: 4,
                    name: 'Gigbook',
                    video: 'https://dl.dropboxusercontent.com/scl/fi/vpd9e1mcebfrvz7n2sdqa/gigbook-screen-recording.mp4?rlkey=mxi14ijhzjm26d2l65jvhykym&dl=0',
                    imageUrl: 'https://dl.dropboxusercontent.com/scl/fi/6c9zmq1i89ivvw1y9nak8/GB_ss.png?rlkey=j854hh7eqh9viclh9zgb1lv30&dl=0',
                    description: [
                        `Gigbook is a web application created to search venues in a specified geographical area, 
                        with the use of the Ticketmaster API. A user may sign up, create and edit a profile, and 
                        save favorites.`,
                    ],
                    technologies: [
                        "HTML",
                        "CSS",
                        "Javascript",
                        "Python", 
                        "Jinja", 
                        "JWT", 
                        "Bootstrap", 
                        "Flask",
                        "PostreSQL",
                        "RESTful API"
                    ],
                    github: 'https://github.com/trishajjohnson/gigbook',
                    url: 'https://bookgig.herokuapp.com/'
                }
            ]
        }
    }
};