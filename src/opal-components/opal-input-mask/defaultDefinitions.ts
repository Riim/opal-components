let defaultDefinitions = Object.create(null);

defaultDefinitions['9'] = /\d/;
defaultDefinitions['z'] = /[a-zA-Z]/;
defaultDefinitions['*'] = /[0-9a-zA-Z]/;

export default defaultDefinitions;
