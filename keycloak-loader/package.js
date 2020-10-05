Package.describe({
    name: 'shayank:keycloak-loader',
    version: '0.0.2',
    // Brief, one-line summary of the package.
    summary: 'Loads the keycloak.js from the Keycloak Server and creates an instance',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/shayank/meteor-keycloak.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.5');
    api.use('ecmascript');
    api.use('service-configuration', ['client']);
    api.use('shayank:keycloak-oauth@0.0.2', ['client'])
    api.use('shayank:accounts-keycloak@0.0.2', ['client'])
    api.imply('shayank:accounts-keycloak@0.0.2', ['client'])
    api.addFiles('keycloak-loader.js', ['client']);
});
