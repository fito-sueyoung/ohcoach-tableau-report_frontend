function getSibling(el, className) {
    let element = el.parentNode.firstChild;
    while (element.nextElementSibling){
        element = element.nextElementSibling;
        if (element && element.classList.contains(className))
            return element;
    };
    return null;
}

function getChild(el, className) {
    let element = el.firstChild;
    while (element.nextElementSibling){
        element = element.nextElementSibling;
        if (element && element.classList.contains(className))
            return element;
    };
    return null;
}

function hasClass(element, className){
    return element.classList.contains(className);
}

function recursivelyWalk(nodes, cb) {
    for (let node of nodes) {
        let ret = cb(node);
        if (ret) {
            return ret;
        }
        if (node.childNodes && node.childNodes.length) {
            let ret = recursivelyWalk(node.childNodes, cb);
            if (ret) {
                return ret;
            }
        }
    }
}

function hasChildWithClass(element, className){
    console.log(element.childNodes);
    let hasClass = recursivelyWalk(element.childNodes, function hasClass(node) {
        if (node.classList == undefined)
            return false;
        return node.classList.contains(className);
    });
    if( hasClass == undefined )
        hasClass = false;
    return hasClass;
}
