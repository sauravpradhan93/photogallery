export class UploadModel{
$key:string;
filename:File;
url:string;
date:Date=new Date();
constructor(filename:File){
  this.filename=filename;
}
}
