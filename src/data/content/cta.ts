// Call-to-action data
export interface CTAButton {
  text: string;
  primary: boolean;
  link: string;
}

export interface CTAData {
  title: string;
  subtitle: string;
  description: string;
  buttons: CTAButton[];
  nextSteps: string[];
  applicationNote: string;
}

export const cta: CTAData = {
  title: "Ready to Start Your Tech Journey?",
  subtitle: "Our next programs begin soon. If you're ready to commit 6 months to learning new skills and building a better future, we're here to support you every step of the way.",
  description: "Applications are open for our upcoming cohorts. We look for motivated individuals who are ready to work hard and support their fellow students. No previous experience required - just commitment and curiosity.",
  buttons: [
    { text: "Apply for Programs", primary: true, link: "/contact" },
    { text: "Schedule a Visit", primary: false, link: "/contact" },
    { text: "Support Our Work", primary: false, link: "/volunteer" }
  ],
  nextSteps: [
    "Fill out our simple application form",
    "Attend an information session to learn more",
    "Complete a short interview to ensure program fit",
    "Start your technology journey with us"
  ],
  applicationNote: "We evaluate applications based on motivation and commitment, not previous experience. Our application process is designed to be accessible and straightforward."
};