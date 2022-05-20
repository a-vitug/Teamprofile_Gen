const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('should create an engineer record', () => {
        const engineer = new Engineer('Allyson', 18, 'allyson_vitug@yahoo.com', 'a-vitug');

        expect(engineer.github).toEqual(expect.any(String));
    });

    it('should get the engineer github', () => {
        const engineer = new Engineer('Allyson', 18, 'allyson_vitug@yahoo.com', 'a-vitug');

        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
    });

    it('should get the role of engineer', () => {
        const engineer = new Engineer('Allyson', 18, 'allyson_vitug@yahoo.com', 'a-vitug');

        expect(engineer.getRole()).toEqual('Engineer');
    });
});