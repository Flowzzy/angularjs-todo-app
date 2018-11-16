angular.module('todoApp')

//1.
describe('Todo CRUD service test', function () {
    var crudAPIService, httpBackend;
    var exampleTodos = {name: 'todo1', name: 'todo2'};

    beforeEach(function () {
        //3. load the module.
        module('todoApp');
        // 4. get your service, also get $httpBackend
        // $httpBackend will be a mock.
        inject(function (_$httpBackend_, _crudAPIService_) {
            crudAPIService = _crudAPIService_;
            httpBackend = _$httpBackend_;
        });

        // Return a mock response
        httpBackend.when('GET', '/todos')
            .respond(exampleTodos);

    });

    // 5. make sure no expectations were missed in your tests.
    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


    it('getTodos should have successfully get all todos from backend server', function () {
        httpBackend.expectGET('/todos');
        
        // Given (not really anything for us to use as a given in this case)
        
        // When
        var sut = crudAPIService.getTodos().then((result) => {
            // Then
            expect(result.data).toEqual(exampleTodos);
        });
        
        // clean up and make sure that async methods are closed and tests ends
        httpBackend.flush();
    });

    it('randomCalculate should calculate with valid input value', function () {
        // Given
        var testInput = 5;
		
        // When
        var sut = crudAPIService.randomCalulation(testInput);
		
        // Then
        expect(sut).toEqual(10)
    });

    it('randomCalculate should fail to calculate with invalid input value', function () {
        // Given
        var testInput = null;
		
        // When
        try{
            crudAPIService.randomCalulation(testInput);
        } catch(e) {
            // Then
            expect(e).toEqual('Null input value')
        }
    });
 
});