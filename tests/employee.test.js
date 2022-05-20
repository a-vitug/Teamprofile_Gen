const Employee = require('../lib/employee');

describe('Employee', () => {
    it('should create an employee record', () => {
        const employee = new Employee('Allyson', 18, 'allyson_vitug@yahoo.com');
        
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.email).toEqual(expect.any(String));
    });

    it('should get the employee id', () => {
        const employee = new Employee('Allyson', 18, 'allyson_vitug@yahoo.com');

        expect(employee.getId()).toEqual(expect.any(Number));
    });

    it('should get the employee name', () => {
        const employee = new Employee('Allyson', 18, 'allyson_vitug@yahoo.com');

        expect(employee.getName()).toEqual(expect.any(String));
    });

    it('should get the employee email', () => {
        const employee = new Employee('Allyson', 18, 'allyson_vitug@yahoo.com');

        expect(employee.getEmail()).toEqual(expect.any(String));
    })
    
    it('should get the role of employee', () => {
        const employee = new Employee('Allyson', 18, 'allyson_vitug@yahoo.com');

        expect(employee.getRole()).toEqual('Employee');
    });
});