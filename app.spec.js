describe("app.js", ()=>{

    describe("getRandomNumber()", ()=>{
        
        it('should return a number between [0,3]', function(){
            
            // expect return a number between [0 & 3];
            expect(getRandomNumber()<=3).toBeTruthy();
            expect(getRandomNumber()>=0).toBeTruthy();
            expect(getRandomNumber()).toBeGreaterThanOrEqual(0);
            expect(getRandomNumber()).toBeLessThanOrEqual(3);
        });
    });
})
