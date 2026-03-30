

export const ME = {
  name:     'Prem Kumar Sah',
  email:    'sah500prem@gmail.com',
  phone:    '+977 9824729055',
  location: 'Kathmandu, Nepal',
  github:   'https://github.com/Prem12sah',       //  GitHub URL
  linkedin: 'https://linkedin.com',     //  LinkedIn URL
  bio: 'Software enthusiast with strong skills in software development, web technologies, and problem-solving. Building efficient, scalable applications using modern tools and frameworks.',
  roles: [
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Problem Solver',
    'UI/UX Enthusiast',
  ],
  stats: [
    { v: '3+',  l: 'Years Learning'  },
    { v: '10+', l: 'Projects Built'  },
    { v: '200+',l: 'LeetCode'        },
    { v: '8',   l: 'Certificates'    },
  ],
}

export const SKILLS = {
  languages: [
    { name: 'HTML / CSS',  pct: 95, clr: '#e34f26' },
    { name: 'JavaScript',  pct: 90, clr: '#f7df1e'  },
    { name: 'Java',        pct: 95, clr: '#ed8b00'  },
    { name: 'SQL',         pct: 82, clr: '#00758f'  },
    { name: 'Python',      pct: 72, clr: '#3572a5'  },
    { name: 'C++',         pct: 68, clr: '#f34b7d'  },
  ],
  frameworks: [
    { name: 'Tailwind CSS', pct: 90, clr: '#38bdf8' },
    { name: 'React.js',     pct: 85, clr: '#61dafb'  },
    { name: 'Express.js',   pct: 80, clr: '#a0a0a0'  },
    { name: 'Node.js',      pct: 78, clr: '#68a063'  },
    { name: 'Next.js',      pct: 75, clr: '#ffffff'   },
    { name: 'Spring Boot',  pct: 70, clr: '#6db33f'  },
  ],
  tools: [
    { name: 'Git & GitHub',   icon: '⚙️' },
    { name: 'VS Code',        icon: '💻' },
    { name: 'IntelliJ IDEA',  icon: '🧠' },
    { name: 'MongoDB',        icon: '🍃' },
    { name: 'REST APIs',      icon: '🔗' },
    { name: 'DSA / OOP',      icon: '📐' },
  ],
  exploring: ['Next.js 15', 'TypeScript', 'Docker', 'AWS', 'PostgresQL', 'GraphQL', 'AI/ML'],
  concepts: [
    'Data Structures', 'Algorithms', 'OOP', 'REST APIs', 'AI/ML Basics',
    'JWT Auth', 'Payment Gateway', 'Responsive Design', 'Database Design', 'Version Control',
  ],
}

export const PROJECTS = [
  {
    id: 1, icon: '💆', color: '#ff6b6b', featured: true,
    title: 'Beauty SPA Management',
    desc:  'Full-stack spa management system with responsive customer & employee dashboards, booking flows, payment integration, and admin panels.',
    tech:  ['HTML', 'CSS', 'JavaScript','React','MongoDB', 'REST APIs'],
    github: 'https://github.com/Prem12sah',   
    demo:   'https://github.com/Prem12sah',   
  },
  {
    id: 2, icon: '📚', color: '#6c63ff', featured: true,
    title: 'Pathashala — Course Platform',
    desc:  'Full-stack MERN course selling app with admin panel, JWT auth, payment gateway integration, and modern Tailwind UI.',
    tech:  ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind', 'JWT'],
    github: 'https://github.com/Prem12sah',
    demo:   'https://github.com/Prem12sah',
  },
  {
    id: 3, icon: '🛍️', color: '#43e97b', featured: false,
    title: 'RedStore — E-Commerce',
    desc:  'Responsive e-commerce site for athletic sportswear with product listings, cart, checkout, dynamic search and mobile-first UI.',
    tech:  ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Prem12sah',
    demo:   'https://github.com/Prem12sah',
  },
]

export const EDU = [
  {
    icon: '🎓',
    title: 'B.E. Computer Science & Engineering',
    sub:   'Chandigarh University, India',
    period:'Aug 2021 – Jun 2025',
    
  },
  {
    icon: '📖',
    title: 'Higher Secondary (XII)',
    sub:   'Greenland Secondary School, Biratnagar',
    period:'2018 – 2020',
    
  },
  {
    icon: '🖥️',
    title: 'Front-end Web Development(Training)',
    sub:   'Broadways Infosys, Kathmandu',
    period:'Jun 2023 – Aug 2023',
  },
]

export const CERTS = [
  { title: 'Introduction to OOP with Java',       issuer: 'Coursera',            clr: '#6c63ff' },
  { title: 'Java For Android',                     issuer: 'Coursera',            clr: '#ff6b6b' },
  { title: 'The Complete React & Redux Course',    issuer: 'Infosys Springboard', clr: '#43e97b' },
  { title: 'Web Development with HTML, CSS, JS',   issuer: 'IBM / Coursera',      clr: '#f7b731' },
  { title: 'Database and SQL',                     issuer: 'Infosys Springboard', clr: '#4facfe' },
  { title: 'Principles of UX/UI Design',           issuer: 'Coursera',            clr: '#f093fb' },
  { title: 'JavaScript & Mobile Development',      issuer: 'Meta / Coursera',     clr: '#43e97b' },
  { title: 'AI Applications with Python & Flask',  issuer: 'IBM / Coursera',      clr: '#ff6b6b' },
]

export const NAV = [
  { l: 'Home',      h: '#home'      },
  { l: 'About',     h: '#about'     },
  { l: 'Skills',    h: '#skills'    },
  { l: 'Projects',  h: '#projects'  },
  { l: 'Education', h: '#education' },
  { l: 'Contact',   h: '#contact'   },
]

// Web3Forms access key — do not share publicly
export const W3F_KEY = '8d03024a-76d6-4753-bac4-5e80a81a62dc'
