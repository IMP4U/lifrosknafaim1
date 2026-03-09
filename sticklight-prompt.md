# Sticklight Prompt – "לפרוש כנפיים" Website

Build a **Hebrew, right-to-left (RTL)** single-page website for **"לפרוש כנפיים"** (Spread Wings) — an educational initiative led by Noa Singer that runs creative Zoom activities for children and youth in Israel, with a focus on curiosity, entrepreneurship, and AI.

## Brand & Design

- **Font**: Heebo (Google Fonts), weights: 300, 400, 500, 700, 900
- **Color palette**:
  - Primary: `#0077b6` (blue)
  - Secondary: `#00b4d8` (light blue)
  - Accent: `#ffc300` (gold/yellow)
  - Dark: `#2c3e50`
  - Text: `#34495e`
  - Light background sections: `#f8f9fa`
- **Style**: Clean, modern, friendly. Rounded buttons (pill-shaped), card-based layouts with subtle shadows, smooth hover effects (cards lift up on hover). Scroll-triggered fade-in animations.
- **Logo**: The text "לפרוש כנפיים" with a kite emoji (🪁) slightly rotated beside it.

## Page Structure (top to bottom)

### 1. Fixed Navbar
- Logo on the right (RTL), navigation links on the left.
- Links: עלינו, למה אנחנו?, פעילויות, שירותים נוספים, and a gold "הרשמה" CTA button.
- Shrinks slightly on scroll. Semi-transparent white background with blur effect.
- Hamburger menu on mobile that toggles a dropdown nav.

### 2. Hero Section (full viewport height)
- Background: dark gradient overlay on an education/learning stock image.
- Centered white text:
  - **Heading**: "לפרוש כנפיים"
  - **Subtitle**: "פעילויות זום יצירתיות לילדים ובני נוער – קיץ במציאות לא שגרתית. משלבים סקרנות, חדשנות ובינה מלאכותית לחוויה בלתי נשכחת."
  - **CTA button**: "להרשמה ופרטים נוספים" linking to: `https://docs.google.com/forms/d/e/1FAIpQLSe1Z2IPQDQUczhPYNUP5M99-5yHnFFM0uJwmXe3dTpPouRfUQ/viewform?usp=sharing&ouid=111118319486087857419`

### 3. About Section ("עלינו ועל החזון שלנו")
- Two-column layout (text left, image right — remember RTL).
- **Text column** with two sub-headings:
  - "יוזמה חינוכית חדשנית בהובלת נועה סינגר" — describes the initiative: a nationwide system of groundbreaking education programs for children, youth, and educators, emphasizing curiosity, entrepreneurial thinking, and smart AI use. The professional team includes dozens of instructors, developers, and community managers across the country.
  - "החזון שלנו" — enabling every child in Israel to spread their wings, identify their curiosity and unique strengths, and learn to use technology and creativity to impact the world. During emergencies, the Zoom sessions create an anchor of connection, creativity, and sense of capability.
- **Image column**: A stock photo of children learning together, with a decorative light-blue rectangle offset behind it.

### 4. Benefits Section ("למה כדאי להשקיע בפעילויות שלנו?") — gray background
- Subtitle: "הפעילויות שלנו מעניקות ערך משולש: לילדים, להורים ולארגון כולו. זו השקעה קטנה עם אימפקט ענק."
- 5 cards in a responsive grid, each with an emoji icon, title, and description:
  1. ❤️ **תמיכה אמיתית בהורים** — quality, safe solution for kids during sensitive hours, giving parents peace of mind.
  2. 💡 **חוויה עם ערך** — educational and fun content combining AI and creativity.
  3. 👥 **בניית קהילה** — creating belonging and connection among employees' children.
  4. 🤝 **חיזוק מחוברות העובדים** — employees feel valued, leading to pride, gratitude, and loyalty.
  5. 🚀 **השקעה קטנה, אימפקט גדול** — accessible, simple, and effective with immediate positive impact.

