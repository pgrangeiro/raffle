var Service = function() {
    url = 'data/data.csv';

    this.getData = function() {
        return $.get(url).then(function(response) {
            return $.parseJSON(csvToJSON(response));
        });
    };
}
