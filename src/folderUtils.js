import fs from 'fs';

/***
 * 1. Get all files or folders from one folder;
 */
class FolderUtils {

  constructor() {
    this.files = [];
  }

  setFolder(folder) {
    this.folder = folder;
  }

  getFiles() {
    return this.files || [];
  }

  findFiles() {
    const fd = fs.readdirSync(this.folder);
    this.files = files;
  }
}

export default FolderUtils;
