type DevIconLib = 'FA' | 'FA5' | 'MI' | 'MCI' | 'II';

export type DevIcon = {
  name: string;
  icon: string;
  lib: DevIconLib;
  size?: string;
  color?: string;
};

const DevIcons: DevIcon[] = [
  {
    name: 'HTML5',
    icon: 'html5',
    lib: 'FA',
    color: '#E34F26',
  },
  {
    name: 'CSS3',
    icon: 'css3-alt',
    lib: 'FA5',
    color: '#1572B6',
  },
  {
    name: 'JavaScript',
    icon: 'language-javascript',
    lib: 'MCI',
    color: '#F7DF1E',
  },
  {
    name: 'TypeScript',
    icon: 'language-typescript',
    lib: 'MCI',
    color: '#007ACC',
  },
  {
    name: 'React',
    icon: 'react',
    lib: 'FA5',
    color: '#61DAFB',
  },
  {
    name: 'Vue',
    icon: 'vuejs',
    lib: 'FA5',
    color: '#4FC08D',
  },
  {
    name: 'Angular',
    icon: 'angular',
    lib: 'FA5',
    color: '#DD0031',
  },
  {
    name: 'NodeJS',
    icon: 'node-js',
    lib: 'FA5',
    color: '#339933',
  },
  {
    name: 'Webpack',
    icon: 'webpack',
    lib: 'MCI',
    color: '#8DD6F9',
  },
  {
    name: 'Babel',
    icon: 'babel',
    lib: 'MCI',
    color: '#F9DC3E',
  },
  {
    name: 'Sass',
    icon: 'sass',
    lib: 'FA5',
    color: '#CC6699',
  },
  {
    name: 'Bootstrap',
    icon: 'bootstrap',
    lib: 'MCI',
    color: '#7952B3',
  },
  {
    name: 'Tailwind',
    icon: 'tailwind',
    lib: 'MCI',
    color: '#38B2AC',
  },
  {
    name: 'Material UI',
    icon: 'material-ui',
    lib: 'MCI',
    color: '#0081CB',
  },
  {
    name: 'Git',
    icon: 'git',
    lib: 'FA',
    color: '#F05032',
  },
  {
    name: 'GitHub',
    icon: 'github',
    lib: 'FA',
    color: '#181717',
  },
];

export default DevIcons;
