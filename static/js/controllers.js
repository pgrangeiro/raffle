$(document).ready(function() {

    var service = new Service();

    service.getData().then(function(data) {
        console.log(data);
    });
});
