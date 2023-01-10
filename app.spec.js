describe("app.js", ()=>{

    describe("getRandomNumber()", ()=>{
        
        it('should return a number between [1,3]', function(){
            
            // expect return a number between [1 & 3];
            expect(getRandomNumber()<=3).toBeTruthy();
            expect(getRandomNumber()>=1).toBeTruthy();
            expect(getRandomNumber()).toBeGreaterThanOrEqual(1);
            expect(getRandomNumber()).toBeLessThanOrEqual(3);
        });
    });
})