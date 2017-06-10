angular.module('myApp.task.list', [])
    .controller('TaskListCtrl', ['$scope', 'toastr', 'TaskService', function ($scope, toastr, TaskService) {

        getTasks();

        function getTasks() {
            TaskService.getAllTasks()
                .then((result) => {
                    if (result.data.result === 'OK') {
                        $scope.tasks = result.data.tasks;
                    } else {
                        toastr.error('Server error', 'Error');
                    }
                }, (error) => {
                    console.log(error);
                    toastr.error('Error connection', 'Error');
                });
        }

        $scope.delete = function (task) {
            if (confirm('Delete task ' + task.title + '?')) {
                TaskService.deleteTask(task._id)
                    .then((result) => {
                        if (result.data.result === 'OK') {
                            toastr.info('Task ' + task.title + ' deleted.', 'Success');
                            getTasks();
                        } else {
                            toastr.error('Server error' ,'Error');
                        }
                    }, (error) => {
                        console.log(error);
                        toastr.error('Error connection', 'Error');
                    });
            }
        }
    }]);