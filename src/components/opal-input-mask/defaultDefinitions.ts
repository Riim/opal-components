let defaultDefinitions = Object.create(null) as { [chr: string]: RegExp };

defaultDefinitions['9'] = /\d/;
defaultDefinitions['z'] = /[a-zA-Z]/;
defaultDefinitions['*'] = /[0-9a-zA-Z]/;

export default defaultDefinitions;
