/**
 * Inspired by https://github.com/hitchcott/meteor-method-hooks (MIT License)
 * Forked from https://github.com/Meteor-Community-Packages/meteor-method-hooks (MIT License)
 */

Package.describe({
  name: 'eoleteam:method-hooks',
  summary: 'Provides before/after hooks for Meteor methods',
  version: '3.0.5',
  git: 'https://github.com/eole/meteor-method-hooks',
});

Package.onUse(function definePackage(api) {
  api.versionsFrom('1.12.1');
  api.use('meteor');
  api.use('ecmascript');
  api.mainModule('server.js', 'server');
  api.mainModule('client.js', 'client');
});
