// var argv;
//
// try {
//   argv = JSON.parse(process.env.npm_config_argv).original;
// }	catch(ex) {
//   argv = process.argv;
// }
// console.log(argv);

import FolderUtils from './folderUtils';

const folder = new FolderUtils('/Users/Fernando/Pictures/fantuanpu/xuedao');

folder.findFiles();
