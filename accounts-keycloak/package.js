Package.describe({
    name: 'shayank:accounts-keycloak',
    version: '0.0.2',
    // Brief, one-line summary of the package.
    summary: 'Provides the Meteor.loginWithMeteorKeycloak call',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/shayank/meteor-keycloak.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.5');
    api.use('ecmascript');
    api.use('accounts-base', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);
    api.use('shayank:keycloak-oauth@0.0.2');
    api.imply('shayank:keycloak-oauth@0.0.2');

    api.addFiles('accounts-keycloak.js');
});
