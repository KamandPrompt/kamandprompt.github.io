// JavaScript

var contributorsDiv = document.getElementById("contributors");
var k = 0;

function sleep (ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function () {
	$("#loader").show();
	projectContributors();
});

function projectContributors () {
	// A 500ms delay so that the loader is shown before the request is made. Otherwise loader is not shown and page keeps on loading.
	sleep(500).then(() => {
		res = ["baat-cheet", "blog", "CodeManiacs", "contacts-directory", "kamandprompt.github.io", "StockMarketAnalysis", "time-table-generator"]; //repos list to  be displayed on the site.

		$.ajaxSetup({
			async: false
		});
		for (i = 0; i < res.length; ++i) {

			$.getJSON('https://api.github.com/repos/KamandPrompt/' + res[i] + '/contributors',
				function (data) {
					data.sort((a, b) => b.contributions - a.contributions);
					var max_count = 0, iter = 0;

					if (data.length > 4)
						max_count = 4;
					else
						max_count = data.length;

					if (res[i] === "kamandprompt.github.io")
						projectTitle = "KamandPrompt Website";
					else
						if (res[i] === "CodeManiacs" || res[i] === "StockMarketAnalysis")
							projectTitle = res[k];
						else
							projectTitle = res[k].toUpperCase();
					k++;

					child = "<a href='https://github.com/KamandPrompt/" + res[i] + "'><h3>" + projectTitle + "</h3></a>";

					contributorsDiv.innerHTML += "<div class=\"row team-box\">";
					contributorsDiv.innerHTML += child;

					for (j = 0; j < max_count; ++j, ++iter) {

						var login = data[iter].login, contributions = data[iter].contributions;
						var avatar = data[iter].avatar_url;

						var newChild = "\<div class=\"col-lg-2 col-sm3 text-center member contributor-div\">\
              				<img class=\"img-circle img-responsive img-center team-img\" src=\" " + avatar + "\" height=\"200px\" width=\"200px\" alt=\"\">\
              				<h4><a class=\"github-profile\" target=\"_blank\" href=\"https://github.com/" + login + " \">@" + login + "</a></h3>\
							  <h5>Contributions: " + contributions + "</h5></div>";
						contributorsDiv.innerHTML += newChild;


					}
					contributorsDiv.innerHTML += "</div>\ <hr>";
				});
		}
		$("#loader").hide();
	});
};
