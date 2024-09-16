import image1 from "../../../../public/image-4.png";
import image2 from "../../../../public/image-6.png";
import image3 from "../../../../public/image-1.png";
import image4 from "../../../../public/image-10.png";
import image5 from "../../../../public/image-5.png";
import image6 from "../../../../public/image-3.png";
import image7 from "../../../../public/image-9.png";
import image8 from "../../../../public/image-11.png";
import image9 from "../../../../public/image-2.png";
import image10 from "../../../../public/image-7.png";
import image11 from "../../../../public/image-8.png";
import image12 from "../../../../public/image-12.png";
import { StaticImageData } from "next/image";

export interface PortfolioProp {
  id: number;
  name: string;
  link: string;
  github: string;
  image: StaticImageData;
  desc: string;
}

export const portfolio: PortfolioProp[] = [
  {
    id: 1,
    name: "MayaBeauty",
    image: image1,
    link: "https://mayabeauty.netlify.app/",
    github: "https://github.com/Mayadihno/next-afrobeauty",
    desc: "MayaBeauty is a multivendor e-commerce platform for beauty and fashion products, built with Next.js 14 and TypeScript. This project showcases a seamless user experience, allowing customers to browse and purchase high-quality products from multiple vendors with ease. With a focus on providing a one-stop-shop for beauty enthusiasts, MayaBeauty offers a wide range of cosmetics, fashion accessories, and styling services. The application's robust architecture ensures efficient handling of complex operations, while TypeScript guarantees maintainable and error-free code. As a multivendor platform, MayaBeauty empowers vendors to reach a wider audience, manage their products and services, and fulfill orders efficiently. By harnessing the strengths of Next.js and TypeScript, MayaBeauty sets a new standard for e-commerce platforms in the beauty industry.",
  },
  {
    id: 2,
    name: "Declutter",
    image: image2,
    link: "https://declutter-app.netlify.app/",
    github: "https://github.com/Mayadihno/declutter-app",
    desc: "Declutter is a multivendor e-commerce platform for gently used clothing, built with React and powered by Firebase. This project showcases a seamless user experience, allowing customers to browse and purchase high-quality, pre-loved items from multiple vendors with ease. With a focus on reducing fashion waste, Declutter provides a platform for users to extend the life of their clothing and discover unique, second-hand pieces from various sellers. The application's scalable architecture, courtesy of Firebase, ensures efficient handling of user data, inventory management, and vendor onboarding, while React enables a smooth and responsive interface. By combining technology and sustainability, Declutter promotes a more conscious approach to fashion consumption and empowers vendors to reach a wider audience.",
  },
  {
    id: 3,
    name: "Firsttesta",
    image: image3,
    link: "https://firsttesta.netlify.app/",
    github: "https://github.com/Mayadihno/firsttesta",
    desc: "FirstTesta is a revolutionary healthcare platform built with React, dedicated to making fast and quality healthcare accessible to every Nigerian. This innovative project leverages cutting-edge technology to bridge the gap in healthcare services, providing users with a seamless and efficient experience. With FirstTesta, individuals can easily access medical consultation, book appointments, and receive personalized health advice from certified professionals. The platform's user-friendly interface, powered by React, ensures a smooth and responsive experience, while its robust architecture enables scalable and reliable healthcare delivery. By harnessing the power of technology, FirstTesta is transforming the healthcare landscape in Nigeria, making quality care accessible to all.",
  },
  {
    id: 4,
    name: "Tel-medicine",
    image: image4,
    link: "https://tele-med.netlify.app/",
    github: "https://github.com/Mayadihno/Tele-med",
    desc: "Tel-Medicine is a cutting-edge telehealth platform built with React and Firebase, revolutionizing healthcare accessibility. This innovative website connects patients with licensed medical professionals, enabling remote consultations and personalized care.With Tel-Medicine, patients can submit medical complaints and history, select from available healthcare providers, engage in virtual consultations, and access prescribed treatments, medical records, and doctor communication through a secure dashboard. This seamless experience reduces wait times, increases accessibility, enhances patient-doctor communication, and ensures secure, HIPAA-compliant data storage.",
  },
  {
    id: 5,
    name: "Cryptoverse",
    image: image5,
    link: "https://mycryptosite.netlify.app/",
    github: "https://github.com/Mayadihno/Cryptoverse",
    desc: "Cryptoverse is a cutting-edge cryptocurrency news and tracking platform built with React, empowering users to stay informed and up-to-date on the latest market trends. This intuitive website provides a seamless experience for users to:Read the latest crypto news and updatesCheck current coin prices and market capitalizationAnalyze detailed charts and graphs for informed investment decisionsBy harnessing the power of React, Cryptoverse delivers a fast, responsive, and user-friendly interface, making it the go-to destination for cryptocurrency enthusiasts and investors alike.",
  },
  {
    id: 6,
    name: "Cyber Security Assignment",
    image: image6,
    link: "https://nija-donation.netlify.app/",
    github: "https://github.com/Mayadihno/nija-cyber",
    desc: "Cyber Security Assignment is a comprehensive University of Sunderland master's project built with React and Firebase, focusing on password security and user authentication. This web application enables users to register and receive email verification with a login link, access a personalized profile dashboard, and receive password strength analysis in percentage form, assessing the strength of their password and providing feedback for improvement. By combining React's seamless user experience with Firebase's robust authentication and security capabilities, this project demonstrates a robust password security solution, educating users on best practices for password creation.",
  },
  {
    id: 7,
    name: "Tokyo Olympics",
    image: image7,
    link: "https://tokyolympic.netlify.app/",
    github: "https://github.com/Mayadihno/jane-funolympic",
    desc: "Tokyo Olympics Website is a dynamic University of Sunderland master's project built with React and Firebase, providing real-time updates on Olympic games in Tokyo, where local users register with phone numbers, receiving OTPs for login, and international users register with email, name, and additional details, to access a scoreboard for up-to-date scores and rankings, a news section for latest Olympic news, and an admin dashboard to add/remove images, videos, and news, and manage user roles, assigning/revoke admin privileges, showcasing location-based registration and authentication, role-based access control, and real-time updates and content management, delivering an engaging experience for users worldwide, while empowering administrators to efficiently manage content and user permissions.",
  },
  {
    id: 8,
    name: "Spa City Referral Code",
    image: image8,
    link: "https://spacity-temmytop.netlify.app/",
    github: "",
    desc: "Spa City Referral Code is a innovative web application built with React and EmailJS, streamlining the referral process for spa services. Users simply input their name, phone number, and unique referral code, received from a vendor, to generate a personalized referral card. This card is then emailed to the user, featuring a discount code, which can be presented at the spa to redeem exclusive offers. By leveraging React's seamless user experience and EmailJS's robust email functionality, Spa City Referral Code efficiently connects vendors, users, and spa services, making it easy to share and redeem referrals.",
  },
  {
    id: 9,
    name: "Reiki",
    image: image9,
    link: "https://miracleapp.netlify.app/",
    github: "https://github.com/Mayadihno/miracle",
    desc: "Reiki is a serene web experience built with React, embracing the ancient healing art of energy balance and harmony. Imagine sinking into a state of profound relaxation, enveloped in a soothing flow of positive energy. This immersive platform guides you through the timeless practice of Reiki, working in tandem with your body's natural energy to cultivate balance, release tension, and nurture inner peace. As you explore Reiki, discover a gentle, loving embrace for your soul, and unlock a deeper sense of calm and well-being.",
  },
  {
    id: 10,
    name: "Finbarn",
    image: image10,
    link: "https://finbarn.com/",
    github: "https://github.com/Mayadihno/finbarn",
    desc: "Finbarn is a cutting-edge agricultural marketplace built with React, revolutionizing the way commodities are sourced and traded. As a leading exporter of Agro commodities in Nigeria, FINBARN WEPO Ltd connects local farmers with global markets, streamlining the supply chain for Sesame Seeds, Ginger, Cocoa Beans, Cashew Nuts, Maize Corn, Charcoal, Shea Butter, Coffee Beans, and Hibiscus Flower. Finbarn efficiently manages procurement, storage, and transportation, ensuring seamless delivery to customers worldwide, empowering farmers, supporting local economies, and driving growth in emerging markets, making Finbarn a pivotal player in the global Agro business landscape.",
  },
  {
    id: 11,
    name: "UmlFood",
    image: image11,
    link: "https://umlfood.com",
    github: "https://github.com/Mayadihno/umlfood",
    desc: "UmlFood is a vibrant e-commerce platform built with React, bridging the culinary gap between Nigeria and Denmark. This innovative online marketplace imports and showcases a diverse range of Nigerian food products, making them accessible to customers in Denmark. UmlFood's user-friendly interface and seamless shopping experience allow customers to explore and purchase authentic Nigerian ingredients, snacks, and spices, delivering a taste of home to the Danish community. By leveraging React's robust technology, UmlFood efficiently manages inventory, orders, and logistics, ensuring timely delivery and exceptional customer satisfaction.",
  },
  {
    id: 12,
    name: "Multimart",
    image: image12,
    link: "https://react-multimart.netlify.app/",
    github: "https://github.com/Mayadihno/multimart",
    desc: "Multimart is a dynamic e-commerce platform built with React and Firebase, offering a vast array of products to customers, showcasing a diverse range of items, from everyday essentials to unique finds, all in one convenient destination, providing a seamless and efficient shopping experience, with a user-friendly interface, diverse product catalog, secure payment processing, real-time inventory management, and efficient order management, creating a hassle-free shopping environment, making it easy for customers to find and purchase what they need.",
  },
];
