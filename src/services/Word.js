import Realm from 'realm';

const WordSchema = {
    name: 'Word',
    properties: {
        word: 'string',
        imageUrl: 'string',
        meaning: 'string',
        sentence: 'string'
    }
}
const Test = {
    name: 'Test',
    properties: {
        word: 'string',
        imageUrl: 'string',
        meaning: 'string',
        sentence: 'string'
    }
}

export const realm = new Realm({
schema: [WordSchema,Test]});
