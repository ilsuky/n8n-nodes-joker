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
                {
                    displayName: 'Proc-ID',
                    name: 'proc-id',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'aah',
                            ],
                            aah: [
                                'result-retrieve',
                                'result-delete',
                            ],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'specified Tracking/Processing ID',
                },
                {
                    displayName: 'Pattern',
                    name: 'pattern',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'domains',
                            ],
                            domains: [
                                'query-domain-list',
                            ],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'Pattern to match (globbing, like "dom*")',
                },
                {
                    displayName: 'Domain',
                    name: 'domain',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'domains',
                            ],
                            domains: [
                                'domain-register',
                                'domain-check',
                            ],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'Domain name',
                },
                {
                    displayName: 'check-price',
                    name: 'checkprice',
                    type: 'options',
                    options: [
                        {
                            name: 'Create',
                            value: 'create',
                        },
                        {
                            name: 'Renew',
                            value: 'renew',
                        },
                        {
                            name: 'Transfer',
                            value: 'transfer',
                        },
                        {
                            name: 'Restore',
                            value: 'restore',
                        },
                    ],
                    displayOptions: {
                        show: {
                            requests: [
                                'domains',
                            ],
                            domains: [
                                'domain-check',
                            ],
                        },
                    },
                    default: 'create',
                    required: true,
                    description: 'specifically check the price for',
                },
                {
                    displayName: 'Period',
                    name: 'period',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'domains',
                            ],
                            domains: [
                                'domain-register',
                            ],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'Registration period in months (not in years!)',
                },
                {
                    displayName: 'owner-c',
                    name: 'ownerc',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'domains',
                            ],
                            domains: [
                                'domain-register',
                            ],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'Owner contact handle',
                },
                {
                    displayName: 'billing-c',
                    name: 'billingc',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'domains',
                            ],
                            domains: [
                                'domain-register',
                            ],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'Billing contact handle',
                },
                {
                    displayName: 'admin-c',
                    name: 'adminc',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'domains',
                            ],
                            domains: [
                                'domain-register',
                            ],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'Administrative contact handle',
                },
                {
                    displayName: 'tech-c',
                    name: 'techc',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'domains',
                            ],
                            domains: [
                                'domain-register',
                            ],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'Technical contact handle',
                },
                {
                    displayName: 'ns-list',
                    name: 'nslist',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'domains',
                            ],
                            domains: [
                                'domain-register',
                            ],
                        },
                    },
                    default: 'ns1.cnh.at,ns2.cnh.at,ns3.cnh.at',
                    required: true,
                    description: 'List of name servers, delimited by colon',
                },
                {
                    displayName: 'Pattern',
                    name: 'pattern',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'contacts'
                            ],
                            contacts: [
                                'query-contact-list',
                            ],
                        },
                    },
                    default: '',
                    required: false,
                    description: 'Pattern to match (globbing, like "dom*")',
                },
                {
                    displayName: 'tld',
                    name: 'tld',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'contacts',
                            ],
                            contacts: [
                                'contact-create',
                                'query-contact-list',
                            ],
                        },
                    },
                    default: '',
                    required: false,
                    description: 'target TLD where this contact is intended to be used.',
                },
                {
                    displayName: 'name',
                    name: 'name',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'contacts',
                            ],
                            contacts: [
                                'contact-create',
                            ],
                        },
                    },
                    default: '',
                    description: 'full name (if empty, fname + lname will be used)',
                },
                {
                    displayName: 'fname',
                    name: 'fname',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'contacts',
                            ],
                            contacts: [
                                'contact-create',
                            ],
                        },
                    },
                    default: '',
                    description: 'first name',
                },
                {
                    displayName: 'lname',
                    name: 'lname',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'contacts',
                            ],
                            contacts: [
                                'contact-create',
                            ],
                        },
                    },
                    default: '',
                    description: 'last name',
                },
                {
                    displayName: 'organization',
                    name: 'organization',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'contacts',
                            ],
                            contacts: [
                                'contact-create',
                            ],
                        },
                    },
                    default: '',
                    description: 'optional if individual',
                },
                {
                    displayName: 'email',
                    name: 'email',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'contacts',
                            ],
                            contacts: [
                                'contact-create',
                            ],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'email',
                },
                {
                    displayName: 'address',
                    name: 'address-1',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'contacts',
                            ],
                            contacts: [
                                'contact-create',
                            ],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'address',
                },
                {
                    displayName: 'city',
                    name: 'city',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'contacts',
                            ],
                            contacts: [
                                'contact-create',
                            ],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'city',
                },
                {
                    displayName: 'postal-code',
                    name: 'postal-code',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'contacts',
                            ],
                            contacts: [
                                'contact-create',
                            ],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'postal-code',
                },
                {
                    displayName: 'country',
                    name: 'country',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'contacts',
                            ],
                            contacts: [
                                'contact-create',
                            ],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'ISO country code (2 letters) - ex. AT',
                },
                {
                    displayName: 'phone',
                    name: 'phone',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'contacts',
                            ],
                            contacts: [
                                'contact-create',
                            ],
                        },
                    },
                    default: '+43.',
                    required: true,
                    description: 'phone ex. +43.5223.5855',
                },
                {
                    displayName: 'Domain',
                    name: 'domain',
                    type: 'string',
                    displayOptions: {
                        show: {
                            requests: [
                                'other',
                            ],
                            other: [
                                'query-whois',
                            ],
                        },
                    },
                    default: '',
                    required: true,
                    description: 'Domain name',
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
                    if (aah === 'result-list' || aah === 'query-profile') {
                        item = items[itemIndex];
                        const rbody = {};
                        const newItem = {
                            json: {},
                            binary: {},
                        };
                        newItem.json = await GenericFunctions_1.jokerRequest.call(this, aah, rbody, authsid);
                        returnItems.push(newItem);
                    }
                    if (aah === 'result-retrieve' || aah === 'result-delete') {
                        const id = this.getNodeParameter('proc-id', itemIndex, '');
                        item = items[itemIndex];
                        const rbody = { "proc-id": id };
                        const newItem = {
                            json: {},
                            binary: {},
                        };
                        newItem.json = await GenericFunctions_1.jokerRequest.call(this, aah, rbody, authsid);
                        returnItems.push(newItem);
                    }
                }
                if (requests == 'domains') {
                    const domains = this.getNodeParameter('domains', 0, '');
                    if (domains === 'query-domain-list') {
                        const pattern = this.getNodeParameter('pattern', itemIndex, '');
                        item = items[itemIndex];
                        const rbody = { "pattern": pattern, "showstatus": "1", "showgrants": "1", "showprivacy": "1" };
                        const newItem = {
                            json: {},
                            binary: {},
                        };
                        newItem.json = await GenericFunctions_1.jokerRequest.call(this, domains, rbody, authsid);
                        returnItems.push(newItem);
                    }
                    if (domains === 'domain-check') {
                        const domain = this.getNodeParameter('domain', itemIndex, '');
                        const checkprice = this.getNodeParameter('checkprice', itemIndex, '');
                        item = items[itemIndex];
                        const rbody = { "domain": domain, "check-price": checkprice };
                        const newItem = {
                            json: {},
                            binary: {},
                        };
                        newItem.json = await GenericFunctions_1.jokerRequest.call(this, domains, rbody, authsid);
                        returnItems.push(newItem);
                    }
                    if (domains === 'domain-register') {
                        item = items[itemIndex];
                        const domain = this.getNodeParameter('domain', itemIndex, '');
                        const period = this.getNodeParameter('period', itemIndex, '');
                        const ownerc = this.getNodeParameter('ownerc', itemIndex, '');
                        const billingc = this.getNodeParameter('billingc', itemIndex, '');
                        const adminc = this.getNodeParameter('adminc', itemIndex, '');
                        const techc = this.getNodeParameter('techc', itemIndex, '');
                        const nslist = this.getNodeParameter('nslist', itemIndex, '');
                        const rbody = { "domain": domain, "period": period, "status": "production", "owner-c": ownerc, "billing-c": billingc, "admin-c": adminc, "tech-c": techc, "ns-list": nslist };
                        const newItem = {
                            json: {},
                            binary: {},
                        };
                        newItem.json = await GenericFunctions_1.jokerRequest.call(this, domains, rbody, authsid);
                        returnItems.push(newItem);
                    }
                }
                if (requests == 'contacts') {
                    const contacts = this.getNodeParameter('contacts', 0, '');
                    if (contacts === 'query-contact-list') {
                        const pattern = this.getNodeParameter('pattern', itemIndex, '');
                        const tld = this.getNodeParameter('tld', itemIndex, '');
                        item = items[itemIndex];
                        if (tld) {
                            const rbody = { "pattern": pattern, "tld": tld, "extended-format": "1" };
                            const newItem = {
                                json: {},
                                binary: {},
                            };
                            newItem.json = await GenericFunctions_1.jokerRequest.call(this, contacts, rbody, authsid);
                            returnItems.push(newItem);
                        }
                        else {
                            const rbody = { "pattern": pattern, "extended-format": "1" };
                            const newItem = {
                                json: {},
                                binary: {},
                            };
                            newItem.json = await GenericFunctions_1.jokerRequest.call(this, contacts, rbody, authsid);
                            returnItems.push(newItem);
                        }
                    }
                    if (contacts === 'contact-create') {
                        item = items[itemIndex];
                        const tld = this.getNodeParameter('tld', itemIndex, '');
                        const name = this.getNodeParameter('name', itemIndex, '');
                        const fname = this.getNodeParameter('fname', itemIndex, '');
                        const lname = this.getNodeParameter('lname', itemIndex, '');
                        const organization = this.getNodeParameter('organization', itemIndex, '');
                        const address1 = this.getNodeParameter('address-1', itemIndex, '');
                        const city = this.getNodeParameter('city', itemIndex, '');
                        const email = this.getNodeParameter('email', itemIndex, '');
                        const postalcode = this.getNodeParameter('postal-code', itemIndex, '');
                        const country = this.getNodeParameter('country', itemIndex, '');
                        const phone = this.getNodeParameter('phone', itemIndex, '');
                        if (name) {
                            const rbody = { "tld": tld, "name": name, "organization": organization, "address-1": address1, "city": city, "email": email, "postal-code": postalcode, "country": country, "phone": phone, "lang": "DE" };
                            const newItem = {
                                json: {},
                                binary: {},
                            };
                            newItem.json = await GenericFunctions_1.jokerRequest.call(this, contacts, rbody, authsid);
                            returnItems.push(newItem);
                        }
                        else {
                            const rbody = { "tld": tld, "fname": fname, "lname": lname, "organization": organization, "address-1": address1, "city": city, "email": email, "postal-code": postalcode, "country": country, "phone": phone, "lang": "DE" };
                            const newItem = {
                                json: {},
                                binary: {},
                            };
                            newItem.json = await GenericFunctions_1.jokerRequest.call(this, contacts, rbody, authsid);
                            returnItems.push(newItem);
                        }
                    }
                }
                if (requests == 'other') {
                    const other = this.getNodeParameter('other', 0, '');
                    if (other === 'query-price-list') {
                        item = items[itemIndex];
                        const rbody = {};
                        const newItem = {
                            json: {},
                            binary: {},
                        };
                        newItem.json = await GenericFunctions_1.jokerRequest.call(this, other, rbody, authsid);
                        returnItems.push(newItem);
                    }
                    if (other === 'query-whois') {
                        const domain = this.getNodeParameter('domain', itemIndex, '');
                        item = items[itemIndex];
                        const rbody = { "domain": domain };
                        const newItem = {
                            json: {},
                            binary: {},
                        };
                        newItem.json = await GenericFunctions_1.jokerRequest.call(this, other, rbody, authsid);
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