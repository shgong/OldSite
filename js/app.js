
$(document).ready(function() {
    $('.stack-hover').bind('touchstart', function(e) {
        e.preventDefault();
        if ($(this).hasClass('hover_effect')) this.click();
        else
        {
        $('.stack-hover').removeClass('hover_effect');
        $(this).addClass('hover_effect');
        };
    });

});



    angular.module('sitec',[])        // Module(name,dependency)
    .controller('Controller', ['$scope','$sce', function($scope,$sce) {
        var ct=this;   // this won't work in the http scope
        ct.projects=projectsData.data;
        ct.category=projectsData.category;
        //$http.get('doc/projects.json').then(function(res){ct.projects = res.data;});

        $scope.currentProject=ct.projects[0];
        $scope.category="";
        $scope.TrustedHtml="";

        $scope.ToggleCategory= function(cat) {
            if($scope.category==cat) $scope.category="";
            else $scope.category=cat;
        };
        $scope.ResetFields=function(){
            $scope.category='';
            $scope.searchTerm='';
        };
        $scope.IsSelected=function(cat){
            if($scope.category==cat) return true;
            return false;
        };
        $scope.SetCurrentProject=function(project){
            $scope.currentProject=project;
            $scope.TrustedHtml = $sce.trustAsHtml(project.content);
            $("#stackModal div.row").focus();
        };


    }])
    .filter('findTag', function() {
      return function( items, target) {
        if(target=="") return items;
        var filtered = [];
        angular.forEach(items, function(item) {
          var tags=item.tag;
          if(tags && item.tag.indexOf(target)>=0) {
            filtered.push(item);
          }
        });
        return filtered;
      };
    })
    .directive("project", function(){
        var num=1;
        return{
            restrict:"E",
            templateUrl: "template/card.html",
            scope: {
                header:"@"  // @ passing in a string
                            // =  two way binding / also can remove {{}}
            },
            controller: function($scope){
                $scope.header="Title"+ num++ ;
                // actually it is set on parent
            }
        }
    });


//})();
