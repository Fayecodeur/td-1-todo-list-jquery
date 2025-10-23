$(document).ready(function () {
  checkEmpty();

  // Ajouter une tâche
  $("#todoForm").submit(function (e) {
    e.preventDefault();

    let task = $("#taskInput").val().trim();

    if (task !== "") {
      let li = $("<li>").text(task);
      let delBtn = $("<button>Supprimer</button>");

      // Supprimer une tâche
      delBtn.click(function () {
        $(this)
          .parent()
          .fadeOut(300, function () {
            $(this).remove();
            checkEmpty();
          });
      });

      // Cliquer sur une tâche pour la barrer
      li.click(function () {
        $(this).toggleClass("done");
      });

      li.append(delBtn).hide().fadeIn(300);
      $("#taskList").append(li);
      $("#taskInput").val("");
      checkEmpty();
    }
  });

  // Afficher message si vide
  function checkEmpty() {
    if ($("#taskList li").length === 0) {
      $("#emptyMsg").fadeIn();
    } else {
      $("#emptyMsg").hide();
    }
  }
});
