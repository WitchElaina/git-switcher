import { GitConfigPreset } from './git.js';

type GitConfigPresets = {
  [key: string]: GitConfigPreset;
};

const presets = {
  work: {
    username: 'mashuzhao',
    email: 'mashuzhao@kuaishou.com',
  },
  github: {
    username: 'WitchElaina',
    email: 'msz13399173387@gmail.com',
  },
  db: {
    username: 'WitchElaina',
    email: 'mail@mszook.art',
  },
};

export { presets, GitConfigPresets };
