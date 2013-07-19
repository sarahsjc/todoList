describe("Todo", function () {

    var fixture = "<ul class='task-list'></ul>";

    it("should be able to add a task", function () {
        loadFixtures(fixture);

        Todo.add_task();

        expect($("<ul class='task-list'></ul>")).toHaveHtml(Todo.task_template);
    });

});
