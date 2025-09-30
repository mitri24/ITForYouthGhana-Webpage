export interface ProgramDetail {
  overview: string
  objectives: string[]
  impact: {
    [key: string]: string
  }
  approach: string
  success: string
}

export interface Program {
  id: string
  title: string
  description: string
  image: string
  tag: string
  tagColor: string
  detailContent: ProgramDetail
}

export const programs: Program[] = [
  {
    id: 'tech-outreach',
    title: 'Tech Outreach Initiative',
    description: 'Bringing technology education directly to underserved communities across Ghana, ensuring no youth is left behind in the digital revolution.',
    image: '/images/randomPictures/IMG-20241118-WA0052.jpg',
    tag: 'Community Impact',
    tagColor: 'bg-primary',
    detailContent: {
      overview: 'Our flagship Tech Outreach Initiative directly addresses the digital divide by bringing comprehensive technology education to underserved communities across Ghana. This program ensures that geographic location and economic status do not determine access to digital literacy.',
      objectives: [
        'Bridge the digital divide in rural and underserved urban areas',
        'Provide foundational IT skills to youth aged 16-25',
        'Create pathways to employment and entrepreneurship',
        'Build sustainable tech communities in remote areas'
      ],
      impact: {
        participants: '850+ youth trained',
        communities: '45 communities reached',
        employmentRate: '78% job placement rate',
        locations: 'Greater Accra, Ashanti, Northern, Upper East regions'
      },
      approach: 'We deploy mobile training units equipped with laptops, internet connectivity, and solar power systems to reach remote communities. Our certified trainers provide 8-week intensive courses covering computer literacy, basic programming, digital marketing, and entrepreneurship skills.',
      success: 'Participants have gone on to start their own tech businesses, secure employment in IT companies, and become community tech leaders, creating a multiplier effect in their local areas.'
    }
  },
  {
    id: 'girls-in-tech',
    title: 'Girls in Tech Programs',
    description: 'Dedicated programs to empower young women with technology skills, achieving over 40% female participation in our training initiatives.',
    image: '/images/randomPictures/IMG-20241118-WA0095.jpg',
    tag: 'Gender Equality',
    tagColor: 'bg-accent',
    detailContent: {
      overview: 'Our Girls in Tech Programs specifically address gender inequality in the technology sector by providing targeted support, mentorship, and training opportunities for young women and girls across Ghana.',
      objectives: [
        'Increase female participation in STEM fields',
        'Provide safe learning environments for young women',
        'Create female role models in technology',
        'Address cultural barriers to women in tech'
      ],
      impact: {
        participants: '420+ young women trained',
        retention: '92% program completion rate',
        employment: '85% employment/entrepreneurship success',
        mentorship: '150+ ongoing mentorship relationships'
      },
      approach: 'We offer women-only training sessions, female mentors, childcare support for mothers, and flexible scheduling. Our curriculum includes technical skills, confidence building, public speaking, and leadership development.',
      success: 'Our female graduates have founded successful tech startups, joined major technology companies as developers and designers, and become advocates for women in technology across West Africa.'
    }
  },
  {
    id: 'rural-tech-connect',
    title: 'Rural Tech Connect',
    description: 'Connecting rural communities to digital opportunities through mobile training units and partnerships with local schools and institutions.',
    image: '/images/randomPictures/2024-12-17 20.27 (6).jpg',
    tag: 'Rural Empowerment',
    tagColor: 'bg-secondary',
    detailContent: {
      overview: 'Rural Tech Connect bridges the urban-rural technology gap by establishing permanent tech learning centers in rural communities and connecting them to global digital opportunities.',
      objectives: [
        'Establish sustainable tech centers in rural areas',
        'Connect rural youth to global digital economy',
        'Develop local tech leadership',
        'Create rural innovation hubs'
      ],
      impact: {
        centers: '25 permanent tech centers established',
        participants: '600+ rural youth trained',
        partnerships: '40+ local school partnerships',
        connectivity: '15 communities connected to high-speed internet'
      },
      approach: 'We establish permanent learning centers in partnership with local schools and community organizations. Each center receives ongoing support, internet connectivity, and regular visits from our mobile training teams.',
      success: 'Rural communities now have access to online learning platforms, e-commerce opportunities, and remote work possibilities. Many participants now work remotely for companies in Accra and internationally.'
    }
  },
  {
    id: 'code-impact-challenge',
    title: 'Code Impact Challenge',
    description: 'Annual coding competitions and hackathons that bring together young developers to solve real-world problems facing Ghanaian communities.',
    image: '/images/randomPictures/IMG_8623.JPG',
    tag: 'Innovation',
    tagColor: 'bg-primary',
    detailContent: {
      overview: 'The Code Impact Challenge is our annual flagship event that brings together the brightest young developers from across Ghana to solve pressing social and economic challenges through technology.',
      objectives: [
        'Foster innovation and creative problem-solving',
        'Connect young developers with industry leaders',
        'Develop solutions for local challenges',
        'Build a strong tech community network'
      ],
      impact: {
        participants: '300+ developers annually',
        solutions: '45+ innovative solutions developed',
        startups: '12 startups launched from challenge',
        investment: 'GHS 2.4M in funding secured by winners'
      },
      approach: 'Our 48-hour hackathon brings together developers, designers, and entrepreneurs to work on real challenges submitted by local organizations. Participants receive mentorship from industry experts and access to cutting-edge development tools.',
      success: 'Challenge participants have launched successful startups, been recruited by major tech companies, and developed solutions now used by government agencies and NGOs across West Africa.'
    }
  },
  {
    id: 'youth-tech-academy',
    title: 'Youth Tech Academy',
    description: 'Comprehensive 6-month tech bootcamps covering web development, mobile app development, and digital entrepreneurship skills.',
    image: '/images/randomPictures/IMG-20241118-WA0078.jpg',
    tag: 'Professional Training',
    tagColor: 'bg-success',
    detailContent: {
      overview: 'The Youth Tech Academy provides intensive, industry-focused training programs designed to prepare young Ghanaians for careers in the rapidly growing technology sector.',
      objectives: [
        'Provide industry-ready technical skills',
        'Create pathways to high-paying tech careers',
        'Develop local tech talent pipeline',
        'Support career advancement and leadership'
      ],
      impact: {
        graduates: '450+ academy graduates',
        employment: '88% job placement rate',
        salary: 'Average 250% salary increase post-graduation',
        companies: 'Graduates working at 120+ companies'
      },
      approach: 'Our intensive 6-month programs combine theoretical learning with hands-on projects. Students work on real client projects, receive career counseling, and participate in job placement programs with our partner companies.',
      success: 'Academy graduates are now working as senior developers, project managers, and tech entrepreneurs across Ghana and internationally. Many have been promoted to leadership positions within 2 years of graduation.'
    }
  },
  {
    id: 'tech-entrepreneur-hub',
    title: 'Tech Entrepreneur Hub',
    description: 'Supporting young tech entrepreneurs with incubation services, funding opportunities, and mentorship programs.',
    image: '/images/randomPictures/2024-12-17 20.27 (6).jpg',
    tag: 'Entrepreneurship',
    tagColor: 'bg-accent',
    detailContent: {
      overview: 'The Tech Entrepreneur Hub provides comprehensive support for young Ghanaians who want to start their own technology companies, from idea validation to scaling and investment.',
      objectives: [
        'Support tech startup creation and growth',
        'Provide access to funding and investment',
        'Create entrepreneur community and networks',
        'Develop local innovation ecosystem'
      ],
      impact: {
        startups: '85+ startups incubated',
        funding: 'GHS 15M+ in funding secured',
        jobs: '400+ jobs created by alumni startups',
        survival: '78% startup survival rate after 3 years'
      },
      approach: 'We provide 12-month incubation programs including workspace, mentorship, legal support, and access to investor networks. Entrepreneurs receive training in business development, marketing, finance, and scaling strategies.',
      success: 'Hub alumni have launched successful companies serving millions of users across Africa, attracted international investment, and created hundreds of jobs for young Ghanaians in the tech sector.'
    }
  }
]