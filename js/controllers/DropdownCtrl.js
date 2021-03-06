
app.controller('DropdownCtrl', function ($scope) {
    $scope.payment = [
        {id: '1', name: 'Наличные', url: '../css/images/pay/cash.png'},
        {id: '2', name: 'Кредитная карта', url: '../css/images/pay/visa.png'},
        {id: '3', name: 'QIWI', url: '../css/images/pay/qiwi.png'},
        {id: '4', name: 'Яндекс деньги', url: '../css/images/pay/yandex.png'},
        {id: '5', name: 'Web-money', url: '../css/images/pay/webmoney.png'},
        {id: '6', name: 'Прочие электронные деньги', url: []},
    ];
    $scope.countries = [
        {id: '1', name: 'Калужская'},
        {id: '2', name: 'Калужская2'},
        {id: '3', name: 'Калужская1'},
        {id: '4', name: 'Калужская3'},
        {id: '5', name: 'Калужская4'},
    ]

    $scope.selectedPayment = $scope.payment[0];
    $scope.selectedCountry = $scope.countries[0];

    $scope.set = function(action) {
        $scope.selectedPayment = action;
        $scope.selectedCountry = action;
    };
});