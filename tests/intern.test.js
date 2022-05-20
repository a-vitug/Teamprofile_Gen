const Intern = require('../lib/intern');

describe('Intern', () => {
    it('should create an intern record', () => {
        const intern = new Intern('Allyson', 18, 'allyson_vitug@yahoo.com', 'UCI');

        expect(intern.school).toEqual(expect.any(String));
    });

    it('should get the intern school', () => {
        const intern = new Intern('Allyson', 18, 'allyson_vitug@yahoo.com', 'UCI');

        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    });

    it('should get the role of intern', () => {
        const intern = new Intern('Allyson', 18, 'allyson_vitug@yahoo.com', 'UCI');

        expect(intern.getRole()).toEqual('Intern');
    })
});