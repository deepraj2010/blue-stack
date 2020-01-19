import GoogleCommand from './google-command';
import RecentCommand from './recent-command';

const GOOGLE = 'google';
const RECENT = 'recent';

const Commands = new Map();
Commands.set(GOOGLE, GoogleCommand);
Commands.set(RECENT, RecentCommand);

export default Commands;