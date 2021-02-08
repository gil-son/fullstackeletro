import {combineReducers} from 'redux';

var initialState = { compras:                    
                        [
                            {}
                        ]
                    }

function compraReducer( state = initialState, action){
     switch(action.type){
        case "ADICIONARCARRINHO": return { compras:[ ...state.compras, {...action.value }]};  // é necessário desestruturar o obj p/ adicionar o(s) novo(s) valor(res)
        case "LIMPARCARRINHO": return initialState;
        default: return state;
    }
}

var lista = [];

function listaReducer( listar = lista, action){
    switch(action.type){
       case "ADICIONARLISTA": return [...listar, action.value];  
       case "LIMPARLISTA": return lista;
       default: return listar;
   }
}

const reducers = combineReducers({compraReducer, listaReducer});

export default reducers;