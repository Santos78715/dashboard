myapp.component('detailcomponent', {
    templateUrl: 'skeleton/detail.html',
    controller: function ($stateParams) {
        this.$onInit = ()=>{
            const params = JSON.parse($stateParams.productId);
            this.productId = params;
        }
    }
});
