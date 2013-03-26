var gene = Object.create(null);

gene.evolve = function(){
    return Object.create(this);
}

gene.isEvolution = function(X){
    return Object.isPrototypeOf.call(X, this)
}
