const Portfolio = require('../models/Portfolio');

const PORTFOLIO_DATA = {
  hero: {
    name: 'Yuvraj Singh Sisodiya',
    role: 'MERN Stack Developer & CS Engineer',
    bio: 'B.Tech Computer Science student at Lovely Professional University, passionate about building full-stack web applications. I love turning ideas into scalable, production-grade products using the MERN stack.',
    tagline: 'Available for opportunities',
    github: 'https://github.com/Yuvrajr17',
    linkedin: 'https://www.linkedin.com/in/yuvraj-r17',
    email: 'yuvraj@gmail.com',
    phone: '+91 8719041511',
  },
  about: {
    intro: "Hey! I'm Yuvraj, a full-stack developer in the making — currently in my second year of B.Tech CSE at Lovely Professional University, Phagwara. I thrive at the intersection of logic and creativity, building web apps that are both functional and well-crafted. I'm deeply invested in the MERN ecosystem and enjoy solving algorithmic challenges on LeetCode to sharpen my DSA fundamentals.",
    qualities: [
      'DSA Problem Solver', 'Full-Stack Builder', 'Quick Learner',
      'Leadership', 'System Thinker', 'OOP Enthusiast', 'CS Fundamentals', 'Coffee + Code'
    ],
  },
  skills: [
    {
      category: 'Languages',
      items: [
        { name: 'JavaScript', level: 88 },
        { name: 'Java', level: 78 },
        { name: 'C', level: 72 },
        { name: 'PHP', level: 68 },
        { name: 'HTML / CSS', level: 90 },
      ]
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'React.js', level: 82 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 },
        { name: 'Bootstrap', level: 75 },
        { name: 'Tailwind CSS', level: 72 },
      ]
    },
    {
      category: 'Databases & Tools',
      items: [
        { name: 'MongoDB', level: 82 },
        { name: 'PostgreSQL', level: 68 },
        { name: 'MySQL', level: 70 },
        { name: 'Git', level: 80 },
        { name: 'VS Code / XAMPP', level: 85 },
      ]
    },
    {
      category: 'Core CS Fundamentals',
      items: [
        { name: 'DSA', level: 80 },
        { name: 'OOP', level: 82 },
        { name: 'Operating Systems', level: 70 },
        { name: 'Networking', level: 65 },
        { name: 'REST APIs', level: 84 },
      ]
    }
  ],
  projects: [
    {
      name: 'Personalized Roadmap Generator',
      stack: 'MERN Stack',
      period: "Oct '25 – Nov '25",
      description: [
        'Engineered a full-stack platform to generate personalized career roadmaps based on user goals, enhancing learning efficiency and decision-making.',
        'Crafted responsive UI components using React.js with dynamic state management for an interactive user experience.',
        'Architected RESTful APIs using Node.js and Express.js to process user inputs and generate recommendations.',
        'Integrated MongoDB for efficient data storage and retrieval of user profiles with scalable data management.',
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript'],
      github: 'https://github.com/Yuvrajr17',
      live: '',
    },
    {
      name: 'AI-Powered Server Log Management',
      stack: 'Web Application',
      period: "Mar '25 – Apr '25",
      description: [
        'Developed a web-based log monitoring and analysis system using PHP, JavaScript, HTML, and Tailwind CSS.',
        'Implemented log filtering, pattern detection, and anomaly identification to help administrators troubleshoot server errors.',
        'Visualized real-time server data through interactive dashboards to improve monitoring efficiency.',
        'Structured and categorized log data to streamline analysis workflows and enhance troubleshooting speed.',
      ],
      tech: ['PHP', 'JavaScript', 'HTML', 'Tailwind CSS', 'MySQL'],
      github: 'https://github.com/Yuvrajr17',
      live: '',
    },
  ],
  education: [
    {
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Technology — Computer Science & Engineering',
      period: 'Aug 2023 – Present',
      location: 'Phagwara, Punjab',
      score: '7.32',
      scoreLabel: 'CGPA',
      accentColor: '#63b3ed',
    },
    {
      institution: 'Gurukul School',
      degree: 'Intermediate (12th Standard)',
      period: 'Mar 2020 – Jun 2022',
      location: 'Dhamnod, Madhya Pradesh',
      score: '76%',
      scoreLabel: 'Percentage',
      accentColor: '#4fd1c5',
    },
    {
      institution: 'Gurukul School',
      degree: 'Matriculation (10th Standard)',
      period: 'Apr 2019 – Mar 2020',
      location: 'Dhamnod, Madhya Pradesh',
      score: '73%',
      scoreLabel: 'Percentage',
      accentColor: '#f6ad55',
    },
  ],
  certifications: [
    { name: 'Cloud Computing', issuer: 'NPTEL · IIT Kharagpur', period: "Jan '25 – Apr '25", icon: '☁️' },
    { name: 'DSA using Java', issuer: 'Apna College', period: "Sep '23 – Jan '24", icon: '☕' },
    { name: 'Bits & Bytes of Computer Networking', issuer: 'Google · Coursera', period: "Sep '24 – Oct '24", icon: '🌐' },
    { name: 'Introduction to Hardware & Operating Systems', issuer: 'IBM · Coursera', period: "Aug '24 – Sep '24", icon: '💻' },
  ],
  achievements: [
    {
      title: 'LeetCode Competitive Programmer',
      description: 'Solved 150+ algorithmic problems across multiple difficulty levels (Dec 2023 – Present). Demonstrates strong command of Data Structures & Algorithms, time-space complexity optimization, and analytical problem-solving.',
      badge: '🧩',
    },
    {
      title: 'Full-Stack Development using MERN – CSE Pathshala',
      description: "Completed intensive hands-on training (Jun '25 – Jul '25) in MongoDB, Express.js, React.js, and Node.js, focusing on full-stack application development, REST API design, and deployment workflows.",
      badge: '🏆',
    },
  ],
  extracurricular: [
    { title: 'Competitive DSA', description: 'Regularly solving problems on LeetCode to sharpen algorithmic thinking and coding speed.', icon: '🧩' },
    { title: 'Self-Learning', description: 'Constantly exploring new technologies, frameworks, and CS concepts through online platforms.', icon: '📚' },
    { title: 'Leadership', description: 'Taking initiative in team projects and mentoring peers in coding fundamentals.', icon: '🤝' },
    { title: 'Open Source Interest', description: 'Exploring open-source communities and contributing to projects on GitHub.', icon: '🔧' },
  ],
};

// GET full portfolio data (seed if empty)
exports.getPortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne();
    if (!portfolio) {
      portfolio = await Portfolio.create(PORTFOLIO_DATA);
    }
    res.json({ success: true, data: portfolio });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// POST seed/reset portfolio
exports.seedPortfolio = async (req, res) => {
  try {
    await Portfolio.deleteMany();
    const portfolio = await Portfolio.create(PORTFOLIO_DATA);
    res.json({ success: true, message: 'Portfolio seeded', data: portfolio });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
