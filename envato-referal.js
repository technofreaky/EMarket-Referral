function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(item) {
    var envatousername = "varunsridharan";
    if (item.envatousername) {
        envatousername = item.envatousername;
    }

    var elems = document.getElementsByTagName("a");
    console.log(elems);
    for (var i = 0; i < elems.length; i++) {
        var href = elems[i].getAttribute('href');
        href = setGetParameter(href,'ref',envatousername);
        elems[i].setAttribute('href', href);
    }
}

function setGetParameter(url, paramName, paramValue) {
    var url = url;
    var hash = location.hash;
    url = url.replace(hash, '');
    if (url.indexOf(paramName + "=") >= 0) {
        var prefix = url.substring(0, url.indexOf(paramName));
        var suffix = url.substring(url.indexOf(paramName));
        suffix = suffix.substring(suffix.indexOf("=") + 1);
        suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
        url = prefix + paramName + "=" + paramValue + suffix;
    } else {
        if (url.indexOf("?") < 0)
            url += "?" + paramName + "=" + paramValue;
        else
            url += "&" + paramName + "=" + paramValue;
    }
    return url;
}

var getting = browser.storage.local.get("envatousername");
getting.then(onGot, onError);

