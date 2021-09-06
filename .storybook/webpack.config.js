module.exports = ({ config }) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("babel-preset-react-app")]
          }
        }, 
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            shouldExtractLiteralValuesFromEnum: true,//storybook爬取组件属性的时候会自动把type类型的属性自动展开
            propFilter: (prop) => {//过滤掉不需要爬取的属性的来源。
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')
              }
              return true            
            }
          }
        }
      ]
    });
  
    config.resolve.extensions.push(".ts", ".tsx");
  
    return config;
  };
  