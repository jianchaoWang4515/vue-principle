import { OBSERVER } from './lib/Observer.js'
import { WATCHER } from './lib/watcher.js'

let data = {
	name: 'cjg',
	obj: {
		name: 'zht'
	}
}
new OBSERVER(data)
// 监听data对象的name属性，当data.name发现变化的时候，触发cb函数
new WATCHER(data, 'name', (oldValue, newValue) => {
	console.log(oldValue + '---' + newValue);
});
data.name = 'zht';
