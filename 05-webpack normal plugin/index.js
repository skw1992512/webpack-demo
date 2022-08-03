const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  context: path.join(__dirname, "app"),
  devServer: {
    // This is required for older versions of webpack-dev-server
    // if you use absolute 'to' paths. The path should be an
    // absolute path to your build destination.
    outputPath: path.join(__dirname, "build"),
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        // {output}/file.txt
        { from: "from/file.txt" },

        // equivalent
        "from/file.txt",

        // {output}/to/file.txt
        { from: "from/file.txt", to: "to/file.txt" },

        // {output}/to/directory/file.txt
        { from: "from/file.txt", to: "to/directory" },

        // Copy directory contents to {output}/
        { from: "from/directory" },

        // Copy directory contents to {output}/to/directory/
        { from: "from/directory", to: "to/directory" },

        // Copy glob results to /absolute/path/
        { from: "from/directory/**/*", to: "/absolute/path" },

        // Copy glob results (with dot files) to /absolute/path/
        {
          from: {
            glob: "from/directory/**/*",
            dot: true,
          },
          to: "/absolute/path",
        },

        // Copy glob results, relative to context
        {
          context: "from/directory",
          from: "**/*",
          to: "/absolute/path",
        },

        // {output}/file/without/extension
        {
          from: "path/to/file.txt",
          to: "file/without/extension",
          toType: "file",
        },

        // {output}/directory/with/extension.ext/file.txt
        {
          from: "path/to/file.txt",
          to: "directory/with/extension.ext",
          toType: "dir",
        },
      ],
      {
        ignore: [
          // Doesn't copy any files with a txt extension
          "*.txt",

          // Doesn't copy any file, even if they start with a dot
          "**/*",

          // Doesn't copy any file, except if they start with a dot
          { glob: "**/*", dot: false },
        ],

        // By default, we only copy modified files during
        // a watch or webpack-dev-server build. Setting this
        // to `true` copies all files.
        copyUnmodified: true,
      }
    ),
  ],
};
