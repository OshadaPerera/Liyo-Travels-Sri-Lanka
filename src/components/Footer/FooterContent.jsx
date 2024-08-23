import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// Common content shared between both languages
const commonContent = {
  office: {
    postalCode: "10107",
    email: "liyotravelssrilanka@gmail.com",
    phone: "+94 765345267",
  },
  quickLinks: {
    links: [
      { url: "/", label: "Home" }, // For Hebrew: "בית"
      { url: "/gallery", label: "Gallery" }, // For Hebrew: "גלריה"
      { url: "/about", label: "About Us" }, // For Hebrew: "עלינו"
      { url: "/contact", label: "Contact Us" }, // For Hebrew: "צור קשר"
    ],
  },
  socialLinks: {
    links: [
      {
        url: "https://www.facebook.com/people/Liyo-Travels-Sri-Lanka/61564623182427/",
        icon: faFacebook,
      },
      { url: "https://www.instagram.com/liyo_travels_sl/", icon: faInstagram },
      { url: "https://wa.me/message/VICGCNPT3UEWK1", icon: faWhatsapp },
    ],
  },
};

// Helper function to translate English labels to Hebrew
const translateToHebrew = (label) => {
  const translations = {
    Home: "בית",
    Gallery: "גלריה",
    "About Us": "עלינו",
    "Contact Us": "צור קשר",
  };
  return translations[label] || label; // Default to original if no translation is found
};

// Language-specific content
export const footerContent = {
  en: {
    title: "Liyo Travels Sri Lanka",
    description:
      "At Liyo Travels Sri Lanka, we craft unforgettable journeys with unparalleled tour packages and exceptional travel services. Our mission is to provide the ultimate travel experience, ensuring every adventure is seamless and memorable.",
    office: {
      ...commonContent.office,
      title: "Office",
      addressLine1: "No.425/B",
      addressLine2: "Paluwelgala Road",
      city: "Koswatta, Sri Lanka",
    },
    quickLinks: {
      title: "Quick Links",
      links: commonContent.quickLinks.links.map((link) => ({
        ...link,
        label: link.label, // English labels
      })),
    },
    socialLinks: {
      title: "Social Links",
      links: commonContent.socialLinks.links,
    },
    copyright: "Liyo Travels Sri Lanka",
    rightsReserved: "All Rights Reserved",
    solutionBy: "Solution By",
  },
  he: {
    title: "ליו טרוולס סרי לנקה",
    description:
      "בליו טראוולס סרי לנקה, אנו יוצרים מסעות בלתי נשכחים עם חבילות טיול יוצאות דופן ושירותי נסיעות מעולים. המשימה שלנו היא לספק את חוויית הנסיעה האולטימטיבית, ולוודא שכל הרפתקה תהיה חלקה ובלתי נשכחת.",
    office: {
      ...commonContent.office,
      title: "משרד",
      addressLine1: "מס' 425/ב",
      addressLine2: "דרך פלולגל",
      city: "קוסווטה, סרי לנקה",
    },
    quickLinks: {
      title: "קישורים מהירים",
      links: commonContent.quickLinks.links.map((link) => ({
        ...link,
        label: translateToHebrew(link.label), // Convert the label to Hebrew
      })),
    },
    socialLinks: {
      title: "קישורים חברתיים",
      links: commonContent.socialLinks.links,
    },
    copyright: "ליו טרוולס סרי לנקה",
    rightsReserved: "כל הזכויות שמורות",
    solutionBy: "פיתרון על ידי",
  },
};
