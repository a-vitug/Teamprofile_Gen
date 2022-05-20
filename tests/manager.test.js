const Manager = require('../lib/manager');

describe('Manager', () => {
    it('should create a manager record', () => {
        const manager = new Manager('Allyson', 18, 'allyson_vitug@yahoo.com', 8);

        expect(manager.officeNumber).toEqual(expect.any(Number));
    });

    it('should get the role of manager', () => {
        const manager = new Manager('Allyson', 18, 'allyson_vitug@yahoo.com', 8);

        expect(manager.getRole()).toEqual('Manager');
    })
})