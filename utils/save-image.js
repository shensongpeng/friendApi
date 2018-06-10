import crypto from 'crypto';
import fs from 'fs';

export default (fileBuffer)=>{
  return new Promise ((callBack,reject)=>{
    const hash = crypto.createHash('md5');
    const date = new Date();
    const random = Math.random();
    hash.update(date+random);

    const filename = hash.digest('hex');

    const path = './resource/image/'+filename+'.png';
    fs.writeFile(path,fileBuffer,(err)=>{
      if(err){
        console.log(err);
        reject(err);
      }else{
        console.log('文件写入成功');
        callBack('http://localhost:9010'+path);
      }
    })
  });
}
