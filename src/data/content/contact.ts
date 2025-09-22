// Contact information and leadership data
export interface Leadership {
  name: string;
  title: string;
  email: string;
  phone: string;
  department: string;
  availability: string;
  languages: string[];
}

export interface ContactData {
  address: string;
  email: string;
  phone: string;
  hours: string;
  social: string[];
  leadership: Leadership;
}

export const contact: ContactData = {
  address: "Hno. L529, Gecko Street, Kwabenya-Musuku, Accra, Ghana",
  email: "info@itforyouthghana.org",
  phone: "+233-596-244-834",
  hours: "Monday-Friday: 9:00-17:00, Saturday: 10:00-14:00",
  social: ["LinkedIn", "Facebook", "Instagram", "Twitter", "YouTube"],
  leadership: {
    name: "Peter Duodu",
    title: "Executive Director",
    email: "peter@itforyouthghana.org",
    phone: "+233 596 244 834",
    department: "Administrative Department, Project Lead",
    availability: "Fully committed to coordination tasks with flexible scheduling to accommodate consortium needs",
    languages: ["English"]
  }
};