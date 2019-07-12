import React from 'react';
import Axios from 'axios';

export default class PersonList extends React.Component {
    const playerDataUrl = 'https://api.overwatchleague.com/stats/players';
    axios.get(playerDataUrl)
        .then(function (response) {
            console.log(reponse);
        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(function () {

        });
}