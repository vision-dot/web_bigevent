function template(id, data) {
    var str = document.getElementById(id).innerHTML
    var pattern = /{{\s*([a-zA-Z]+)\s*}}/
    var pattResult = null
    while (pattResult = pattern.exec()) {
        str = str.replace(pattResult[0], pattResult[1])
    }
    return str
}