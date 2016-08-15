let defaultDefinitions = module.exports = Object.create(null);

defaultDefinitions['9'] = /\d/;
defaultDefinitions['z'] = /[a-zA-Z]/; // eslint-disable-line dot-notation
defaultDefinitions['*'] = /[0-9a-zA-Z]/;
