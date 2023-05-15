export class TareaPendiente {
  public name: string
  public state: boolean
  constructor(name1: string, state1?: boolean){
    this.state = state1 ? state1:false;
    this.name = name1;
  }
}
