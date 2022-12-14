describe("Testing Mathemetical Functions",()=>{
    beforeEach(()=>{
        console.log("Test case execution started")
    })

    beforeAll(()=>{
        console.log("Unit Testing Started")
    })

    afterEach(()=>{
        console.log("Finished test case execution")
    })
   

    afterAll(()=>{
        console.log("Unit Testing Got Over")
    })
    it("square function should return square of a number passed to it",()=>{
        //Arrage
        let number  = 10;
        //Act
        let numSquare = square(number);
        //Assert
        expect(numSquare).toBe(100);
    })

    it("cube function should return cube of a number passed to it",()=>{
        //Arrage
        let number = 10;
        //Act
        let numCube = cube(number);
        //Assert
        expect(numCube).toBe(1000);
    })
})