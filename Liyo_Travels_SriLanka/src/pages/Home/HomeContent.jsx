// Home Content
// The content for the Home component is stored in the homeContent.js file. The content is an object with two properties: en and he. Each property contains the content for the Home component in English and Hebrew, respectively.

export const content = {
  //English content
  en: {
    homeWelcome: {
      title: "Welcome to Liyo Travels",
      description: `At Liyo Travels Sri Lanka, we are dedicated to providing the best
                      travel experience in Sri Lanka. We offer exceptional tour packages and
                      travel services. From landing to departure, we plan every detail for a
                      seamless and unforgettable journey through Sri Lanka.`,
    },
    homeChoose: {
      title: "Why choose Us?",
      chooseCards: [
        {
          imgSrc: (
            <dotlottie-player
              src="https://lottie.host/00fced7d-3b9d-401f-9dec-8a3929e624b7/VaXbSyHFhi.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          ),
          title: "Customized Tours",
          description: `We offer personalized tour packages tailored to your preferences
                          and interests. Whether you're looking for adventure, relaxation,
                          or cultural experiences, we have the perfect itinerary for you.`,
        },
        {
          imgSrc: (
            <dotlottie-player
              src="https://lottie.host/4a3e1129-349f-49a2-bbd5-f3cd6076c7e0/qq2SnXnZEA.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          ),
          title: "Experienced Guides",
          description: `Our team of experienced guides and drivers are dedicated to
                          ensuring a safe and enjoyable travel experience. They are
                          knowledgeable, friendly, and committed to providing exceptional
                          service.`,
        },
        {
          imgSrc: (
            <dotlottie-player
              src="https://lottie.host/c968bdf8-0003-4511-8b8a-35a77ded24c6/ZtmQiSbSAw.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          ),
          title: "Quality Accommodation",
          description: `We partner with top-rated hotels, resorts, and guesthouses to
                          provide you with comfortable and luxurious accommodation options.
                          Rest assured, you'll have a relaxing stay after a day of
                          exploration.`,
        },
      ],
    },
  },
  //Hebrew content
  he: {
    homeWelcome: {
      title: "ברוכים הבאים לליו טורס",
      description: `בליו טורס סרי לנקה, אנחנו מחויבים לספק את חוויית הנסיעה הטובה ביותר בסרי לנקה. אנחנו מציעים חבילות טיול ושירותי נסיעות יוצאי דופן. מהנחיתה ועד העזיבה, אנו מתכננים כל פרט ופרט לחוויה חלקה ובלתי נשכחת ברחבי סרי לנקה.`,
    },
    homeDestinations: {
      title: "יעדים פופולריים",
      destinations: [
        {
          imgSrc:
            "https://images.unsplash.com/photo-1708694648935-eeafaa7fd1ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          altText: "קנדי",
          title: "קנדי",
          description: `קנדי, הממוקמת בלב סרי לנקה, היא עיר תוססת הידועה במורשת התרבותית העשירה שלה ובנופים המדהימים שלה. בית למקדש השן הקדושה, קנדי מציעה למבקרים שילוב ייחודי של היסטוריה, רוחניות ויופי טבעי. מוקפת גבעות ירוקות ומטעי תה ציוריים, היא יעד מושלם לאלה המחפשים גם הרפתקאות וגם רוגע.`,
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1706766810001-f1f2529b834a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          altText: "נוארה אליה",
          title: "נוארה אליה",
          description: `נוארה אליה, הידועה גם בשם "אנגליה הקטנה", היא עיר מקסימה במרכז הרמות של סרי לנקה. ידועה באקלים הקריר שלה, במטעי תה מהממים ובארכיטקטורה מהתקופה הקולוניאלית, נוארה אליה מציעה מפלט מרענן מהחום הטרופי. המבקרים יכולים ליהנות מנופים ציוריים, גנים ירוקים ויופיה השלו של אגם גרגורי, מה שהופך אותה ליעד מושלם לרוגע ולחקר.`,
        },
        {
          imgSrc:
            "https://images.unsplash.com/flagged/photo-1567498975675-a3adf1574cb0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          altText: "גאלה",
          title: "גאלה",
          description: `גאלה, עיר היסטורית על חוף הדרום מערבי של סרי לנקה, ידועה בארכיטקטורה הקולוניאלית המשומרת שלה ובסצנת התרבות התוססת שלה. מבצר גאלה האייקוני, אתר מורשת עולמית של אונסק"ו, מציע הצצה לעבר העשיר של העיר, עם רחובות מרוצפים, בתי קפה מקסימים וחנויות בוטיק. מוקפת חופים מהממים ומים טורקיזים, גאלה היא שילוב מושלם של היסטוריה, תרבות ויופי טבעי.`,
        },
      ],
    },
    homeChoose: {
      title: "למה לבחור בנו?",
      chooseCards: [
        {
          imgSrc: (
            <dotlottie-player
              src="https://lottie.host/00fced7d-3b9d-401f-9dec-8a3929e624b7/VaXbSyHFhi.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          ),
          title: "טיולים מותאמים אישית",
          description: `אנו מציעים חבילות טיול מותאמות אישית בהתאם להעדפות ולתחומי העניין שלך. אם אתם מחפשים הרפתקאות, רוגע או חוויות תרבותיות, יש לנו את המסלול המושלם עבורכם.`,
        },
        {
          imgSrc: (
            <dotlottie-player
              src="https://lottie.host/4a3e1129-349f-49a2-bbd5-f3cd6076c7e0/qq2SnXnZEA.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          ),
          title: "מדריכים מנוסים",
          description: `צוות המדריכים והנהגים המנוסים שלנו מחויב להבטיח חוויית נסיעה בטוחה ומהנה. הם בעלי ידע, ידידותיים ומחויבים למתן שירות יוצא דופן.`,
        },
        {
          imgSrc: (
            <dotlottie-player
              src="https://lottie.host/c968bdf8-0003-4511-8b8a-35a77ded24c6/ZtmQiSbSAw.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          ),
          title: "אירוח איכותי",
          description: `אנו משתפים פעולה עם מלונות, אתרי נופש ובתי הארחה בדירוג גבוה כדי לספק לכם אפשרויות אירוח נוחות ומפנקות. היו בטוחים, תיהנו משהייה מרגיעה לאחר יום של חקר.`,
        },
      ],
    },
  },
};

<script
  src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
  type="module"
></script>;
