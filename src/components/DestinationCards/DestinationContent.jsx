const images = {
  kandy: {
    imgSrc:
      "https://images.unsplash.com/photo-1708694648935-eeafaa7fd1ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Kandy",
  },
  nuwaraEliya: {
    imgSrc:
      "https://images.unsplash.com/photo-1706766810001-f1f2529b834a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Nuwara Eliya",
  },
  pidurangala: {
    imgSrc:
      "https://images.pexels.com/photos/10710559/pexels-photo-10710559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Pidurangala",
  },

  galle: {
    imgSrc:
      "https://images.unsplash.com/flagged/photo-1567498975675-a3adf1574cb0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Galle",
  },
  colombo: {
    imgSrc:
      "https://images.unsplash.com/photo-1623595289196-007a22dd8560?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Colombo",
  },
  sigiriya: {
    imgSrc:
      "https://images.unsplash.com/photo-1588598198321-9735fd52455b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Sigiriya",
  },
  ella: {
    imgSrc:
      "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Ella",
  },
    arugambay:{
      imgSrc:"https://images.unsplash.com/photo-1552055568-f8c4fb8c6320?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText:"Arugam Bay",
  },
  trincomalee: {
    imgSrc:
      "https://images.unsplash.com/photo-1645286946558-d0b939eba2fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Trincomalee",
  },
};

