module.exports = {
  name: 'liba',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/liba',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
