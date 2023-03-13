import axios from 'axios'
axios.defaults.baseURL = 'https://stage.achareh.ir/api/karfarmas/';
axios.defaults.headers.common['Authorization'] = 'Basic MDkxMjEwNzAxNTc6QWNoYXJlaEAxMjM0';
export default (context, resources) => ({
    async setTag() {

        const response = await axios.get(resources);
        return response;
    },

    async setParams(params) {
        const response = await axios.post(resources, null, {
            params
        });
        return response;
    },

    async setPayload(payload) {
        const response = await axios.post(resources, payload);
        return response;
    },
})

