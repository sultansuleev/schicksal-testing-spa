import axios from 'axios';
import {useHistory} from "react-router-dom";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api'
});

const instSec = axios.create({
    baseURL: 'http://localhost:8000',
    authorization: `Bearer ${localStorage.getItem("token")}`
});

class CardService {

    getCards(token){
        instance.defaults.headers.common = {'Authorization': `bearer ${token}`}
        return  instance.get('/cards/' + token);
    }
    addNewCard(card){
        return  instance.post('/addCard', card);
    }
    editCard(card){
        console.log(card)
        return instance.post('/editCard', card)
    }
    getCardById(id){
        return instance.get('/card/'+id)
    }
    getCardTasksById(id){
        return instance.get('/cardTasks/'+id);
    }
    changeDoneInTask(id){
        return instance.put('/cardTask/'+id);
    }
    addCardTask(id,cardTask){
        return  instance.post('/addCardTask/'+id, cardTask);
    }
    deleteCard(id){
        instance.delete('/card/'+id);
    }

    register(user){
        return  instSec.post('/signup', user);
    }

    login(user) {
        return instSec.post('/auth', user).then(response => {
            if(response.data.jwtToken){
                localStorage.setItem("token", response.data.jwtToken);
            }

            return response.data;
        });
    }

    getCurrentUser(){
        return instSec.get( "/getUser/" + localStorage.getItem("token"));
    }

    logout(){
        localStorage.removeItem("token");
    }

    getToken(){
        return JSON.parse(localStorage.getItem("token"));
    }

    changeName(user){
        return instance.put("/changeName", {
            id: user.id,
            email: user.email,
            password: user.password,
            fullName: user.fullName,
            roles: user.roles})
    }

    changeQuote(user){
        return instance.put("/changeQuote", {
            id: user.id,
            email: user.email,
            password: user.password,
            fullName: user.fullName,
            quote: user.quote,
            roles: user.roles})
    }

    changePassword(user, pass){
        return instance.put("/changePass", {
            email: user.email,
            password: user.password,
            fullName: user.fullName,
            newPassword: pass
        });
    }


}
export default new CardService();