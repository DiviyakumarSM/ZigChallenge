/**
 * Created by DiviyaKumar on 28-03-2017.
 */
app.directive('displayCard', function() {
    return {
        restrict: 'E',
        scope: {
            card: '='
        },
        link: function(scope, element, attrs) {
        },
        templateUrl: 'template/template.html',
        controller: function($scope, $element) {
            $scope.removeItem = function(e) {
                $element.remove();
                $scope.$destroy();
            }
            $scope.togglePin = function(id) {

            }
        }
    }
});