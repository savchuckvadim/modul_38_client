
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000',
    // baseURL: ' http://185.225.35.6/',

    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        // 'Access-Control-Allow-Origin' : '*',
    },

})

export const laravelAPI = {


    async initial() {
      const res =  await instance.get("/sanctum/csrf-cookie");
      
      return res

    },
    async register(name, surname, email, password, passwordConfirmation, role) {

        await instance.get("/sanctum/csrf-cookie");

        let result = await instance.post('register', {
            name: name,
            surname: surname,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            role: role

        })
        return result;

    },

    async login(email, password) {
        // await instance.get("/sanctum/csrf-cookie")

        const result = await instance.post('login', {
            email: email,
            password: password,
            remember: true
        })
        
        return result


    },
    async getAuthUser() {
        // await instance.get("/sanctum/csrf-cookie")

        let result = await instance.get("api/user/auth");

        return result
    },
    async logout() {
        let result = instance.post('logout')
        return result
    },
//TODO:
    updatePassword(payload) {
        return instance.put("/user/password", payload);
    },
    sendVerification(payload) {
        return instance.post("/email/verification-notification", payload);
    },
    updateUser(payload) {
        return instance.put("/user/profile-information", payload);
    },
   



}

export const usersAPILaravel = {



    async getUsers(currentPage = 1, pageSize = 10) {
        await instance.get("/sanctum/csrf-cookie");

        let res = await instance.get(`api/users?page=${currentPage}&count=${pageSize}`);

        return res
    },

    async getUser(id) {

        return instance.get(`api/users/${id}`).then(res => res.data)
    },


    async getAvatar(userId) {
        const result = await instance.get(`api/garavatar/${userId}`)

        return result

    },
}

export const offerAPI = {

    sendOffer(userId, name, description, url, price) {

        return instance.post('api/offer', {
            userId,
            name,
            description,
            url,
            price

        })
    },

    async getOffers(userId) {
        const res = await instance.get(`api/offers/${userId}`);
        

        if(res.data){
            return res.data.data
        }
        return {'resultCode' : 0}
    },
    deleteOffer(offerId) {
        return instance.delete(`api/offers/${offerId}`);
    },

    follow(offerId) {
        return instance.post(`api/follow/`, {
            offerId
        })
    },
    unfollow(offerId) {
        return instance.delete(`api/follow/${offerId}`)
    },

    async getLink(offerId) {
        let res = await instance.get(`api/link/${offerId}`);
        
        return res.data
    }
  



}

export const financeAPI = {

    async getFinance() {
        let res = await instance.get(`api/finance`);
        return res.data
    }
}