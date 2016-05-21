export default function () {
  return {
    manipulateOptions(opts) {
      opts.resolveModuleSource = function (source) {
        return source.replace('.jsx', '.js');
      }
    }
  };
}
