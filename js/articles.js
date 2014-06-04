/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Parse.initialize("V10TgoAKTJ7B8H8YjJhgucaXdGiDeROgxACn6aA2", "1gGbFOhUUrgeVp7JkqLP4XkOc8mBWkrQCU1uKAi8");

var Articles = Parse.Object.extend("Articles");
var articleField = document.getElementById("main");;

var name, description, link, creationDate;
var nameParagraph, descriptionParagraph, linkParagraph, creationParagraph;

var query = new Parse.Query(Articles);

query.find({
    success: function(results) {
        results.forEach(function(entry) {
            articleDiv = document.createElement("div");
            articleDiv.className = "vacancy";
            articleDiv.onclick = function() {
                articleClicked(entry.id);
            };

            name = document.createTextNode(entry.get("name"));
            console.log(entry.get("name"));
            nameParagraph = document.createElement("p");
            nameParagraph.className = "vacancy_title";
            nameParagraph.appendChild(document.createTextNode(entry.get("name")));


            description = document.createTextNode(entry.get("description"));
            console.log(description);
            descriptionParagraph = document.createElement("p");
            descriptionParagraph.className = "article_description";
            descriptionParagraph.appendChild(description);

            link = document.createTextNode(entry.get("link"));
            console.log(link);
            linkParagraph = document.createElement("p");
            linkParagraph.className = "vacancy_salary";
            linkParagraph.appendChild(link);

            articleDiv.appendChild(nameParagraph);
            articleDiv.appendChild(descriptionParagraph);
            articleDiv.appendChild(linkParagraph);

            articleField.appendChild(articleDiv);
        });
    },
    error: function(error) {
        alert('Server error! Please, refresh page!');
    }
});