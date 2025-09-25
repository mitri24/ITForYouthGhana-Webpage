// Hero section data
export interface HeroStat {
  number: string;
  label: string;
  description: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  expandedDescription: string;
  stats: HeroStat[];
}

export const hero: HeroData = {
  title: "Building Ghana's Tech Future Together",
  subtitle: "Training underserved youth in technology skills. 200+ graduates building careers in Ghana's tech sector.",
  expandedDescription: "Since 2023, we've been working directly with communities in Accra and beyond, providing professional technology training to young people who otherwise wouldn't have access to these opportunities. Our graduates work at local tech companies, start their own businesses, and mentor the next generation of learners.",
  stats: [
    { number: "200+", label: "Program Graduates", description: "Young people trained in various tech skills since 2023" },
    { number: "800+", label: "Students Reached", description: "Through school visits and community workshops" },
    { number: "40%", label: "Female Participation", description: "Women and girls in our programs" },
    { number: "2+", label: "Years Serving", description: "Continuously supporting our community since 2023" }
  ]
};