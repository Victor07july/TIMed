//Código para gerenciar dados
import createDataContext from "./createDataContext";

const remedyReducer = (state, action) => {
    //Redutor de funções
    //action == addremedypost, delete, etc
    switch(action.type) {
        case 'edit_blogpost':
            return state.map((remedyPost) => {
                return remedyPost.id === action.payload.id
                    ? action.payload
                    : remedyPost
            });
        case 'delete_remedypost':
            return state.filter((remedyPost) => remedyPost.id !== action.payload);
        case 'add_remedypost':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title,
                    content: action.payload.content,
                    date: action.payload.date,
                    interval: action.payload.interval,
                    addInfo: action.payload.addInfo
                }
            ];
        default:
            return state;
    }
};

const addRemedyPost = dispatch => { //Adicionar remedios
    return (title, content, date, interval, addInfo) => {
        dispatch({ type: 'add_remedypost', payload: { title, content, date, interval, addInfo }});
    };
};
const deleteRemedyPost = dispatch => { //Deletar remedios
    return (id) => {
        dispatch({ type: 'delete_remedypost', payload: id })
    };
}

const editRemedyPost = dispatch => {
    return (id, title, content, date, interval, addInfo, callback) => {
        dispatch ({ 
            type: 'edit_blogpost', 
            payload: { id, title, content, date, interval, addInfo } 
        });
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    remedyReducer, 
    { addRemedyPost, deleteRemedyPost, editRemedyPost },
    [] 
    //Colocar dentro do [] para começar com um remedio de teste
    //{ title: 'TESTE', content: 'TESTE', date: '20-02-2014', interval: 'TESTE', addInfo: 'Post de teste, apenas para agilizar os testes', id: 1 }
);