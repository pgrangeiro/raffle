var Controller = function(data) {
    var data = data;
    var sorted_items = [];

    shuffle = function() {
        for (var i = data.length-1; i >=0; i--) {
            var randomIndex = Math.floor(Math.random() * (i+1));
            var itemAtIndex = data[randomIndex];

            data[randomIndex] = data[i];
            data[i] = itemAtIndex;
        }
    };

    this.getSortedItems = function() {
        return sorted_items;
    };

    this.sort = function() {
        var random = Math.floor(Math.random() * data.length);
        sorted_items.push(data[random]);
        return data[random];
    };
};
