"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joker = void 0;
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
            properties: []
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnItems = [];
        let item;
        const namespace = this.getNodeParameter('namespace', 0, '');
        const operation = this.getNodeParameter('operation', 0, '');
        const credentials = await this.getCredentials('joker');
        for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            try {
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