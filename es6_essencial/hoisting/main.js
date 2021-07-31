function fn() {
    console.log(text)

    var text = 'Exemplo'

    console.log(text)
}

fn()


function hoisting() {
    log('Hoisting de função')

    function log(value) {
        console.log(value)
    }
}

fn()