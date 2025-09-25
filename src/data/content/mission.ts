// Mission, vision and values data
export interface ChallengeStat {
  stat: string;
  description: string;
}

export interface Challenge {
  title: string;
  description: string;
  stats: ChallengeStat[];
}

export interface Value {
  title: string;
  description: string;
}

export interface Team {
  leader: string;
  description: string;
  approach: string;
}

export interface Transparency {
  funding: string;
  outcomes: string;
  challenges: string;
}

export interface MissionData {
  title: string;
  description: string;
  extendedMission: string;
  challenge: Challenge;
}

export interface AboutData {
  vision: string;
  mission: string;
  story: string;
  whatMakesUsDifferent: string[];
  values: Value[];
  team: Team;
  transparency: Transparency;
}

export const mission: MissionData = {
  title: "Why We Do This Work",
  description: "Many young people in Ghana have the potential to succeed in technology, but lack access to quality training and opportunities. We bridge this gap by providing practical, hands-on education that leads to real jobs. Our approach focuses on building both technical skills and confidence, preparing students for Ghana's growing digital economy.",
  extendedMission: "We believe that access to technology education should be accessible to everyone. That's why we offer scholarships and flexible payment options, and we actively recruit students from underserved communities. We also prioritize creating a supportive environment where women and girls feel welcome and can thrive in tech.",
  challenge: {
    title: "Our Impact So Far",
    description: "While we're proud of our progress, we know there's much more work to be done. Here's what we've achieved together:",
    stats: [
      { stat: "85%", description: "of our graduates find employment within 6 months of completing programs" },
      { stat: "40%", description: "of our students are women - well above the industry average" },
      { stat: "3x", description: "average income increase for graduates compared to their previous work" },
      { stat: "45+", description: "small businesses and startups launched by our alumni" }
    ]
  }
};

export const about: AboutData = {
  vision: "We envision a Ghana where every young person, regardless of their background, has the opportunity to build a meaningful career in technology and contribute to our country's digital growth.",
  mission: "We provide practical technology education that leads to real employment opportunities. Our focus is on underserved communities and ensuring that women have equal access to tech careers.",
  story: "IT For Youth Ghana started in 2023 when our founder, Peter Duodu, saw the gap between Ghana's growing tech sector and the lack of accessible training for young people from low-income communities. What began as small workshops has grown into comprehensive programs that have trained over 200 graduates.",
  whatMakesUsDifferent: [
    "Accessible programs with scholarship opportunities available",
    "We actively recruit from underserved communities",
    "Small class sizes ensure personalized attention",
    "We provide ongoing support even after graduation",
    "Our curriculum is designed with input from local employers",
    "We maintain strong relationships with Ghana's tech community"
  ],
  values: [
    {
      title: "Accessibility",
      description: "Technology education shouldn't be limited by family income or connections. We remove financial barriers and actively reach out to underserved communities."
    },
    {
      title: "Practical Learning", 
      description: "Our students work on real projects and graduate with portfolios that demonstrate their abilities to potential employers."
    },
    {
      title: "Community",
      description: "We build lasting relationships with our students and graduates, creating a supportive network that helps everyone succeed."
    },
    {
      title: "Honesty",
      description: "We're transparent about both opportunities and challenges in tech careers. Success requires real commitment and hard work."
    }
  ],
  team: {
    leader: "Peter Duodu - Executive Director with Master's in Accounting & Financial Research and extensive experience in youth development",
    description: "Our team includes experienced software developers, designers, data analysts, and educators who are passionate about creating opportunities for young Ghanaians. Many of our instructors are alumni who've returned to teach the next generation.",
    approach: "We believe in learning by doing. Our instructors combine theoretical knowledge with practical experience from working in Ghana's tech industry."
  },
  transparency: {
    funding: "We operate through grants, donations, and partnerships with local tech companies. All financial information is available upon request.",
    outcomes: "We track graduate employment and are happy to share detailed success metrics with potential students, donors, and partners.",
    challenges: "Like any organization, we face challenges including funding constraints, student retention, and keeping up with rapidly changing technology. We address these openly and continuously work to improve."
  }
};