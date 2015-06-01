function doSomethingWithItems(items) {
    // use one var
    var value = 10,
        result = value + 10;

    for (var i = 0, len = items.length; i < len; i++) {
        result += 10;
    }
}
