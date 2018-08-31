// Dep类就是一个可观察对象，可以有不同指令订阅它（它是多播的）
export const DEP = class Dep {
    constructor() {
        this.subs = [];
    }
    // 增加订阅者
    addSub(sub) {
        if (this.subs.indexOf(sub) < 0) {
            this.subs.push(sub);
        }
    }
    // 通知订阅者
    notify() {
    	this.subs.forEach((sub) => {
    		sub.update();
    	})
    }
}
DEP.target = null;