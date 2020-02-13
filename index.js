$(function() {
  // listens to form submission
  $("#js-shopping-list-form").submit(function(event) {
    // prevent default form submission so it can be added as newItem
    event.preventDefault();
    const newItem = $("#shopping-list-entry").val();

    //cleans the form with " " <---empty quotes
    $("#shopping-list-entry").val(" ");

    // then apeends the new item to the ( <li> ) of items using  the newItem const created from
    //the form submission.
    $(".shopping-list").append(
      `<li>
          <span class="shopping-item">${newItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`
    );
  });

  // listens on the delete button on the shopping lists
  // put the event listener on parent element

  $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
    // removes the <li> parent of the cliked delete button
    $(this)
      .closest("li")
      .remove();
  });

  //the check button (.shopping-item-toggle) togles the .shopingitem of parent<li>when cliked
  $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
    $(this)
      .closest("li")
      .find(".shopping-item")
      .toggleClass("shopping-item__checked");
  });
});
