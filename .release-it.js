module.exports = {
  plugins: {
    'release-it-lerna-changelog': {
      infile: 'CHANGELOG.md',
    },
  },
  git: {
    commitMessage: 'v${version}',
    tagName: 'v${version}',
  },
  github: {
    release: true,
    releaseName: 'Release ${version}',
    tokenRef: 'GITHUB_AUTH',
  },
  npm: {
    publish: false,
  },
};
