myapp.component('cardview1', {
    controllerAs: '$ctrl',
    templateUrl: '/skeleton/home.html',
    controller: function ($timeout, $state, $http) {
        this.showdetails = function (productId) {
            console.log(productId);
            $state.go('home.detail', {productId: productId})
        }


        this.products = [];
        $http.get('product.json').then((response) => {
            console.log(response.data);
            this.products = response.data;
        });


        $timeout(function () {
            const ctx = document.getElementById('mainchart');

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });

        $timeout(function () {
            const ctx = document.getElementById('yearlybreakup');

            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });


    }
});



