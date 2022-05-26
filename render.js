import boxen from 'boxen';
import chalk from 'chalk';
import columnify from 'columnify';

const contacts = [
  { name: 'Web', content: chalk.blue('https://backenddoctor.com') },
  {},
  {
    name: 'LinkedIn',
    content: `https://linkedin.com/company/${chalk.blue('backenddoctor')}`,
  },
  {
    name: 'Twitter',
    content: `https://twitter.com/${chalk.cyan('BackendDoctor')}`,
  },
  {},
  {
    name: 'GitHub',
    content: `https://github.com/${chalk.green('backenddoctor')}`,
  },
  {
    name: 'npm',
    content: `https://npmjs.com/${chalk.red('~backenddoctor')}`,
  },
];

const boxConfig = {
  borderStyle: 'round',
  padding: 1,
  margin: 1,
  float: 'left',
  textAlignment: 'center',
  title: chalk.bold.red(`npx ${process.env.npm_package_name}`),
  titleAlignment: 'center',
};

const contactsTable = columnify(contacts, {
  showHeaders: false,
  columnSplitter: '  ',
  config: {
    name: {
      align: 'right',
      dataTransform: (key) => chalk.white.bold(key),
    },
    content: {
      align: 'left',
    },
  },
});

const skills = ['DevOps', 'CI/CD', 'AWS', 'Docker', 'Kubernetes', 'TypeScript'];

const content = [
  chalk.bold.white('Backend Doctor'),
  'Cloud Consulting Company',
  '',
  skills.join(' - '),
  '',
  contactsTable,
].join('\n');

process.stdout.write('\x1b[2J');
process.stdout.write('\x1b[0f');

console.log(chalk.green(boxen(chalk.blackBright(content), boxConfig)));
