"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getauthsid = exports.jokerRequest = void 0;
const n8n_workflow_1 = require("n8n-workflow");
async function jokerRequest(endpoint, qs = {}, authsid) {
    const qsp = { "auth-sid": authsid };
    qs.push(qsp);
    const credentials = await this.getCredentials('joker');
    const options = {
        headers: {},
        method: 'GET',
        qs,
        uri: `${credentials.host}/${endpoint}`,
    };
    try {
        const returnr = await this.helpers.request(options);
        const dataObject = {};
        let list = [];
        let row = [];
        const splitData = returnr.data.split('\n');
        for (row of splitData) {
            if (row.includes(":")) {
                const split = row.split(':');
                dataObject[split[0]] = split[1].trim();
            }
            else if (row.length > 0) {
                list.push(row);
            }
        }
        dataObject.list = list;
        return dataObject;
    }
    catch (error) {
        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
    }
}
exports.jokerRequest = jokerRequest;
async function getauthsid() {
    const credentials = await this.getCredentials('joker');
    const qs = { "api-key": `${credentials.apikey}` };
    const options = {
        method: 'GET',
        qs,
        uri: `${credentials.host}/login`,
        rejectUnauthorized: false,
    };
    try {
        const authsidr = await this.helpers.request(options);
        let authsid = "";
        let row = [];
        const splitData = authsidr.data.split('\n');
        for (row of splitData) {
            if (row.includes("Auth-Sid: ")) {
                const split = row.split(':');
                authsid = split[1].trim();
            }
        }
        return authsid;
    }
    catch (error) {
        throw new n8n_workflow_1.NodeApiError(this.getNode(), { error: error });
    }
}
exports.getauthsid = getauthsid;
//# sourceMappingURL=GenericFunctions.js.map