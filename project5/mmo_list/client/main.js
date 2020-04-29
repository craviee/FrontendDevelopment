import angular from 'angular';
import angularMeteor from 'angular-meteor';
import mmoList from '../imports/components/mmoList/mmoList';

angular.module('mmo_list', [
    angularMeteor,
    mmoList.name
]);