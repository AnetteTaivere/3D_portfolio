export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Experience',
        href: '#experience',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const myProjects = [
    {
        title: 'Coming soon',
        desc: 'in 2025...',
        subdesc:
            '',
        href: '',
        texture: '',
        logo: '',
        logoStyle: {
            backgroundColor: '#60f5a1',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
        ],
    },
    {
        title: 'Coming soon',
        desc: 'in 2025...',
        subdesc:
            '',
        href: '',
        texture: '',
        logo: '',
        logoStyle: {
            backgroundColor: '#60f5a1',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
        ],
    },
    {
        title: 'Coming soon',
        desc: 'in 2025...',
        subdesc:
            '',
        href: '',
        texture: '',
        logo: '',
        logoStyle: {
            backgroundColor: '#60f5a1',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [10, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'CYBERNETICA',
        pos: 'Junior Software Developer',
        duration: '04.2025 - Present',
        title: "Developed and enhanced front-end features using TypeScript and React, improving user interaction and experience by addressing bugs and implementing new, user-centric functionality.",
        icon: '/assets/cyber.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'CYBERNETICA',
        pos: 'QA Engineer (alongside Developer role)',
        duration: '04.2025 - Present',
        title: "Performed manual testing supported by SQL queries and log analysis, using Postman and Curl to test APIs. Developed automation scripts to streamline repetitive tasks.",
        icon: '/assets/cyber.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'CYBERNETICA',
        pos: 'Junior QA Engineer',
        duration: '06.2023 - 03.2025',
        title: "Wrote detailed test cases and performed manual testing to ensure application reliability. Gained hands-on experience with Cypress to automate front-end test flows and validate core functionality.",
        icon: '/assets/cyber.png',
        animation: 'salute',
    },
];