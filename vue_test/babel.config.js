/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-18 23:26:40
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
