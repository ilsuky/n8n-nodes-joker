"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joker = void 0;
class joker {
    constructor() {
        this.name = 'joker';
        this.documentationUrl = 'https://joker.com/faq/category/33/22-dmapi.html';
        this.displayName = 'joker.com';
        this.properties = [
            {
                displayName: 'Host',
                name: 'host',
                type: 'options',
                options: [
                    {
                        name: 'Live',
                        value: 'https://dmapi.joker.com/request/',
                    },
                    {
                        name: 'OTE - Demo',
                        value: 'https://dmapi.ote.joker.com/request/',
                    },
                ],
                default: 'https://dmapi.joker.com/request/',
                description: 'Use Live or OTE',
            },
            {
                displayName: 'API-Key',
                name: 'apikey',
                type: 'string',
                default: '',
            },
        ];
    }
}
exports.joker = joker;
//# sourceMappingURL=joker.credentials.js.map