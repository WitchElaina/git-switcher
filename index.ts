import { presets } from './presets.js';
import { gitConfig } from './git.js';
import inquirer from 'inquirer';
import ora from 'ora';

// choose args

const getArgs = async () => {
  const args = ['--global', '--replace-all'];
  const res = [];
  const answers = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'args',
      message: 'Choose git config args',
      choices: args,
    },
  ]);
  const { args: selectedArgs } = answers;
  res.push(...selectedArgs);
  return res;
};

const setGitConfig = async () => {
  const presetNames = Object.keys(presets);
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'preset',
      message: 'Choose a preset',
      choices: presetNames,
    },
  ]);
  const { preset } = answers;
  const { username, email } = presets[preset as keyof typeof presets];
  const args = await getArgs();
  gitConfig({ username, email }, args);
};

setGitConfig();
