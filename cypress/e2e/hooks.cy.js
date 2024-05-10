describe("visiting webpage using cypress", () => {

    //  Before - It runs once before starting the execution of first tests 'it' block
    //   if you want to execute some steps only once before all the test cases,
    //   you can use the before()
    before(function () {
      cy.log("before All");
      });


    //  After hook -- It runs once after completion of all the test 'it' block
    //  if you want to execute some steps only once after all the test cases have finished their execution, 
    //you can use the after() block
    after(function () {
      cy.log( "after All" );
    });

     //beforeEach --It runs before starting the execution of each of the it blocks
     //if you want to execute some steps before each of the test cases in the TestSuite,
     // you can use the beforeEach() block
    beforeEach(function () {
      cy.log("before each" );
    });

    //afterEach --It runs after finishing the execution of each of the it block
    //if you want to execute some steps after each of the test cases in the TestSuite has finished their execution,
    // you can use the afterEach() 
    afterEach(function () {
      cy.log("after each" );
    });


    it("should visit the page", () => {
      cy.log("1st IT block");
      //cy.visit("https://www.google.com/");
    });

    it("dummy block", () => {
      cy.log("2nd IT block");
    });

    it("3rd IT block", () => {
        cy.log("3rd IT block");
      });
  });
 