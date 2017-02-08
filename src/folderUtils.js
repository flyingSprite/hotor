import fs from 'fs';

class FolderUtils {

  constructor(folder) {
    this.folder = folder;
  }

  findFiles() {
    const fd = fs.readdirSync(this.folder);
    console.log(fd);
  }
}

export default FolderUtils;
