switch (condition) {
    case "first":
        // code
        break;

    case "third":
        // code
        break;

    default:
    // code
}


switch (condition) {

    // obvious fall through    // 这里为啥JSHint默认就会放过，因为 case "first" 内无内容
    case "first":
    case "second":
        // code
        break;

    case "third":
    // code

    /* falls through */ // 这里为啥要加这样的注释， 明确告知JSHint放过此处告警
    default:
    // code
}

switch(condition) {
    case "first":
        // code
        break;

    case "second":
        // code
        break;

    // no default
}
