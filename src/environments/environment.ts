// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDQW4FT_CNxWk9syQegZgLAZxQpK16QDgk',
    authDomain: 'mwa-quaro-project.firebaseapp.com',
    databaseURL: 'https://mwa-quaro-project.firebaseio.com',
    projectId: 'mwa-quaro-project',
    storageBucket: 'mwa-quaro-project.appspot.com',
    messagingSenderId: '440830124743'
  }
};
