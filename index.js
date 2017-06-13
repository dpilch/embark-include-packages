const path = require('path');

module.exports = function (embark) { // eslint-disable-line
  embark.pluginConfig.include.forEach(function (pkg) { // eslint-disable-line
    embark.addContractFile(path.join('../../', pkg));
  });
  /*
  embark.registerContractConfiguration({
    "default": {
      "contracts": {
        "DGDToken": {
          "args": [
            100
          ]
        }
      }
    }
  });
  */
};
