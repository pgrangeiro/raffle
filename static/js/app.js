$(document).ready(function() {

    var service = new Service();
    var controller;

    service.getData().then(function(data) {
        controller = new Controller(data);
    });

    $('#sort').click(function() {
        console.log(controller.sort().Name);
    });
});
