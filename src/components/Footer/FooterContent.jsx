// src/footerContent.js

import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const footerContent = {
  en: {
    title: "Liyo Travels Sri Lanka",
    description:
      "At Liyo Travels Sri Lanka, we craft unforgettable journeys with unparalleled tour packages and exceptional travel services. Our mission is to provide the ultimate travel experience, ensuring every adventure is seamless and memorable. ",
    office: {
      title: "Office",
      addressLine1: "No.425/B",
      addressLine2: "Paluwelgala Road",
      city: "Koswatta, Sri Lanka",
      postalCode: "10107",
      email: "LiyoTravelsSriLanka@gmail.com",
      phone: "+94 767251336",
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { url: "/", label: "Home" },
        { url: "/gallery", label: "Gallery" },
        { url: "/about", label: "About Us" },
        { url: "/contact", label: "Contact Us" },
      ],
    },
    socialLinks: {
      title: "Social Links",
      links: [
        { url: "#", icon: faFacebook },
        { url: "#", icon: faInstagram },
        { url: "#", icon: faWhatsapp },
      ],
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
      title: "משרד",
      addressLine1: "מס' 425/ב",
      addressLine2: "דרך פלולגל",
      city: "קוסווטה, סרי לנקה",
      postalCode: "10107",
      email: "LiyoTravelsSriLanka@gmail.com",
      phone: "+94 767251336",
    },
    quickLinks: {
      title: "קישורים מהירים",
      links: [
        { url: "/", label: "בית" },
        { url: "/gallery", label: "גלריה" },
        { url: "/about", label: "עלינו" },
        { url: "/contact", label: "צור קשר" },
      ],
    },
    socialLinks: {
      title: "קישורים חברתיים",
      links: [
        { url: "#", icon: faFacebook },
        { url: "#", icon: faInstagram },
        { url: "#", icon: faWhatsapp },
      ],
    },
    copyright: "ליו טרוולס סרי לנקה",
    rightsReserved: "כל הזכויות שמורות",
    solutionBy: "פיתרון על ידי",
  },
};
