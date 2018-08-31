import { DEP } from './dep.js'
// Observer类主要用于给Vue的数据defineProperty增加getter/setter方法，并且在getter/setter中收集依赖或者通知更新
export const OBSERVER = class Observer {
	constructor(data) {
		if (!data || typeof data !== 'object') {
			return
		}
		this.data = data;
		this.walk();
	}
	// 对传入的数据进行数据劫持
	walk() {
		for (let key in this.data) {
			this.defineReactive(this.data, key, this.data[key])
		}
	}
	// 创建当前属性的一个发布实例，使用Object.defineProperty来对当前属性进行数据劫持
	defineReactive(obj, key, val) {
		const dep = new DEP();
		// 递归对子属性的值进行数据劫持，比如说对以下数据
		new Observer(val)
		Object.defineProperty(obj, key, {
			get() {
				// 若当前有对该属性的依赖项，则将其加入到发布者的订阅者队列里
				if (DEP.target) {
					dep.addSub(DEP.target);
				}
				return val;
			},
			set(newVal) {
				if (val === newVal) return;
				val = newVal;
				new Observer(newVal);
				dep.notify();
			}
		})
	}
}