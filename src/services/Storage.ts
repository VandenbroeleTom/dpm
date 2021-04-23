import { createStore, get, set } from 'idb-keyval'

const store = createStore('localforage', 'keyvaluepairs');

(window as any).set = set;
(window as any).get = get;
(window as any).store = store;

export default class Storage {

  static async setItem(key: string, value: {}|string|number) {
    await set(key, value, store)
  }

  static async getItem(key: string) {
    return await get(key, store)
  }

}
