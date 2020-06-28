var data = YAML.load('./data.yaml');
var divtag = document.getElementById("team"); //Main div tag inside the html

for (year in data) {
    var id = year.split(" ")[3]
    if (!id) {
        id = "Others"
    }

    var container = document.createElement("div"); //Create div tag for each year
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
    var count = 0;  // To iterate through the "names" list

    var length = names.length;
    var q = Math.floor(length / 4);
    var r = length % 4; //Calculating quotient and remainder to determine the number of rows and number of elements in each row

    var one_element_rows = 0,  //Number of rows with 1 element
        two_elements_rows = 0,  //Number of rows with 2 elements
        three_elements_rows = 0,  //Number of rows with 3 elements
        four_elements_rows = 0;  //Number of rows with 4 elements

    if (q == 0) {
        if (r == 1) {
            one_element_rows = 1;
        }
        if (r == 2) {
            two_elements_rows = 1;
        }
        if (r == 3) {
            three_elements_rows = 1;
        }
    } else if (r == 0) {
        four_elements_rows = q;
    } else if (r == 1) {
        four_elements_rows = q - 1;
        three_elements_rows = 1;
        two_elements_rows = 1;
    } else if (r == 2) {
        four_elements_rows = q - 1;
        three_elements_rows = 2;
    } else if (r == 3) {
        four_elements_rows = q;
        three_elements_rows = 1;
    }

    for (var i = 0; i < four_elements_rows; i++) {  // Creating rows which would contain four elements
        var row = document.createElement("div"); //Creating div tag for each row
        row.className = "white centered row";

        for (var j = 0; j < 4; j++) {
            var person = document.createElement("div"); //Creating div tag for each person
            person.className = "col-lg-3 centered";

            var img = document.createElement("img");
            img.className = "img img-circle";
            img.src = data[year][names[c]]['src'];
            img.height = 120;
            img.width = 120;
            img.alt = data[year][names[c]]['alt'];

            var h4 = document.createElement("h4"); //H4 tag
            var b = document.createElement("b"); //Bold tag
            var pname = document.createTextNode(names[c]) //Name of the person
            h4.appendChild(b);
            h4.appendChild(pname);

            var facebook-link = document.createElement("a");
            facebook-link.href = data[year][names[c]]['fb'];
            facebook-link.className = "fab fa-facebook-f social-button";

            var github-link = document.createElement("a");
            github-link.href = data[year][names[c]]['gh'];
            github-link.className = "social-button fab fa-github";

            var p = document.createElement("p");
            var ptext = document.createTextNode(data[year][names[c]]['org']);
            p.appendChild(ptext);

            person.appendChild(img);
            person.appendChild(br);
            person.appendChild(h4);
            person.appendChild(facebook-link);
            person.appendChild(github-link);
            person.appendChild(p);

            c += 1;
            row.appendChild(person);
        }
        container.appendChild(row);
    }


    for (var i = 0; i < three_elements_rows; i++) { // Creating rows which would contain three elements
        var row = document.createElement("div");
        row.className = "white centered row";

        for (var j = 0; j < 3; j++) {
            var person = document.createElement("div"); //Creating div tag for each person
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

            var facebook-link = document.createElement("a");
            facebook-link.href = data[year][names[c]]['fb'];
            facebook-link.className = "fab fa-facebook-f social-button";

            var github-link = document.createElement("a");
            github-link.href = data[year][names[c]]['gh'];
            github-link.className = "social-button fab fa-github";

            var p = document.createElement("p");
            var ptext = document.createTextNode(data[year][names[c]]['org']);
            p.appendChild(ptext);

            person.appendChild(img);
            person.appendChild(br);
            person.appendChild(h4);
            person.appendChild(facebook-link);
            person.appendChild(github-link);
            person.appendChild(p);

            count += 1;
            row.appendChild(person);
        }
        container.appendChild(row);
    }

    for (var i = 0; i < two_elements_rows; i++) { // Creating rows which would contain two elements
      // For adding two elements, using class "col-lg-3" which would contain 4 elements, out of which first and fourth are empty, and second and third contains the details
        var row = document.createElement("div");
        row.className = "white centered row";

        var person = document.createElement("div");
        person.className = "col-lg-3 centered";
        row.appendChild(person);

        for (var j = 0; j < 2; j++) {
            var person = document.createElement("div"); //Creating div tag for each person
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

            var facebook-link = document.createElement("a");
            facebook-link.href = data[year][names[c]]['fb'];
            facebook-link.className = "fab fa-facebook-f social-button";

            var github-link = document.createElement("a");
            github-link.href = data[year][names[c]]['gh'];
            github-link.className = "social-button fab fa-github";

            var p = document.createElement("p");
            var ptext = document.createTextNode(data[year][names[c]]['org']);
            p.appendChild(ptext);

            person.appendChild(img);
            person.appendChild(br);
            person.appendChild(h4);
            person.appendChild(facebook-link);
            person.appendChild(github-link);
            person.appendChild(p);

            c += 1;
            row.appendChild(person);
        }

        var person = document.createElement("div");
        person.className = "col-lg-3 centered";
        row.appendChild(person);

        container.appendChild(row);
    }


    for (var i = 0; i < one_element_rows; i++) { // Creating rows which would contain one element

      // For adding one element, using class "col-lg-4" which would contain 3 elements, out of which first and third are empty, and second contains the details
        var row = document.createElement("div");
        row.className = "white centered row";

        var person = document.createElement("div"); //Creating div tag for each person
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

            var facebook-link = document.createElement("a");
            facebook-link.href = data[year][names[c]]['fb'];
            facebook-link.className = "fab fa-facebook-f social-button";

            var github-link = document.createElement("a");
            github-link.href = data[year][names[c]]['gh'];
            github-link.className = "social-button fab fa-github";

            var p = document.createElement("p");
            var ptext = document.createTextNode(data[year][names[c]]['org']);
            p.appendChild(ptext);

            person.appendChild(img);
            person.appendChild(br);
            person.appendChild(h4);
            person.appendChild(facebook-link);
            person.appendChild(github-link);
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
