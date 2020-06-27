var data = YAML.load('./data.yaml');
var divtag = document.getElementById("team");
for (year in data) {
    var id = year.split(" ")[3]
    if (!id) {
        id = "Others"
    }

    var container = document.createElement("div");
    container.className = "container-fluid yearly";
    container.id = id
    container.name = id

    var br = document.createElement("br");
    var hr = document.createElement("hr");
    container.appendChild(br.cloneNode())

    var h1 = document.createElement("h1");
    h1.className = "centered";
    var text = document.createTextNode(year);
    h1.appendChild(text);
    container.appendChild(h1);

    container.appendChild(hr);
    container.appendChild(br.cloneNode());
    container.appendChild(br.cloneNode());

    var names = Object.keys(data[year]);
    var c = 0;

    var length = names.length;
    var q = Math.floor(length / 4);
    var r = length % 4;
    var c1 = 0,
        c2 = 0,
        c3 = 0,
        c4 = 0;
    if (q == 0) {
        if (r == 1) {
            c1 = 1;
        }
        if (r == 2) {
            c2 = 1;
        }
        if (r == 3) {
            c3 = 1;
        }
    } else if (r == 0) {
        c4 = q;
    } else if (r == 1) {
        c4 = q - 1;
        c3 = 1;
        c2 = 1;
    } else if (r == 2) {
        c4 = q - 1;
        c3 = 2;
    } else if (r == 3) {
        c4 = q;
        c3 = 1;
    }

    for (var i = 0; i < c4; i++) {
        var row = document.createElement("div");
        row.className = "white centered row";

        for (var j = 0; j < 4; j++) {
            var person = document.createElement("div");
            person.className = "col-lg-3 centered";

            var img = document.createElement("img");
            img.className = "img img-circle";
            img.src = data[year][names[c]]['src'];
            img.height = 120;
            img.width = 120;
            img.alt = data[year][names[c]]['alt'];

            var h4 = document.createElement("h4");
            var b = document.createElement("b");
            var pname = document.createTextNode(names[c])
            h4.appendChild(b);
            h4.appendChild(pname);

            var afb = document.createElement("a");
            afb.href = data[year][names[c]]['fb'];
            afb.className = "fab fa-facebook-f social-button";

            var agh = document.createElement("a");
            agh.href = data[year][names[c]]['gh'];
            agh.className = "social-button fab fa-github";

            var p = document.createElement("p");
            var ptext = document.createTextNode(data[year][names[c]]['org']);
            p.appendChild(ptext);

            person.appendChild(img);
            person.appendChild(br);
            person.appendChild(h4);
            person.appendChild(afb);
            person.appendChild(agh);
            person.appendChild(p);

            c += 1;
            row.appendChild(person);
        }
        container.appendChild(row);
    }


    for (var i = 0; i < c3; i++) {
        var row = document.createElement("div");
        row.className = "white centered row";

        for (var j = 0; j < 3; j++) {
            var person = document.createElement("div");
            person.className = "col-lg-4 centered";

            var img = document.createElement("img");
            img.className = "img img-circle";
            img.src = data[year][names[c]]['src'];
            img.height = 120;
            img.width = 120;
            img.alt = data[year][names[c]]['alt'];

            var h4 = document.createElement("h4");
            var b = document.createElement("b");
            var pname = document.createTextNode(names[c])
            h4.appendChild(b);
            h4.appendChild(pname);

            var afb = document.createElement("a");
            afb.href = data[year][names[c]]['fb'];
            afb.className = "fab fa-facebook-f social-button";

            var agh = document.createElement("a");
            agh.href = data[year][names[c]]['gh'];
            agh.className = "social-button fab fa-github";

            var p = document.createElement("p");
            var ptext = document.createTextNode(data[year][names[c]]['org']);
            p.appendChild(ptext);

            person.appendChild(img);
            person.appendChild(br);
            person.appendChild(h4);
            person.appendChild(afb);
            person.appendChild(agh);
            person.appendChild(p);

            c += 1;
            row.appendChild(person);
        }
        container.appendChild(row);
    }

    for (var i = 0; i < c2; i++) {
        var row = document.createElement("div");
        row.className = "white centered row";

        var person = document.createElement("div");
        person.className = "col-lg-3 centered";
        row.appendChild(person);

        for (var j = 0; j < 2; j++) {
            var person = document.createElement("div");
            person.className = "col-lg-3 centered";

            var img = document.createElement("img");
            img.className = "img img-circle";
            img.src = data[year][names[c]]['src'];
            img.height = 120;
            img.width = 120;
            img.alt = data[year][names[c]]['alt'];

            var h4 = document.createElement("h4");
            var b = document.createElement("b");
            var pname = document.createTextNode(names[c])
            h4.appendChild(b);
            h4.appendChild(pname);

            var afb = document.createElement("a");
            afb.href = data[year][names[c]]['fb'];
            afb.className = "fab fa-facebook-f social-button";

            var agh = document.createElement("a");
            agh.href = data[year][names[c]]['gh'];
            agh.className = "social-button fab fa-github";

            var p = document.createElement("p");
            var ptext = document.createTextNode(data[year][names[c]]['org']);
            p.appendChild(ptext);

            person.appendChild(img);
            person.appendChild(br);
            person.appendChild(h4);
            person.appendChild(afb);
            person.appendChild(agh);
            person.appendChild(p);

            c += 1;
            row.appendChild(person);
        }

        var person = document.createElement("div");
        person.className = "col-lg-3 centered";
        row.appendChild(person);

        container.appendChild(row);
    }


    for (var i = 0; i < c1; i++) {
        var row = document.createElement("div");
        row.className = "white centered row";

        var person = document.createElement("div");
        person.className = "col-lg-4 centered";
        row.appendChild(person);

        for (var j = 0; j < 1; j++) {
            var person = document.createElement("div");
            person.className = "col-lg-4 centered";

            var img = document.createElement("img");
            img.className = "img img-circle";
            img.src = data[year][names[c]]['src'];
            img.height = 120;
            img.width = 120;
            img.alt = data[year][names[c]]['alt'];

            var h4 = document.createElement("h4");
            var b = document.createElement("b");
            var pname = document.createTextNode(names[c])
            h4.appendChild(b);
            h4.appendChild(pname);

            var afb = document.createElement("a");
            afb.href = data[year][names[c]]['fb'];
            afb.className = "fab fa-facebook-f social-button";

            var agh = document.createElement("a");
            agh.href = data[year][names[c]]['gh'];
            agh.className = "social-button fab fa-github";

            var p = document.createElement("p");
            var ptext = document.createTextNode(data[year][names[c]]['org']);
            p.appendChild(ptext);

            person.appendChild(img);
            person.appendChild(br);
            person.appendChild(h4);
            person.appendChild(afb);
            person.appendChild(agh);
            person.appendChild(p);

            c += 1;
            row.appendChild(person);
        }
        var person = document.createElement("div");
        person.className = "col-lg-4 centered";
        row.appendChild(person);

        container.appendChild(row);
    }

    divtag.appendChild(container)
}
