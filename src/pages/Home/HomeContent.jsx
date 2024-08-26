import sedan from "../../assets/images/vehicles/car.png";
import van from "../../assets/images/vehicles/van.png";
import bus from "../../assets/images/vehicles/bus.png";
// Animation configurations
const animations = {
  customizedTours: {
    imgSrc: (
      <dotlottie-player
        src="https://lottie.host/00fced7d-3b9d-401f-9dec-8a3929e624b7/VaXbSyHFhi.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></dotlottie-player>
    ),
  },

  experiencedGuides: {
    imgSrc: (
      <dotlottie-player
        src="https://lottie.host/4a3e1129-349f-49a2-bbd5-f3cd6076c7e0/qq2SnXnZEA.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></dotlottie-player>
    ),
  },

  qualityAccommodation: {
    imgSrc: (
      <dotlottie-player
        src="https://lottie.host/c968bdf8-0003-4511-8b8a-35a77ded24c6/ZtmQiSbSAw.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></dotlottie-player>
    ),
  },
};

export const vehicleImages = {
  sedan: {
    imgSrc: <img src={sedan} alt="Sedan Car" />,
  },
  van: {
    imgSrc: <img src={van} alt="Van" />,
  },
  bus: {
    imgSrc: <img src={bus} alt="Bus" />,
  },
};

// Content object
export const content = {
  en: {
    slogan: { title: "Experience the Extraordinary" },

    homeWelcome: {
      title: "Welcome to Liyo Travels Sri Lanka",
      description: `At Liyo Travels Sri Lanka, we are dedicated to providing the best travel experience in Sri Lanka. We offer exceptional tour packages and travel services. From landing to departure, we plan every detail for a seamless and unforgettable journey through Sri Lanka.`,
      languageTitle: "Languages Spoken by Our Expert Guides:",
      languageList: ["English", "Hebrew"],
      // languageDescription: "Select your preferred language",
    },
    homeChoose: {
      title: "Why choose Us?",
      chooseCards: [
        {
          ...animations.customizedTours,
          title: "Customized Tours",
          description: `We offer personalized tour packages tailored to your preferences
                          and interests. Whether you're looking for adventure, relaxation,
                          or cultural experiences, we have the perfect itinerary for you.`,
        },
        {
          ...animations.experiencedGuides,
          title: "Experienced Guides",
          description: `Our team of experienced guides and drivers are dedicated to
                          ensuring a safe and enjoyable travel experience. They are
                          knowledgeable, friendly, and committed to providing exceptional
                          service.`,
        },
        {
          ...animations.qualityAccommodation,
          title: "Quality Accommodation",
          description: `We partner with top-rated hotels, resorts, and guesthouses to
                          provide you with comfortable and luxurious accommodation options.
                          Rest assured, you'll have a relaxing stay after a day of
                          exploration.`,
        },
      ],
    },
    homeVehicle: {
      title: "Our Vehicle Packages",
      vehicleCards: [
        {
          title: "1-3 Persons",
          subtitle: "Sedan Cars",
          description:
            "Ideal for solo travelers, couples, or small groups. Enjoy comfort and convenience in our well-maintained sedans.",
          imgSrc: vehicleImages.sedan.imgSrc,
        },
        {
          title: "4-9 Persons",
          subtitle: "Vans (High Roof/Flat Roof)",
          description:
            "Perfect for medium-sized groups. Spacious and comfortable, our vans are great for family trips or group tours.",
          imgSrc: vehicleImages.van.imgSrc,
        },
        {
          title: "10-17 Persons",
          subtitle: "Buses",
          description:
            "For larger groups, our buses offer ample space and all the amenities needed for a smooth journey.",
          imgSrc: vehicleImages.bus.imgSrc,
        },
      ],
    },

    homeBook: {
      title: "Book Your Sri Lankan Adventure Today",
      content:
        "Ready to explore the wonders of Sri Lanka? Contact us now to start planning your dream vacation.",
      book: "Contact Us",
    },
  },
  he: {
    slogan: { title: "חוו את המופלא" },
    homeWelcome: {
      title: "ברוכים הבאים לליו טורס",
      description:
        "בליו טראוולס סרי לנקה, אנו מחויבים לספק את חוויית הנסיעה הטובה ביותר בסרי לנקה. אנו מציעים חבילות טיול ושירותי נסיעות יוצאי דופן. מהנחיתה ועד העזיבה, אנו מתכננים כל פרט לחוויה חלקה ובלתי נשכחת ברחבי סרי לנקה.",
      languageTitle: "השפות שמדריכינו מסוגלים לדבר:",
      languageList: ["אנגלית", "עברית"],
      // languageDescription: "Select your preferred language",
    },
    homeChoose: {
      title: "למה לבחור בנו?",
      chooseCards: [
        {
          ...animations.customizedTours,
          title: "טיולים מותאמים אישית",
          description: `אנו מציעים חבילות טיול מותאמות אישית בהתאם להעדפות ולתחומי העניין שלך. אם אתם מחפשים הרפתקאות, רוגע או חוויות תרבותיות, יש לנו את המסלול המושלם עבורכם.`,
        },
        {
          ...animations.experiencedGuides,
          title: "מדריכים מנוסים",
          description: `צוות המדריכים והנהגים המנוסים שלנו מחויב להבטיח חוויית נסיעה בטוחה ומהנה. הם בעלי ידע, ידידותיים ומחויבים למתן שירות יוצא דופן.`,
        },
        {
          ...animations.qualityAccommodation,
          title: "אירוח איכותי",
          description: `אנו משתפים פעולה עם מלונות, אתרי נופש ובתי הארחה בדירוג גבוה כדי לספק לכם אפשרויות אירוח נוחות ומפנקות. היו בטוחים, תיהנו משהייה מרגיעה לאחר יום של חקר.`,
        },
      ],
    },
    homeVehicle: {
      title: "חבילות הרכב שלנו",
      vehicleCards: [
        {
          title: "1-3 אנשים",
          subtitle: "מכוניות סדאן",
          description:
            "מתאים ליחידים, זוגות או קבוצות קטנות. תהנו מנוחות ונוחות במכוניות הסדאן שלנו.",
          imgSrc: vehicleImages.sedan.imgSrc,
        },
        {
          title: "4-9 אנשים",
          subtitle: "ואנים (גג גבוה/גג שטוח)",
          description:
            "מושלם לקבוצות בגודל בינוני. מרווח ונוח, הוואנים שלנו נהדרים לטיולים משפחתיים או סיורים קבוצתיים.",
          imgSrc: vehicleImages.van.imgSrc,
        },
        {
          title: "10-17 אנשים",
          subtitle: "אוטובוסים",
          description:
            "לקבוצות גדולות יותר, האוטובוסים שלנו מציעים מרחב רב וכל המתקנים הדרושים לנסיעה חלקה.",
          imgSrc: vehicleImages.bus.imgSrc,
        },
      ],
    },
    homeBook: {
      title: "הזמינו את ההרפתקה הסרי לנקית שלכם היום",
      content:
        "מוכנים לגלות את פלאי סרי לנקה? צרו איתנו קשר עכשיו כדי להתחיל לתכנן את חופשת החלומות שלכם.",
      book: "צרו קשר",
    },
  },
};
