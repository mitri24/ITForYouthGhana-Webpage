// Volunteer opportunities data
export interface VolunteerRole {
  title: string;
  commitment: string;
  description: string;
  requirements: string[];
  skills: string[];
  impact: string;
  realExpectation: string;
}

export interface VolunteerData {
  title: string;
  description: string;
  roles: VolunteerRole[];
  benefits: string[];
  honestTalk: string;
  howToStart: string;
}

export const volunteer: VolunteerData = {
  title: "Help Us Create Opportunities for Young Ghanaians",
  description: "Our volunteers are essential to what we do. Whether you have tech skills, business experience, or simply want to support young people, there are meaningful ways to contribute. We match volunteer opportunities to your schedule and interests.",
  roles: [
    {
      title: "Technical Mentor",
      commitment: "2-4 hours per week for 6 months",
      description: "Work directly with 3-5 students in our programming or data analytics programs. Help them understand concepts, debug code, and build confidence. Most mentoring happens in the evenings or weekends.",
      requirements: ["At least 1 year of professional tech experience", "Patience and empathy", "Basic communication skills"],
      skills: ["Programming or data analysis", "Problem-solving", "Encouragement"],
      impact: "Your guidance helps students overcome challenges and stay motivated during difficult parts of the program.",
      realExpectation: "Students will have varying skill levels and learning speeds. Some sessions will be frustrating. But seeing someone 'get it' after struggling makes it worthwhile."
    },
    {
      title: "Guest Speaker", 
      commitment: "2-3 hours every few months",
      description: "Share your professional experience with current students. Talk about your career path, industry trends, or specific skills. Most talks are casual Q&A sessions.",
      requirements: ["Professional experience in any field", "Willingness to share honestly about career challenges"],
      skills: ["Public speaking (basic level fine)", "Real-world experience"],
      impact: "Students gain realistic perspectives on career paths and professional life.",
      realExpectation: "Students will ask direct questions about salaries, work-life balance, and challenges. Be prepared to be honest about both positives and negatives."
    },
    {
      title: "Career Support Volunteer",
      commitment: "1-2 hours per week, flexible timing", 
      description: "Help graduates with job applications, interview preparation, and professional communication. This can be done remotely and on your schedule.",
      requirements: ["Experience with job searching or hiring", "Good communication skills"],
      skills: ["Resume review", "Interview practice", "Professional advice"],
      impact: "Bridge the gap between completing training and landing that first job.",
      realExpectation: "Job searching is stressful and can take months. You'll need patience as people face rejections and setbacks."
    }
  ],
  benefits: [
    "See direct impact on individual students' lives",
    "Build your own mentoring and teaching skills", 
    "Connect with Ghana's growing tech community",
    "Flexible commitment that works with your schedule"
  ],
  honestTalk: "Volunteering isn't always easy. Students face real challenges - financial pressure, family obligations, self-doubt. Some will struggle or drop out. But for those who succeed, your support makes a real difference in their lives and careers.",
  howToStart: "We start all volunteers with a brief orientation to understand our approach and meet current students. You can then choose how much and in what way you'd like to contribute."
};