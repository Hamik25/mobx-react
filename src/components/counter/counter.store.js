import { observable } from 'mobx';

class CounterStore {
  @observable count = 0;

  handleDec = () => {
    this.count--;
  }

  handleInc = () => {
    this.count++;
  }
}

export default new CounterStore();
