import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { MMOs } from '../../api/mmos.js';
import template from './mmoList.html';

class MMOListCtrl
{
    order = "Ascending";

    constructor($scope)
    {
        $scope.viewModel(this);

        this.helpers({
            mmosAsc()
            {
                return MMOs.find({}, { sort: { points: -1 } });
            },
            mmosDsc()
            {
                return MMOs.find({}, { sort: { points: 1 } });
            }
        });
    }

    addMMO(newMMO)
    {
        if (!newMMO || newMMO == "")
            return;

        MMOs.insert({
            text: newMMO,
            upvotes: 0,
            downvotes: 0,
            points: 0
        });

        this.newMMO = '';
    }

    upVote(mmo)
    {
        console.log(
            MMOs.update(mmo._id, {
                $set: {
                    upvotes: mmo.upvotes + 1,
                    points: mmo.points + 1,
                },
            }));
    }

    downVote(mmo)
    {
        MMOs.update(mmo._id, {
            $set: {
                downvotes: mmo.downvotes + 1,
                points: mmo.points - 1,
            },
        });
    }

    toggleOrder()
    {
        if (this.order == "Descending") this.order = "Ascending";
        else if (this.order == "Ascending") this.order = "Descending";
    }

    removeMMO(mmo)
    {
        MMOs.remove(mmo._id);
    }
}


export default angular.module('mmoList', [
    angularMeteor
])
    .component('mmoList', {
        templateUrl: 'imports/components/mmoList/mmoList.html',
        controller: ['$scope', MMOListCtrl],
    });