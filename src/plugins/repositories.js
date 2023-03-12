import createRequestsRepository from './requests'
export default {
    install: (app) => {
        const repositories = {
            AddressEndPoint:createRequestsRepository(app,'address')
        }
        app.provide('repositories', repositories)
    }
}