### 5. Activities Section ("תכניות הפעילות שלנו")
- Subtitle: "פעילויות מגוונות ואינטראקטיביות, הנגישות גם מהטלפון. כל פעילות מעודדת ביטוי אישי, יצירתיות ותחושת מסוגלות."
- **Tabbed interface** with pill-shaped tab buttons for 4 age groups:

  **Tab: כיתות א'-ג'**
  - 🎁 **מה יש בקופסה?** — kids suggest funny/clever ideas for a secret invention, then imagine one that helps in emergencies.
  - 🤖 **AI, תפתיע אותי!** — making up stories for weird AI-generated images.
  - 🤸 **תנועה חכמה עם AI** — kids move at home to funny AI-written movement commands like "jump like a robot late for school."

  **Tab: כיתות ד'-ו'**
  - 🎯 **AI ממציא אתגר** — AI invents a challenge (e.g., "build something to manage a class of cats"), kids propose creative solutions.
  - 🖼️ **תחרות תמונה משוגעת** — who beats the AI? Kids vote on the coolest AI-generated image and invent new image ideas.
  - 🦸 **בונים גיבור-על עם AI** — invent a superhero's name, power, appearance, and weakness, with AI-generated character images for inspiration.

  **Tab: כיתות ז'-ט'**
  - 🎙️ **AI מראיין אותי** — kids answer AI interview questions like "what skill would you like to develop?" and share surprising insights.
  - ⏱️ **מיזם ב-20 דקות** — develop a startup/product idea with AI help, including name, slogan, and basic logo.
  - 🎭 **דמות על גבול הדמיון** — choose a genre (humor/fantasy/action) and create a main character for a story or game.

  **Tab: כיתות י'-י"ב**
  - 🎬 **תסריט טיקטוק ב-60 שניות** — write a short TikTok script (humorous or dramatic) on a personal/social topic with AI help.
  - 🧭 **חוזקות ועתיד** — AI-guided conversation where students discover their strengths and learning preferences.
  - 🧠 **בינה מלאכותית נגד סטריאוטיפים** — ask AI loaded questions (e.g., "who succeeds in tech?"), analyze the answers, and discuss how to teach AI differently.

- Each activity is shown as a card with a colored left border.

### 6. Additional Services Section ("שירותים נוספים שלנו") — gray background
- Subtitle: "מעבר לפעילויות הזום, אנו מציעים מגוון רחב של תכניות והכשרות לעולם החינוך."
- 4 items, each with an emoji icon, title, and description:
  1. 🎓 **תכניות יזמות ובינה מלאכותית** — annual programs for schools/municipalities, grades 4+.
  2. 🛠️ **הכשרות STEAM ובינה מלאכותית** — advanced tech workshops for students and educators.
  3. 🚀 **ייעוץ והטמעת חדשנות** — guiding schools in implementing pedagogical and technological innovation.
  4. 🏘️ **הקמת קהילות חינוכיות** — building communities of children, parents, and educators fostering entrepreneurship and curiosity.

### 7. CTA Section ("מוכנים לפרוש כנפיים?")
- Blue gradient background overlay on a stock image.
- White text: "צרו קשר עוד היום כדי להעניק לילדי העובדים שלכם קיץ של יצירה, הנאה וצמיחה. לחצו על הכפתור למילוי שאלון הרשמה וקבלת פרטים נוספים."
- Gold "הרשמה לפעילות" button linking to the same Google Form as the hero.

### 8. Footer
- Dark background, centered text: "© 2024 לפרוש כנפיים. כל הזכויות שמורות."

## Responsive Behavior
- On mobile (≤768px): single-column layouts, hamburger menu, slightly smaller font sizes and headings.

## Interactions
- Smooth scroll to sections on nav link click.
- Scroll-triggered fade-in animations on all major elements.
- Tab switching in activities section with a subtle fade animation.
- Mobile menu closes when a link is tapped.
