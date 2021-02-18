// const withImages = require('next-images')

module.exports = {
// withImages({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    // config.module.rules.push({
    //   test: /\.css$/,
    //   loader: "style-loader!css-loader",
    // });

    // config.module.rules.push({
    //   test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    //   loader: 'url-loader?limit=100000' 
    // });

    return config;
  }
}
// });
