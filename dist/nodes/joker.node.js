"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joker = void 0;
const GenericFunctions_1 = require("./GenericFunctions");
class joker {
    constructor() {
        this.description = {
            displayName: 'Joker',
            name: 'joker',
            icon: 'file:joker.png',
            group: ['transform'],
            version: 1,
            description: 'Joker DMAPI',
            defaults: {
                name: 'joker',
                color: '#772244',
            },
            subtitle: '={{$parameter["namespace"]}}',
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'joker',
                    required: true,
                },
            ],
            properties: [
                {
                    displayName: 'Requests',
                    name: 'requests',
                    type: 'options',
                    options: [
                        {
                            name: 'Account and Handling',
                            value: 'aah',
                        },
                        {
                            name: 'Domains',
                            value: 'domains',
                        },
                        {
                            name: 'Contacts',
                            value: 'contacts',
                        },
                        {
                            name: 'Nameservers',
                            value: 'nameservers',
                        },
                        {
                            name: 'Modify Zonedata',
                            value: 'mz',
                        },
                        {
                            name: 'Rights and Roles',
                            value: 'rar',
                        },
                        {
                            name: 'Other',
                            value: 'other',
                        },
                    ],
                    default: 'aah',
                    description: 'Requests',
                },
                {
                    displayName: 'Account and Handling',
                    name: 'aah',
                    type: 'options',
                    options: [
                        {
                            name: 'result-list',
                            value: 'result-list',
                        },
                        {
                            name: 'result-retrieve',
                            value: 'result-retrieve',
                        },
                        {
                            name: 'result-delete',
                            value: 'result-delete',
                        },
                        {
                            name: 'query-profile',
                            value: 'query-profile',
                        },
                    ],
                    default: 'result-list',
                    description: 'Account and administrative requests',
                    displayOptions: {
                        show: {
                            requests: [
                                'aah',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Domains',
                    name: 'domains',
                    type: 'options',
                    options: [
                        {
                            name: 'domain-check',
                            value: 'domain-check',
                        },
                        {
                            name: 'query-domain-list',
                            value: 'query-domain-list',
                        },
                        {
                            name: 'domain-register',
                            value: 'domain-register',
                        },
                        {
                            name: 'domain-renew',
                            value: 'domain-renew',
                        },
                        {
                            name: 'domain-modify',
                            value: 'domain-modify',
                        },
                        {
                            name: 'domain-delete',
                            value: 'domain-delete',
                        },
                        {
                            name: 'domain-owner-change',
                            value: 'domain-owner-change',
                        },
                        {
                            name: 'domain-lock',
                            value: 'domain-lock',
                        },
                        {
                            name: 'domain-unlock',
                            value: 'domain-unlock',
                        },
                        {
                            name: 'domain-transfer-in-reseller',
                            value: 'domain-transfer-in-reseller',
                        },
                        {
                            name: 'domain-set-property',
                            value: 'domain-set-property',
                        },
                        {
                            name: 'domain-get-property',
                            value: 'domain-get-property',
                        },
                        {
                            name: 'domain-transfer-get-auth-id',
                            value: 'domain-transfer-get-auth-id',
                        },
                        {
                            name: 'domain-transfer-control',
                            value: 'domain-transfer-control',
                        },
                    ],
                    default: 'domain-check',
                    description: 'Domain related requests',
                    displayOptions: {
                        show: {
                            requests: [
                                'domains',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Contacts',
                    name: 'contacts',
                    type: 'options',
                    options: [
                        {
                            name: 'query-contact-list',
                            value: 'query-contact-list',
                        },
                        {
                            name: 'contact-create',
                            value: 'contact-create',
                        },
                        {
                            name: 'contact-modify',
                            value: 'contact-modify',
                        },
                        {
                            name: 'contact-delete',
                            value: 'contact-delete',
                        },
                    ],
                    default: 'query-contact-list',
                    description: 'Contact related requests',
                    displayOptions: {
                        show: {
                            requests: [
                                'contacts',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Nameservers',
                    name: 'nameservers',
                    type: 'options',
                    options: [
                        {
                            name: 'query-ns-list',
                            value: 'query-ns-list',
                        },
                        {
                            name: 'ns-create',
                            value: 'ns-create',
                        },
                        {
                            name: 'ns-modify',
                            value: 'ns-modify',
                        },
                        {
                            name: 'host-modify',
                            value: 'host-modify',
                        },
                        {
                            name: 'ns-delete',
                            value: 'ns-delete',
                        },
                        {
                            name: 'host-delete',
                            value: 'host-delete',
                        },
                    ],
                    default: 'query-ns-list',
                    description: 'Nameserver related requests',
                    displayOptions: {
                        show: {
                            requests: [
                                'nameservers',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Modify Zonedata',
                    name: 'mz',
                    type: 'options',
                    options: [
                        {
                            name: 'dns-zone-list',
                            value: 'dns-zone-list',
                        },
                        {
                            name: 'dns-zone-get',
                            value: 'dns-zone-get',
                        },
                        {
                            name: 'dns-zone-put',
                            value: 'dns-zone-put',
                        },
                    ],
                    default: 'dns-zone-list',
                    description: 'allow modification of Joker DNS data',
                    displayOptions: {
                        show: {
                            requests: [
                                'mz',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Rights and Roles',
                    name: 'rar',
                    type: 'options',
                    options: [
                        {
                            name: 'grants-list',
                            value: 'grants-list',
                        },
                        {
                            name: 'grants-invite',
                            value: 'grants-invite',
                        },
                        {
                            name: 'grants-revoke',
                            value: 'grants-revoke',
                        },
                    ],
                    default: 'grants-list',
                    description: 'delegate permissions or whole domains to other Joker.com users',
                    displayOptions: {
                        show: {
                            requests: [
                                'rar',
                            ],
                        },
                    },
                },
                {
                    displayName: 'Other',
                    name: 'other',
                    type: 'options',
                    options: [
                        {
                            name: 'query-object',
                            value: 'query-object',
                        },
                        {
                            name: 'query-whois',
                            value: 'query-whois',
                        },
                        {
                            name: 'query-price-list',
                            value: 'query-price-list',
                        },
                    ],
                    default: 'query-whois',
                    description: 'Other requests, generic requests',
                    displayOptions: {
                        show: {
                            requests: [
                                'other',
                            ],
                        },
                    },
                },
            ]
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnItems = [];
        let item;
        const requests = this.getNodeParameter('requests', 0, '');
        const credentials = await this.getCredentials('joker');
        const authsid = await GenericFunctions_1.getauthsid.call(this);
        for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            try {
                if (requests == 'aah') {
                    const aah = this.getNodeParameter('aah', 0, '');
                    if (aah === 'result-list') {
                        const id = this.getNodeParameter('id', itemIndex, '');
                        item = items[itemIndex];
                        const rbody = {};
                        const newItem = {
                            json: {},
                            binary: {},
                        };
                        newItem.json = await GenericFunctions_1.jokerRequest.call(this, 'result-list', rbody, authsid);
                        returnItems.push(newItem);
                    }
                }
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnItems.push({ json: { error: error.message } });
                    continue;
                }
                throw error;
            }
        }
        return this.prepareOutputData(returnItems);
    }
}
exports.joker = joker;
//# sourceMappingURL=joker.node.js.map