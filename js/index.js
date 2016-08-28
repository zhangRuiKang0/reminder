var reminder=angular.module('reminder',[]);
reminder.controller('main',['$scope',function ($scope) {
    $scope.database=[];
    $scope.name=''
    if(localStorage.shuju){
        $scope.database=JSON.parse(localStorage.shuju);
    }else{
        $scope.database=[];
    }
    $scope.save=function () {
        localStorage.shuju=JSON.stringify($scope.database);
    }
    $scope.color=['green','yellow','blue','orange','purple','brow','pink'];
    $scope.add=function () {
        var l=$scope.database.length;
        var id;
        if($scope.database.length===0){
            var id=1;
        }else {
           var max=-Infinity;
            for(var i=0;i<$scope.database.length;i++){
                var value=$scope.database[i];
                if(value.id>max){
                    max=value.id;
                }
                var id=max+1;
            }
        }
        var list={id:id,listsName:'新列表'+(id),theme:($scope.color[l%7]),todo:[]};
        $scope.database.push(list);
    }


    $scope.currentlist=$scope.database[0];
    $scope.click=function (a) {
        $scope.currentlist = $scope.database[a];
    }
    $scope.tianjia=function () {
        if($scope.currentlist.todo.length===0){
            var id=1;
        }else {
            var mas=-Infinity;
            for(var i=0;i<$scope.currentlist.todo.length;i++){
                var value=$scope.currentlist.todo[i];
                if(value.id>mas){
                    mas=value.id;
                }
                var id=mas+1;
            }
        }
        var lists={id:id,name:$scope.name,isDone:false};
        $scope.currentlist.todo.push(lists);
    }


    $scope.clacel=function (e) {
        e.stopPropagation();
    }
    $scope.delete=function (id) {
        var arr=[];
        for(var i=0;i<$scope.database.length;i++){
            if($scope.database[i].id!==id){
                arr.push($scope.database[i]);
            }
        }
        $scope.database=arr;
        $scope.currentlist=$scope.database[0];
    }
    $scope.wangcheng=function () {
        var num=$('.Completed li').length;
        return num;
    }
    $scope.schu=function (id) {
        var brr=[];
        for(var i=0;i<$scope.currentlist.todo.length;i++){
            if($scope.currentlist.todo[i].id!==id){
                brr.push($scope.currentlist.todo[i]);
            }
        }
        $scope.currentlist.todo=brr;
    }
    $scope.dianji=function () {
        $('.header-icon').toggleClass('huan');
    }
}])