const handler = {
    get(target, prop) {
        console.log(`Accessing property ${prop}`);
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`Modifying property ${prop} with value ${value}`);
        target[prop] = value;
        return true; // Indicates that the operation was successful
    },
    deleteProperty(target, prop) {
        console.log(`Deleting property ${prop}`);
        delete target[prop];
        return true;
    },
    apply(target, thisArg, args) {
        console.log(`Calling the function with arguments: ${args}`);
        return target(...args);
    }
};

function sum(a, b) {
    return a + b;
}

const obj = { name: 'Juan', age: 30, active: true };
const proxy = new Proxy(obj, handler);

console.log(proxy.name);
console.log(proxy.age = 31);
console.log(delete proxy.active);

const proxyApply = new Proxy(sum, handler);
console.log(proxyApply(2, 3));
