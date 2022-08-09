//Son importacion de modulos de funciones en js

//archivo 1---------

export function suma(a,b){
    return a-b;
}

export function otraFunction(){

}

//Archivo 2---------

export function resta(a,b){
    return a-b;
}

//Archivo 3----------

//En caso de que en un archivo se necesite usar mas de un modulo se exporta de la siguiente manera

import {suma, otraFunction} from './suma';
import resta from './resta';

function calcular(){
    suma();
    resta();
}

// como sera en react................................................................

import react from 'react';
