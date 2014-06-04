/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var article;
function articleClicked(id) {

    var Art = Parse.Object.extend("Articles");

    var query = new Parse.Query(Art);
    query.equalTo("objectId", id);

    query.find({
        success: function(results) {
            // Do something with the returned Parse.Object values
            var object = results[0];
            article = object;
            console.log(article);
            showDetails();
        },
        error: function(error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    });
}

function showDetails() {
    $('#main').empty();

    console.log(article.get("name"));
    articleDiv = document.createElement("div");
    articleDiv.className = "vacancy";
 
    var articleField = document.getElementById("main");
//            name = document.createTextNode(article.get("name"));
//
//            newParagraph = document.createElement("p");
//            newParagraph.className = "vacancy_title";
//            newParagraph.appendChild(name);

    description = document.createTextNode(article.get("description"));
    descriptionParagraph = document.createElement("p");
    descriptionParagraph.className = "article_description";
    descriptionParagraph.appendChild(description);

//    link = document.createTextNode(article.get("link"));
//    linkParagraph = document.createElement("p");
//    linkParagraph.className = "vacancy_salary";
//    linkParagraph.appendChild(link);

    //    articleDiv.appendChild(newParagraph);
    articleDiv.appendChild(descriptionParagraph);
    articleDiv.appendChild(linkParagraph);

    articleField.appendChild(articleDiv);



}

//function getRespondForm() {
//    $('#main').empty();
//    $('#main').load('../form/new_respond.html #respond_form > *');
//
//}
