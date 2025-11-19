import { Experience, Project, SkillCategory, Certification } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'cub_lead',
    role: 'experience.items.cub_lead.role',
    company: 'experience.items.cub_lead.company',
    period: 'experience.items.cub_lead.period',
    description: 'experience.items.cub_lead.desc',
    images: [
      '/image/experience/10-1.jpg',
      '/image/experience/11-2.jpg',
      '/image/experience/11-3.jpg'
    ]
  },
  {
    id: 'cub_robo',
    role: 'experience.items.cub_robo.role',
    company: 'experience.items.cub_robo.company',
    period: 'experience.items.cub_robo.period',
    description: 'experience.items.cub_robo.desc',
    images: [
      '/image/experience/10-1.jpg',
      '/image/experience/10-2.jpg',
      '/image/experience/10-3.jpg'
    ]
  },
  {
    id: 'teco',
    role: 'experience.items.teco.role',
    company: 'experience.items.teco.company',
    period: 'experience.items.teco.period',
    description: 'experience.items.teco.desc',
    images: [
      '/image/experience/9-1.png',
      '/image/experience/9-2.png',
      '/image/experience/9-3.png'
    ]
  },
  {
    id: 'military',
    role: 'experience.items.military.role',
    company: 'experience.items.military.company',
    period: 'experience.items.military.period',
    description: 'experience.items.military.desc',
    images: [
      '/image/experience/8-1.jpg',
      '/image/experience/8-2.jpg',
      '/image/experience/8-3.jpg'
    ]
  },
  {
    id: 'master',
    role: 'experience.items.master.role',
    company: 'experience.items.master.company',
    period: 'experience.items.master.period',
    description: 'experience.items.master.desc',
    images: [
      '/image/experience/5-1.jpg',
      '/image/experience/7-2.jpg',
      '/image/experience/7-3.jpg'
    ]
  },
  {
    id: 'mirdc',
    role: 'experience.items.mirdc.role',
    company: 'experience.items.mirdc.company',
    period: 'experience.items.mirdc.period',
    description: 'experience.items.mirdc.desc',
    images: [
      '/image/experience/6-1.jpg',
      '/image/experience/6-2.jpg',
      '/image/experience/6-3.jpg'
    ]
  },
  {
    id: 'bachelor',
    role: 'experience.items.bachelor.role',
    company: 'experience.items.bachelor.company',
    period: 'experience.items.bachelor.period',
    description: 'experience.items.bachelor.desc',
    images: [
      '/image/experience/5-1.jpg',
      '/image/experience/5-2.jpg',
      '/image/experience/5-3.jpg'
    ]
  },
  {
    id: 'digi',
    role: 'experience.items.digi.role',
    company: 'experience.items.digi.company',
    period: 'experience.items.digi.period',
    description: 'experience.items.digi.desc',
    images: [
      '/image/experience/4-1.jpg',
      '/image/experience/4-2.jpg',
      '/image/experience/4-3.jpg'
    ]
  },
  {
    id: 'yaja',
    role: 'experience.items.yaja.role',
    company: 'experience.items.yaja.company',
    period: 'experience.items.yaja.period',
    description: 'experience.items.yaja.desc',
    images: [
      '/image/experience/3-1.jpg',
      '/image/experience/3-2.jpg',
      '/image/experience/3-3.jpg'
    ]
  },
  {
    id: 'cio',
    role: 'experience.items.cio.role',
    company: 'experience.items.cio.company',
    period: 'experience.items.cio.period',
    description: 'experience.items.cio.desc',
    images: [
      '/image/experience/2-1.jpg',
      '/image/experience/2-2.jpg',
      '/image/experience/2-3.jpg'
    ]
  },
  {
    id: 'highschool',
    role: 'experience.items.highschool.role',
    company: 'experience.items.highschool.company',
    period: 'experience.items.highschool.period',
    description: 'experience.items.highschool.desc',
    images: [
      '/image/experience/1-1.jpg',
      '/image/experience/1-2.jpg',
      '/image/experience/1-3.jpg'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    titleKey: 'skills.cat_frontend',
    skills: [
      { key: 'frameworks', level: 99 },
      { key: 'html', level: 95 },
      { key: 'css', level: 95 },
      { key: 'js_ts', level: 98 },
      { key: 'rwd', level: 95 },
      { key: 'storage', level: 90 },
      { key: 'security', level: 92 },
      { key: 'dom', level: 95 }
    ]
  },
  {
    id: 'design',
    titleKey: 'skills.cat_design',
    skills: [
      { key: 'ui_ux', level: 90 },
      { key: 'code_style', level: 95 },
      { key: 'git', level: 95 },
      { key: 'data_viz', level: 85 },
      { key: 'three_d', level: 80 },
      { key: 'wordpress', level: 85 },
      { key: 'other_tech', level: 90 },
      { key: 'tools', level: 95 }
    ]
  },
  {
    id: 'backend',
    titleKey: 'skills.cat_backend',
    skills: [
      { key: 'node', level: 85 },
      { key: 'auto_test', level: 80 },
      { key: 'python', level: 85 },
      { key: 'php', level: 80 },
      { key: 'sql', level: 85 },
      { key: 'data_mining', level: 75 },
      { key: 'other_backend', level: 70 }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { id: 'c1', name: 'skills.certs.digi' },
  { id: 'c2', name: 'skills.certs.mobile' },
  { id: 'c3', name: 'skills.certs.soft_app_b' },
  { id: 'c4', name: 'skills.certs.ecom' },
  { id: 'c5', name: 'skills.certs.erp' },
  { id: 'c6', name: 'skills.certs.assist' },
  { id: 'c7', name: 'skills.certs.tqc_oop' },
  { id: 'c8', name: 'skills.certs.tqc_ecom' },
  { id: 'c9', name: 'skills.certs.tqc_pm' },
  { id: 'c10', name: 'skills.certs.tqc_proj' },
  { id: 'c11', name: 'skills.certs.biz_mgmt' },
  { id: 'c12', name: 'skills.certs.stats' },
  { id: 'c13', name: 'skills.certs.mos' },
  { id: 'c14', name: 'skills.certs.english' },
  { id: 'c15', name: 'skills.certs.lttc' },
  { id: 'c16', name: 'skills.certs.accounting' },
  { id: 'c17', name: 'skills.certs.soft_app_c' },
  { id: 'c18', name: 'skills.certs.soft_design' },
  { id: 'c19', name: 'skills.certs.web_design' },
  { id: 'c20', name: 'skills.certs.typing_cn' },
  { id: 'c21', name: 'skills.certs.typing_en' }
];

export const PROJECTS: Project[] = [
  {
    id: 'cathay_mybank',
    size: 'md',
    title: 'Cathay Mybank 國泰世華網路銀行',
    description: '',
    tags: ['React', 'TypeScript', 'Chakra UI', 'Jotai'],
    imageUrl: '/image/works/cathay_mybank.png',
    link: 'https://www.cathaybk.com.tw/MyBank'
  },
  {
    id: 'cathay_robo',
    size: 'sm',
    title: 'ROBO 智能投資',
    description: '',
    tags: ['Angular', 'TypeScript', 'Tailwind'],
    imageUrl: '/image/works/cathay_robo.png',
    link: 'https://www.cathayrobo.com/'
  },
  {
    id: 'itts',
    size: 'md',
    title: '內部系統',
    description: 'ESG碳資產管理、EIP企業入口、郵件收發、長照、SCM供應鏈管理-DMS/EPM/MES/WMS等',
    tags: ['Angular', 'TypeScript', 'jQuery', 'Bootstrap'],
    imageUrl: '/image/works/itts.png',
    link: ''
  },
  {
    id: 'lb',
    size: 'sm',
    title: '雜誌媒體網站',
    description: '',
    tags: ['WordPress', 'PHP', 'JavaScript', 'SCSS'],
    imageUrl: '/image/works/lb.jpg',
    link: ''
  },
  {
    id: 'movie_studio',
    size: 'sm',
    title: '影像工作室官網',
    description: '',
    tags: ['JavaScript', 'SCSS'],
    imageUrl: '/image/works/movie_studio.jpg',
    link: ''
  },
];
