export class NameService {
  name: string;
  constructor(){
    var str = sessionStorage.getItem('name');
    if(str){
      this.name = str;
    } else {
      this.name = null;
    }
  }
}