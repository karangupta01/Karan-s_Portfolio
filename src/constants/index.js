import projectai from "../assets/projects/projectai.png"
import projectblog from "../assets/projects/projectblog.png"
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I'm a Software Developer with 1+ years of experience in building and maintaining efficient, scalable solutions. I’ve worked with Python, JavaScript, React, and Node.js, and I’m passionate about clean code, problem-solving, and building user-focused applications in agile environments.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    company: "GlobalLogic Technologies Pvt Ltd - A Hitachi Group of Company",
    role: "Associate Analyst",
    year: "Feb'24 - March'25",
    description:
      "As an Associate Analyst at GlobalLogic, where I collaborate with engineering teams to validate outputs from AI-driven systems. My role involves Python scripting, data handling, and quality assurance processes within agile workflows—giving me hands-on experience with tools and practices commonly used in full stack development. This foundation has fueled my transition into full stack engineering, where I'm now building projects that combine my understanding of backend systems and frontend technologies.",
  },
  {
    company: "Sky Bug Technologies",
    role: "Full Stack Developer",
    year: "Dec'23 - Jan'24",
    description:
      "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
  },
  {
    company: "Knocial India Limited",
    role: "Full Stack Developer",
    year: "Aug'23 - Nov'23",
    description:
      "Gained hands-on experience in front-end and back-end development, contributing to dynamic web applications. Worked with technologies like HTML, CSS, JavaScript, and Node.js. Collaborated with senior developers to debug, optimize, and enhance application performance while adhering to project timelines and best practices. Developed a strong foundation in responsive design and API integration.",
  },
];

export const PROJECTS = [
  {
    title: "AI Travel Planner",
    image: projectai,
    description:
      "An AI-powered travel planner built with React.js and JavaScript, integrating Firebase for real-time data management, Google APIs for maps, places, and directions, and Gemini AI for intelligent recommendations. It creates personalized itineraries, suggests destinations based on user preferences, optimizes travel routes, and provides real-time updates and seamless booking options. Key achievements include dynamic itinerary generation, user authentication with Firebase Auth, cloud storage integration, responsive UI/UX design, and real-time chat support powered by AI for travel assistance.",
    technologies: ["React","Google API","Gemini AI" ,"Google Authentication", "FireBase"],
    link: "https://github.com/karangupta01/AI-Travel-Planner.git",
  },
  {
    title: "Blog Website",
    image: projectblog,
    description:
      "A dynamic blog website built with React.js, leveraging Appwrite as a robust Backend-as-a-Service (BaaS) for user authentication, real-time database management, and secure media file storage. TinyMCE is integrated for rich text editing, enabling seamless formatting and content creation. The project utilizes Appwrite Functions for server-side logic, React Router for smooth navigation, and Tailwind CSS for responsive, modern UI design. Key achievements include secure user role management, real-time content updates, scalable architecture, and a CMS-like interface empowering developers with tutorials and insights on cutting-edge web development trends.",
    technologies: ["React", "Javascript", "Appwrite", "TinyMCE"],
    link: "https://github.com/karangupta01/Blog-Website-.git",
  },
  {
    title: "Video Tube Backend",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/e69ab290704783.5e39e8ad5f86f.gif",
    description:
      "VideoTube Backend is a professional, scalable backend application built with Node.js and Express.js, using MongoDB for efficient NoSQL data storage. It supports comprehensive video streaming features, including secure user authentication with JWT and bcrypt, robust CRUD operations, comment threads, like/dislike systems, and user subscriptions. Media uploads are handled via Multer and stored securely using Cloudinary. Key achievements include RESTful API design, efficient query optimization, rate limiting, error handling middleware, and a modular, production-ready codebase with Mongoose schema validation.",
    technologies: ["Express", "Javascript", "Authentication", "Nodejs"],
    link: "https://github.com/karangupta01/VIDEOTUBE-Backend-Project.git",
  },
  {
    title: "Video Streaming App",
    image: "https://i.pinimg.com/originals/83/46/f4/8346f4d15db10df3e612e7259f7f9672.gif",
    description:
      "A full-stack video streaming application built with React for the frontend and Node.js/Express for the backend, integrated with FFmpeg middleware for video processing. It supports efficient file uploads, encoding, thumbnail generation, and real-time streaming. Features include a responsive UI, playback controls, and optimized performance for smooth user experience across devices. Ideal for content creators and viewers alike.",
    technologies: ["React", "Ffmpeg", "Nodejs", "Axios"],
    link: "https://github.com/karangupta01/Full-Stack-Video-Streaming-Project.git",
  },
  {
    title: "Stock Sentiment Analysis",
    image: project4,
    description:
      "Stock Sentiment Analysis leverages Natural Language Processing (NLP) and machine learning algorithms like Random Forest Classifier, Naive Bayes, and Passive Aggressive Classifier to analyze financial news headlines. It uses techniques like Bag of Words for text vectorization, enabling accurate classification into positive, negative, or neutral sentiments. This tool helps investors track market sentiment and make data-driven decisions effectively.",
    technologies: ["Python", "Machine Learning"],
    link: "https://github.com/karangupta01/Stock-Sentiment-Analysis.git",
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  address: " New Delhi, INDIA ",
  phoneNo: "+12 4555 666 00 ",
  email: "karangupta1017@gmail.com",
};
