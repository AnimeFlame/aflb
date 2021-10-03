  const action = require("./assets.json");
  const endpoints = require('./endpoints.json');

  function getImage (obj) {
    return action[obj][Math.floor(Math.random() * action[obj].length)]
  }

  class AFLB {
    constructor() {
      let self = this;
      self.sfw = {};
      self.nsfw = {};
      Object.keys(endpoints.sfw).forEach(async (endpoint) => {
        self.sfw[endpoint] = function () {
          return getImage(endpoint);
          };
      });
      Object.keys(endpoints.nsfw).forEach(async (endpoint) => {
        self.nsfw[endpoint] = function () {
          return getImage(endpoint);
          };
      });
    }
  }

  module.exports = AFLB;