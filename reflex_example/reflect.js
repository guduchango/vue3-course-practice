const obj = { name: 'Ana', active: true }; // 'Ana'
console.log(Reflect.get(obj, 'name'));
Reflect.set(obj, 'age', 31); // 31
console.log(obj.age);
Reflect.deleteProperty(obj, 'active'); // undefined
console.log(obj.active);
console.log(Reflect.has(obj, 'name')); // true

function sum(a, b) {
    return a + b;
}

console.log(Reflect.apply(sum, null, [2, 3])); // 5

class Person {
    constructor(name) {
        this.name = name;
    }
}

const person = Reflect.construct(Person, ['Maria']);
console.log(person.name); // 'Maria'

const proxiedObj = { name: 'Carlos' };

const proxy = new Proxy(proxiedObj, {
    get(target, prop) {
        console.log(`Intercepted: ${prop}`);
        return Reflect.get(target, prop);
    }
});

console.log(proxy.name); // Logs: Intercepted: name
                         // Result: 'Carlos'
