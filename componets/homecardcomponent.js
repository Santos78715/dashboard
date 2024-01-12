myapp.component('cardview1', {
    controllerAs: '$ctrl',
    templateUrl: '/skeleton/home.html',
    controller: function ($timeout, $state, $http) {
      
        this.$onInit = function () {
            // Call updatechart when the component is initialized
            this.updatechart();
        };
        //getting data and starting a transition state
        this.showdetails = function (selectedProduct) {
            var remainingProducts = this.products.filter(p => p !== selectedProduct);
            $state.go('detail', {
                selectedproduct: JSON.stringify(selectedProduct),
                remainingproduct: JSON.stringify(remainingProducts)
            });
        }

        //getting data from product.js
        this.products = [];
        $http.get('product.json').then((response) => {
            this.products = response.data;
        });


        //UserData
        var xValues = ['Nepal', 'India', 'china']
        var yValues = [20, 24, 28]
        var barcolors = ["red", "green", "blue", "orange", "brown"];

        this.newdata = function(){
            var xInput = document.getElementById('xValue');
            var yInput = document.getElementById('yValue');

            var xvalue = xInput.value;
            var yValue = parseInt(yInput.value);

            if (xvalue === "" || yValue=="") {
                alert("Please enter a non-empty value")
                return;
            }

            xValues.push(xvalue);
            yValues.push(yValue);

            console.log(xValues)
            this.updatechart();
            

            xInput.value = "";
            yInput.value = "";
        }

        this.updatechart = function(){

            this.checkChartStatus = function(chartIns){
                if(chartIns){
                    chartIns.destroy();
                }
            }


            this.checkChartStatus(this.chartInstance);
           this.chartInstance =  new Chart("mainchart", {
                type: "bar",
                data: {
                  labels: xValues,
                  datasets: [{
                    backgroundColor: barcolors,
                    data: yValues
                  }]
                },
                options: {
                  legend: { display: false },
                  title: {
                    display: true,
                    text: "Customized Wine Production Chart"
                  }
                }
              });

              this.checkChartStatus(this.chartInstances);
              this.chartInstances =  new Chart("sidechart", {
                type: "pie",
                data: {
                  labels: xValues,
                  datasets: [{
                    backgroundColor: barcolors,
                    data: yValues
                  }]
                },
                options: {
                  legend: { display: false },
                  title: {
                    display: true,
                    text: "Customized Wine Production Chart"
                  }
                }
              });
        }


    }
});



