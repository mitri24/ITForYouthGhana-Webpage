// Programs data
export interface MainProgram {
  title: string;
  subtitle: string;
  description: string;
  whatYoullLearn: string;
  duration: string;
  participants: string;
  prerequisites?: string;
  skills: string[];
  image: string;
  highlights: string[];
  careerOutcomes: string[];
  realTalk: string;
}

export interface Course {
  title: string;
  duration: string;
  skills: string[];
  schedule: string;
  startDate: string;
}

export interface FutureProgram {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  participants: string;
  skills: string[];
  image: string;
  highlights: string[];
  status: string;
}

export interface ProgramsData {
  main: MainProgram[];
  courses: Course[];
  future: FutureProgram[];
}

export const programs: ProgramsData = {
  main: [
    {
      title: "Software Development Program",
      subtitle: "6-Month Full-Time Training",
      description: "Learn to build websites and applications from scratch. This comprehensive program covers everything from basic programming concepts to building complete web applications. You'll work on real projects and graduate with a portfolio that demonstrates your skills to employers.",
      whatYoullLearn: "Start with programming fundamentals, then progress through web development, databases, and deployment. By the end, you'll be able to build full-featured web applications and understand how modern software works.",
      duration: "6 months",
      participants: "Small classes of 15-20 students for personalized attention",
      skills: ["Python Programming", "JavaScript & Web Development", "React for User Interfaces", "Node.js for Servers", "Database Management", "Git & Version Control", "Basic Cloud Deployment", "Working in Teams"],
      image: "/images/UX1.jpeg",
      highlights: ["Build 3-4 complete projects for your portfolio", "Guest speakers from local tech companies", "Job interview preparation and resume building", "Ongoing support after graduation"],
      careerOutcomes: ["Junior Software Developer", "Web Developer", "Frontend Developer", "Backend Developer"],
      realTalk: "This program is challenging and requires daily commitment. Most successful students spend 6-8 hours daily on coursework and practice."
    },
    {
      title: "Data Analytics Program",
      subtitle: "6-Month Practical Training",
      description: "Learn to find insights in data and communicate findings effectively. This program teaches you to work with data using both Excel and programming tools, create visualizations that tell stories, and present recommendations to decision-makers.",
      whatYoullLearn: "Start with Excel and statistics basics, then learn Python for data analysis and SQL for databases. You'll work with real datasets from local organizations and learn to create reports and dashboards.",
      duration: "6 months",
      participants: "Hands-on learning with real business problems",
      skills: ["Excel for Data Analysis", "Python with Pandas & NumPy", "SQL for Databases", "Data Visualization", "Statistics Fundamentals", "Report Writing", "Power BI", "Presentation Skills"],
      image: "/images/UX2.jpg",
      highlights: ["Work with data from local businesses and NGOs", "Create a portfolio of analysis projects", "Learn to present findings clearly", "Guest mentors from banks and research organizations"],
      careerOutcomes: ["Data Analyst", "Business Analyst", "Research Assistant", "Market Research Analyst"],
      realTalk: "Strong math skills are helpful but not required. We'll teach you the statistics you need. Attention to detail and curiosity about numbers are more important."
    },
    {
      title: "Web Design & User Experience",
      subtitle: "6-Month Creative & Technical Training",
      description: "Learn to design and build beautiful, user-friendly websites. This program combines creativity with technical skills, teaching you to understand user needs, create designs, and turn those designs into working websites.",
      whatYoullLearn: "Start with design principles and user research, learn design tools like Figma, then build websites with HTML, CSS, and JavaScript. You'll understand both the creative and technical sides of web design.",
      duration: "6 months",
      participants: "Creative individuals who want to solve problems through design",
      skills: ["Design Fundamentals", "Figma Design Tool", "HTML & CSS", "Basic JavaScript", "User Research Methods", "Responsive Design", "Design Systems", "Client Communication"],
      image: "/images/UX3.jpeg",
      highlights: ["Design and build websites for real local businesses", "Learn to talk to users and understand their needs", "Build a strong portfolio showing your design process", "Freelancing and client management basics"],
      careerOutcomes: ["Web Designer", "UI/UX Designer", "Freelance Designer", "Digital Marketing Designer"],
      realTalk: "This program suits people who enjoy both creative and logical thinking. You don't need artistic experience, but curiosity about how people use technology is essential."
    },
    {
      title: "Advanced UI/UX Design Intensive",
      subtitle: "2-Month Specialized Program",
      description: "An intensive program for experienced designers who want to deepen their skills. Led in partnership with priME Academy AG from Germany, with expert training by Miréio Trinley. Focus on advanced user research, accessibility, and building a professional portfolio.",
      whatYoullLearn: "Deep dive into user research methods, learn to design for accessibility and inclusion, master advanced Figma techniques, and create a portfolio that stands out to employers.",
      duration: "2 months intensive",
      participants: "For students who have completed our basic design program or have equivalent experience",
      prerequisites: "Basic design experience required - either from our Web Design program or previous work",
      skills: ["Advanced User Research", "Accessibility & Inclusive Design", "Advanced Figma", "Design Systems", "Portfolio Development", "Professional Presentation"],
      image: "/images/UX4.jpg",
      highlights: ["Small cohort of 10-12 students", "International perspective from German partnership", "21 practical assignments", "One-on-one portfolio reviews"],
      careerOutcomes: ["UI/UX Designer at tech companies", "Freelance UX Consultant", "Product Designer"],
      realTalk: "This is our most demanding program. Students typically spend 25-30 hours per week on assignments and should have design experience before applying."
    },
    {
      title: "Creative Media & Design",
      subtitle: "6-Month Hands-On Program",
      description: "Learn to create visual content that communicates effectively. This program covers graphic design, video editing, and basic animation. Perfect for those who want to work in media, marketing, or start their own creative business.",
      whatYoullLearn: "Start with design principles and Adobe tools, learn to create logos and marketing materials, edit videos for social media and events, and understand how to work with clients on creative projects.",
      duration: "6 months",
      participants: "Creative thinkers who want to build visual communication skills",
      skills: ["Adobe Photoshop & Illustrator", "Video Editing (Premiere Pro)", "Logo & Brand Design", "Social Media Graphics", "Basic Animation", "Photography Basics", "Client Project Management"],
      image: "/images/people/adjej.webp",
      highlights: ["Work on real projects for local businesses", "Build a diverse creative portfolio", "Learn both print and digital design", "Basic entrepreneurship for creative freelancers"],
      careerOutcomes: ["Freelance Graphic Designer", "Social Media Designer", "Video Editor", "Marketing Assistant"],
      realTalk: "This program requires creativity and patience. You'll spend lots of time perfecting details. No prior experience needed, but you should enjoy visual problem-solving."
    },
    {
      title: "Digital Marketing & Social Media",
      subtitle: "6-Month Business-Focused Program",
      description: "Learn to help businesses grow online through social media, content creation, and digital advertising. This practical program teaches you to manage social media accounts, create engaging content, and run advertising campaigns that deliver results.",
      whatYoullLearn: "Understand how different social media platforms work, create content that engages audiences, learn basic graphic design for social media, run Facebook and Google ads, and measure what works.",
      duration: "6 months",
      participants: "People interested in business and communication",
      skills: ["Social Media Management", "Content Writing & Creation", "Basic Graphic Design", "Facebook & Instagram Ads", "Google Ads Basics", "Analytics & Reporting", "Customer Service"],
      image: "/images/people/Mlan.jpeg",
      highlights: ["Manage social media for real local businesses", "Create and run actual ad campaigns with small budgets", "Learn to measure and report on results", "Understand different business needs"],
      careerOutcomes: ["Social Media Manager", "Digital Marketing Assistant", "Content Creator", "Freelance Marketing Consultant"],
      realTalk: "Success in this field requires understanding people and staying current with trends. You'll need to be comfortable with constant learning as platforms change frequently."
    }
  ],
  courses: [
    {
      title: "Network Administration",
      duration: "6 months",
      skills: ["Networking Fundamentals", "Router/Switch Configuration", "Windows Server", "Linux Administration", "Cloud Computing (AWS, Azure)"],
      schedule: "Morning, Evening & Weekend",
      startDate: "10/02/2025"
    },
    {
      title: "Computer Hardware & Software",
      duration: "6 months", 
      skills: ["Hardware Assembly", "Diagnostics", "OS Installation", "Mobile Device Repair", "Troubleshooting"],
      schedule: "Morning, Evening & Weekend",
      startDate: "10/02/2025"
    },
    {
      title: "Secretarial & Database Management",
      duration: "6 months",
      skills: ["Microsoft Office Advanced", "Access Database", "Business Communication", "Project Management"],
      schedule: "Morning, Evening & Weekend", 
      startDate: "10/02/2025"
    },
    {
      title: "Short-Term Programs",
      duration: "2 months each",
      skills: ["Coding Fundamentals", "Basic Office Skills", "Web Design Basics", "Computer Introduction"],
      schedule: "Flexible scheduling",
      startDate: "Monthly intake"
    }
  ],
  future: [
    {
      title: "AI and Robotics for Women",
      subtitle: "Coming Q1 2026",
      description: "Innovative program addressing women's underrepresentation in AI and engineering. Arduino and Raspberry Pi platforms with real-world applications.",
      duration: "TBD",
      participants: "15 women initial cohort",
      skills: ["Python for AI", "TensorFlow", "PyTorch", "Arduino", "Raspberry Pi", "Machine Learning", "Ethical AI"],
      image: "/images/people/emmanuel.jpg",
      highlights: ["Smart agriculture solutions", "Water management systems", "Health monitoring devices", "Community applications"],
      status: "60% curriculum complete"
    }
  ]
};