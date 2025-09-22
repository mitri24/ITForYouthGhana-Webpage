// Impact stories and outcomes data
export interface ImpactStory {
  name: string;
  role: string;
  company: string;
  quote: string;
  program: string;
  year: string;
  background: string;
}

export interface ImpactData {
  title: string;
  description: string;
  stories: ImpactStory[];
  outcomes: string[];
  challenges: string;
}

export const impact: ImpactData = {
  title: "Stories from Our Community",
  description: "The best way to understand our impact is through the experiences of our graduates. Here are just a few of the many young people who have transformed their lives through technology education.",
  stories: [
    {
      name: "Belinda Asante",
      role: "Frontend Developer",
      company: "Local Tech Startup",
      quote: "Before IT For Youth, I was working at a shop for very little money. The 6-month programming course was challenging, but the instructors believed in me even when I doubted myself. Now I build websites and earn enough to support my family and save for the future.",
      program: "Software Development Program",
      year: "2023",
      background: "Previously worked in retail, completed senior high school"
    },
    {
      name: "Emmanuel Adjei", 
      role: "Data Analyst",
      company: "Research Organization",
      quote: "I always loved working with numbers but didn't know there were careers in data analysis. The program taught me to use Python and SQL, and helped me get my first job. I'm still learning, but now I help organizations make better decisions with their data.",
      program: "Data Analytics Program",
      year: "2022",
      background: "University graduate who couldn't find work in his field"
    },
    {
      name: "Akosua Mensah",
      role: "Freelance Designer",
      company: "Self-employed",
      quote: "I learned web design here and started taking on small projects. Now I work with several small businesses in Accra. It's not always easy being freelance, but I love the creative work and flexibility.",
      program: "Web Design & User Experience",
      year: "2023",
      background: "Single mother seeking flexible work options"
    }
  ],
  outcomes: [
    "Most graduates find work within 6 months of completing programs",
    "Over 45 small businesses and startups launched by our alumni",
    "Graduates typically see significant income improvements",
    "Strong completion rates for students who stay committed to the program"
  ],
  challenges: "We're honest about the challenges too. Not every student completes the program - it requires real commitment. Job searching can take time, and starting salaries aren't always high. But for those who stick with it, the opportunities are real."
};