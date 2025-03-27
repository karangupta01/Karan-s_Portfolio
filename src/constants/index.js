import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a results-driven Full Stack Developer with 1+ year of experience in designing and developing scalable, responsive web applications. Proficient in front-end technologies like React and back-end frameworks such as Node.js, I excel at creating seamless user experiences. Passionate about problem-solving, optimizing performance, and staying ahead of emerging technologies.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    company: "GlobalLogic Technologies Pvt Ltd - A Hitachi Group of Company",
    role: "Associate Analyst",
    year: "Feb'24 - March'25",
    description:
      "Experienced Full Stack Developer with 1+ year of expertise in designing, developing, and deploying dynamic web applications. Proficient in front-end and back-end technologies, including JavaScript, React, Node.js, and databases. Passionate about building scalable solutions, optimizing performance, and delivering seamless user experiences. Adept at problem-solving, collaboration, and staying updated with emerging technologies.",
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
    image: project1,
    description:
      "An AI-powered travel planner built with React.js and JavaScript, integrating Google APIs and Gemini AI to create personalized itineraries, suggest destinations, optimize routes, and provide real-time updates and booking options.",
    technologies: ["React","Google API","Gemini AI" ,"Google Authentication", "FireBase"],
    link: "https://github.com/karangupta01/AI-Travel-Planner.git",
  },
  {
    title: "Blog Website",
    image: project2,
    description:
      "A blog website built with React, featuring Appwrite as a BaaS for seamless authentication, media uploads, and database management. Integrated TinyMCE for rich text editing, providing an intuitive and dynamic content creation experience. Offers tutorials and insights on modern web development practices, empowering developers to stay ahead in the tech landscape.",
    technologies: ["React", "Javascript", "Appwrite", "TinyMCE"],
    link: "https://github.com/karangupta01/Blog-Website-.git",
  },
  {
    title: "Video Tube Backend",
    image: project3,
    description:
      "VideoTube Backend A professional and optimized backend application using Node.js, Express, and MongoDB to manage video streaming, user authentication, comments, likes, subscriptions, and media uploads securely.",
    technologies: ["Express", "Javascript", "Authentication", "Nodejs"],
    link: "https://github.com/karangupta01/VIDEOTUBE-Backend-Project.git",
  },
  {
    title: "Video Streaming App",
    image: project4,
    description:
      "A full-stack video streaming app using React (frontend), Node.js/Express (backend), and FFmpeg middleware for video processing. Supports file uploads, encoding, and real-time streaming with a responsive user interface.",
    technologies: ["React", "Ffmpeg", "Nodejs", "Axios"],
    link: "https://github.com/karangupta01/Full-Stack-Video-Streaming-Project.git",
  },
  {
    title: "Stock Sentiment Analysis",
    image: project2,
    description:
      "Stock Sentiment Analysis uses NLP to evaluate news headlines, identifying positive, negative, or neutral sentiments to help investors gauge market trends.",
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
