import { DEP } from './dep.js'
// Watcher类来用于观察数据（或者表达式）变化然后执行回调函数（其中也有收集依赖的过程），主要用于$watch API和指令上
export const WATCHER = class Watcher {
    constructor(vm, keys, updateCb) {
        this.vm = vm;
        this.keys = keys;
        this.updateCb = updateCb;
        this.value = null;
        this.get();
    }
    get() {
        DEP.target = this;
        const keys = this.keys.split('.');
        let value = this.vm;
        keys.forEach(_key => {
            value = value[_key];
        });
        this.value = value;
        DEP.target = null;
        return this.value;
    }

    update() {
        const oldValue = this.value;
        const newValue = this.get();
        if (oldValue !== newValue) {
            this.updateCb(oldValue, newValue);
        }
    }
}