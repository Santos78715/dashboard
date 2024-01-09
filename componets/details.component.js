myapp.component('detailcomponent', {
    bindings: {
        productId: '<'
    },
    template: '<h2>This is detail of {{$ctrl.productId.name}}</h2>',
    controller: function () {
     this.productId = {name:'santosh'}
    }
});
