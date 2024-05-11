

const spy = chai.spy();

function receivesAFunction(callback){

    callback()

}

function returnsANamedFunction() {
    return function namedFunction() {};
}

function returnsAnAnonymousFunction() {
    return function() {};
}