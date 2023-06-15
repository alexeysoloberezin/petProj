module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.tsx?$': 'ts-jest'
  }
};
