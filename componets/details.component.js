// myapp.component('detailcomponent', {
//     templateUrl: 'skeleton/detail.html',
//     controller: function ($stateParams) {
//         this.$onInit = ()=>{
//             const params = JSON.parse($stateParams.productId);
//             this.productId = params;
//         }
//     }
// });


myapp.component('detailcomponent', {
    controllerAs: '$ctrl',
    templateUrl: 'skeleton/detail.html',
    controller: function ($stateParams) {
        this.$onInit = () => {
            this.selectedProduct = JSON.parse($stateParams.selectedproduct);
            
            this.remainingProducts = JSON.parse($stateParams.remainingproduct);
        }

        this.select_from_side_bar = (product)=> {
            const temp_product = this.selectedProduct;
            this.selectedProduct = product;
            const { name } = this.selectedProduct;
            this.remainingProducts = this.remainingProducts.filter((obj) => obj["name"] !== name);
            this.remainingProducts = [temp_product, ...this.remainingProducts];
        }
    }
});
