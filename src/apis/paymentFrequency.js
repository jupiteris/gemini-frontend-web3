import axios from 'axios';
import {API_URL} from "../config";
import ConfigurationAPI from "./configurationApi";
export class PaymentFrequencyAPI extends ConfigurationAPI {
    fetchAll = () => {
        return new Promise((resolve, reject) => {
            return axios.get(`${API_URL}/payment_frequencies`, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    createItem = (body) => {
        return new Promise((resolve, reject) => {
            return axios.post(`${API_URL}/payment_frequencies`, body, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    updateItem = (id, body) => {
        return new Promise((resolve, reject) => {
            return axios.put(`${API_URL}/payment_frequencies/${id}`, body, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    deleteItem = (id) => {
        return new Promise((resolve, reject) => {
            return axios.delete(`${API_URL}/payment_frequencies/${id}`, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
}
