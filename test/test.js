angular.module('todoApp')

//1.
describe('Todo CRUD service test', function () {
    var crudAPIService, httpBackend;

    beforeEach(function () {
        //3. load the module.
        module('todoApp');
        // 4. get your service, also get $httpBackend
        // $httpBackend will be a mock.
        inject(function (_$httpBackend_, _crudAPIService_) {
            crudAPIService = _crudAPIService_;
            httpBackend = _$httpBackend_;
        });

    });

    // 5. make sure no expectations were missed in your tests.
    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });


    it('Should have success set to true after GetTodos API method calling', function () {

        var returnData = {};
        //7. expectGET to make sure this is called once.
        httpBackend.expectGET('/todos').respond(200);

        crudAPIService.getTodos();

        httpBackend.flush();
    });


    it('Should have success set to true after AddTodo API method calling', function () {

        var returnData = { "name": "new task", "complete": "0" }; 
        //7. expectGET to make sure this is called once.
        httpBackend.expectPOST('/addTodo', returnData).respond(200);

        crudAPIService.addTodo("new task");

        httpBackend.flush();
    });
 
});