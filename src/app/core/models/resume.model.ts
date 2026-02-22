export interface Profile {
    name: string;
    role: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    links: {
        linkedin: string;
        github: string;
        portfolio: string;
    };
    summary: string;
}

export interface Experience {
    company: string;
    role: string;
    date: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
    tags: string[];
}

export interface Education {
    institution: string;
    degree: string;
    date: string;
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    status: string;
}

export interface Publication {
    date: string;
    title: string;
    authors: string;
    conference: string;
    link: string;
}

export interface Resume {
    profile: Profile;
    experience: Experience[];
    skills: SkillCategory[];
    projects: Project[];
    publications: Publication[];
    education: Education[];
    certifications: Certification[];
}
