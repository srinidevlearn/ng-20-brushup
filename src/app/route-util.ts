export const RouteNames = {
  signalsBasic: 'signals-basic',
  login: 'login',
}


export interface ILearnTopic {
  name: string;
  description: string;
  route: string;
  isActive:boolean;
}
export const learnTopics = [
  {
    name: 'Signals and Reactivity',
    description: 'Learn about Angular signals and reactivity patterns.',
    route: `/${RouteNames.signalsBasic}`,
    isActive:false
  },
  {
    name: 'Authentication',
    description: 'Implement authentication and authorization in Angular.',
    route: `/${RouteNames.login}`,
    isActive:false
  }
];




