(function(i,m,a,g,e) {
    e = i.getElementsByTagName(m)[0], (g = i.createElement(m)).src = "//pcdn.piiojs.com/"+a+"/image.min.js",
    g.onerror = function() {
        (g = i.createElement(m)).src = "https://fs.piio.co/image-failover.min.js",
        e.parentNode.insertBefore(g, e);
    }, e.parentNode.insertBefore(g, e);
}(document, "script", "nbljy1"));