export const DestinationContent = {
  // English content
  en: {
    homeDestinations: {
      title: "Popular Destinations",
      destinations: [
        {
          ...images.kandy,
          title: "Kandy",
          description: `Kandy, nestled in the heart of Sri Lanka, is a vibrant city known
                          for its rich cultural heritage and stunning landscapes. Home to
                          the sacred Temple of the Tooth Relic, Kandy offers visitors a
                          unique blend of history, spirituality, and natural beauty.
                          Surrounded by lush hills and picturesque tea plantations, it's the
                          perfect destination for those seeking both adventure and
                          tranquility.`,
        },
        {
          ...images.nuwaraEliya,
          title: "Nuwara Eliya",
          description: `Nuwara Eliya, often referred to as "Little England," is a charming
                          town in the central highlands of Sri Lanka. Known for its cool
                          climate, stunning tea plantations, and colonial-era architecture,
                          Nuwara Eliya offers a refreshing escape from the tropical heat.
                          Visitors can enjoy scenic landscapes, lush gardens, and the serene
                          beauty of Lake Gregory, making it a perfect destination for
                          relaxation and exploration.`,
        },
        {
          ...images.pidurangala,
          title: "Pidurangala",
          description: `Pidurangala Rock, near the famous Sigiriya Fortress in Sri Lanka, offers stunning panoramic views. This historic rock formation is a popular hiking spot, with a mix of stairs and rocky paths leading to breathtaking sunrise or sunset vistas. It's a must-visit for nature lovers and adventurers.`,
        },
        {
          ...images.galle,
          title: "Galle",
          description: `Galle, a historic city on Sri Lanka's southwest coast, is renowned
                          for its well-preserved colonial architecture and vibrant cultural
                          scene. The iconic Galle Fort, a UNESCO World Heritage site, offers
                          a glimpse into the city's rich past, with cobblestone streets,
                          charming cafes, and boutique shops. Surrounded by stunning beaches
                          and turquoise waters, Galle is a perfect blend of history,
                          culture, and natural beauty.`,
        },
        {
          ...images.colombo,
          title: "Colombo",
          description: `Colombo, the main trading city of Sri Lanka, offers a vibrant
                          mix of modernity and tradition. With its bustling markets,
                          iconic landmarks, and a dynamic nightlife, Colombo provides a
                          unique urban experience. Visitors can explore the National Museum,
                          stroll along Galle Face Green, and enjoy the diverse culinary
                          delights the city has to offer.`,
        },
        {
          ...images.sigiriya,
          title: "Sigiriya",
          description: `Sigiriya, also known as Lion Rock, is an ancient rock fortress and
                          palace ruin in the central Matale District of Sri Lanka. This
                          UNESCO World Heritage site is famous for its frescoes and
                          breathtaking views. Climbing to the top of Sigiriya offers a
                          glimpse into the country’s ancient history and spectacular
                          panoramas of the surrounding countryside.`,
        },
        {
          ...images.arugambay,
          title: "Arugam Bay",
          description: `Arugam Bay, located on the east coast of Sri Lanka, is a popular
                          surfing destination known for its world-class waves and laid-back
                          vibe. Surrounded by pristine beaches and lush landscapes, Arugam
                          Bay offers the perfect escape for surfers and beach lovers alike.
                          The town is also home to a vibrant nightlife and a variety of
                          water sports, making it an ideal destination for adventure
                          seekers.`,
        },
        {
          ...images.ella,
          title: "Ella",
          description: `Ella is a small town in the Badulla District of Uva Province, Sri
                          Lanka. Surrounded by lush hills and tea plantations, Ella is known
                          for its hiking trails and stunning viewpoints, such as Ella Rock
                          and the Nine Arches Bridge. The town is a haven for nature lovers
                          and offers a peaceful retreat away from the hustle and bustle.`,
        },
        {
          ...images.trincomalee,
          title: "Trincomalee",
          description: `Trincomalee, located on the northeastern coast of Sri Lanka, is
                          renowned for its pristine beaches, clear blue waters, and rich
                          marine life. A haven for snorkelers and divers, Trincomalee offers
                          stunning coral reefs and vibrant underwater ecosystems. The city
                          is also home to historic sites like the Koneswaram Temple and the
                          Dutch Fort, providing a perfect blend of relaxation and cultural
                          exploration.`,
        },
      ],
    },
  },
  // Hebrew content
  he: {
    homeDestinations: {
      title: "יעדים פופולריים",
      destinations: [
        {
          ...images.kandy,
          title: "קנדי",
          description: `קנדי, הממוקמת בלב סרי לנקה, היא עיר תוססת הידועה במורשת התרבותית העשירה שלה ובנופים המדהימים שלה. בית למקדש השן הקדושה, קנדי מציעה למבקרים שילוב ייחודי של היסטוריה, רוחניות ויופי טבעי. מוקפת גבעות ירוקות ומטעי תה ציוריים, היא יעד מושלם לאלה המחפשים גם הרפתקאות וגם רוגע.`,
        },
        {
          ...images.nuwaraEliya,
          title: "נוארה אליה",
          description: `נוארה אליה, הידועה גם בשם "אנגליה הקטנה", היא עיר מקסימה במרכז הרמות של סרי לנקה. ידועה באקלים הקריר שלה, במטעי תה מהממים ובארכיטקטורה מהתקופה הקולוניאלית, נוארה אליה מציעה מפלט מרענן מהחום הטרופי. המבקרים יכולים ליהנות מנופים ציוריים, גנים ירוקים ויופיה השלו של אגם גרגורי, מה שהופך אותה ליעד מושלם לרוגע ולחקר.`,
        },
        {
          ...images.pidurangala,
          title: "פידורנגל",
          description: `
סלע פידורנגל, ליד מבצר סיגיריה המפורסם בסרי לנקה, מציע נופים פנורמיים מדהימים. תצורת הסלע ההיסטורית הזו היא יעד פופולרי לטיולים, עם שילוב של מדרגות ושבילים סלעיים המובילים לנופי זריחה או שקיעה עוצרי נשימה. זהו יעד חובה לחובבי טבע והרפתקאות.`,
        },
        {
          ...images.galle,
          title: "גאלה",
          description: `גאלה, עיר היסטורית על חוף הדרום מערבי של סרי לנקה, ידועה בארכיטקטורה הקולוניאלית המשומרת שלה ובסצנת התרבות התוססת שלה. מבצר גאלה האייקוני, אתר מורשת עולמית של אונסק"ו, מציע הצצה לעבר העשיר של העיר, עם רחובות מרוצפים, בתי קפה מקסימים וחנויות בוטיק. מוקפת חופים מהממים ומים טורקיזים, גאלה היא שילוב מושלם של היסטוריה, תרבות ויופי טבעי.`,
        },
        {
          ...images.colombo,
          title: "קולומבו",
          description: `קולומבו, בירת סרי לנקה, מציעה שילוב תוסס של מודרניות ומסורת. עם השווקים השוקקים שלה, ציוני הדרך ההיסטוריים וחיי הלילה הדינמיים, קולומבו מספקת חווית עירונית ייחודית. המבקרים יכולים לחקור את המוזיאון הלאומי, לטייל לאורך טיילת גאל פייס וליהנות מהמאכלים המגוונים שיש לעיר להציע.`,
        },
        {
          ...images.sigiriya,
          title: "סיגיריה",
          description: `סיגיריה, הידועה גם בשם סלע האריה, היא מצודה ומבצר עתיק במחוז מטאלה שבמרכז סרי לנקה. אתר מורשת עולמית של אונסק"ו, המקום מפורסם בציורי הקיר הנפלאים שלו ובנופים המרהיבים. טיפוס לראש הסלע מציע הצצה להיסטוריה העתיקה של המדינה ונופים פנורמיים מדהימים של האזור הכפרי הסובב.`,
        },
        {
          ...images.arugambay,
          title: "ארוגם ביי",
          description: `ארוגם ביי, הממוקמת בחוף המזרחי של סרי לנקה, היא יעד גלישה פופולרי הידוע בגליו המקצועיים ובאווירת הרגיעה. מוקפת חופים נקיים ונופים ירוקים, ארוגם ביי מציעה מנוחה מושלמת לגולשים ולאוהבי החוף כאחד. העיר היא גם בית לחיי לילה תוססים ולמגוון ספורטים מים, מה שהופך אותה ליעד אידיאלי למחפשי הרפתקאות.`

        },
        {
          ...images.ella,
          title: "אלה",
          description: `אלה היא עיירה קטנה במחוז באדולה שבמחוז אווה, סרי לנקה. מוקפת גבעות ירוקות ומטעי תה, אלה ידועה בשבילי ההליכה שלה ובנקודות התצפית המרהיבות שלה, כמו סלע אלה וגשר תשעת הקשתות. העיירה היא מקום מפלט לחובבי הטבע ומציעה מנוחה שלווה מהעיר השוקקת.`,
        },
        {
          ...images.trincomalee,
          title: "טרינקומאלי",
          description: `טרינקומאלי, הממוקמת בחוף הצפון-מזרחי של סרי לנקה, ידועה בחופיה
                          הנקיים, במים הצלולים ובחיים הימיים העשירים שלה. גן עדן
                          לצוללנים ושנורקליסטים, טרינקומאלי מציעה שוניות אלמוגים
                          מרהיבות ומערכות אקולוגיות תת-ימיות תוססות. העיר היא גם בית
                          לאתרים היסטוריים כמו מקדש קונסוורם והמבצר ההולנדי, מה שמספק
                          שילוב מושלם של רוגע וחקר תרבותי.`,
        },
      ],
    },
  },
};
