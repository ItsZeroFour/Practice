const person = Object.create({}, {
    name: {
        value: 'Alex',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 2001,
        enumerable: false
    },
    age: {
        get() {
            return 'Hello'
        },
        set(value) {
            document.body.style.background = 'red'
            console.log('Set age', value);
        }
    }
})

// person.name = 'Jacob'

for (let key in person) {
    console.log('Key', key, person[key]);
}