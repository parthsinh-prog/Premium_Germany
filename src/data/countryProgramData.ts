interface Stat {
  value: string;
  label: string;
}

interface Plan {
  name: string;
  price: string;
  features: string[];
}

interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

interface CountryData {
  stats: Stat[];
  plans: Plan[];
  timeline: TimelineStep[];
}

interface CountryProgramData {
  [region: string]: {
    [country: string]: CountryData;
  };
}

export const countryProgramData: CountryProgramData = {
  "Germany": {
    "Germany": {
      stats: [
        { value: "95%", label: "Visa Success Rate" },
        { value: "€200k", label: "Avg. Scholarship" },
        { value: "Top 100", label: "Universities" },
      ],
      plans: [
        {
          name: "Standard",
          price: "€999",
          features: [
            "University Shortlisting",
            "Application Assistance",
            "Visa Support",
            "Loan Assistance",
          ],
        },
        {
          name: "Premium",
          price: "€1499",
          features: [
            "Everything in Standard",
            "Job Assistance",
            "Accommodation Support",
            "Community Access",
          ],
        },
      ],
      timeline: [
        { step: 1, title: "Profile Evaluation", description: "We assess your profile and goals." },
        { step: 2, title: "University Shortlisting", description: "We help you choose the right universities." },
        { step: 3, title: "Application Submission", description: "We assist with your applications." },
        { step: 4, title: "Visa & Beyond", description: "We guide you through the visa process and pre-departure." },
      ]
    },
  },
};
