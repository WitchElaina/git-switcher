import { exec } from 'child_process';
import ora from 'ora';

type GitConfigArgs = string[];
type GitConfigPreset = {
  username: string;
  email: string;
};

const gitConfig = (preset: GitConfigPreset, args: GitConfigArgs) => {
  const { username, email } = preset;
  const usernameArgs = ['config', ...args, 'user.name', username];
  const emailArgs = ['config', ...args, 'user.email', email];
  exec(`git ${usernameArgs.join(' ')}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    exec(`git ${emailArgs.join(' ')}`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    });
  });
};

export { gitConfig, GitConfigPreset, GitConfigArgs };
