module.exports = (phase, { defaultConfig }) => {
    return {
        exportPathMap: function () {
            return {
              "/": { page: "/" },
            }
          },
        
    }
  }