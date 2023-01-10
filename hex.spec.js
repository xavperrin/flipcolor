describe("hex.js", ()=>{

    describe("getRandomhexanumber()", ()=>{
        
        it('should return a number between [0,15]', function(){
            
            // expect return a number between [0 & 3];
            expect(getRandomhexanumber()<=15).toBeTruthy();
            expect(getRandomhexanumber()>=0).toBeTruthy();
            expect(getRandomhexanumber()).toBeGreaterThanOrEqual(0);
            expect(getRandomhexanumber()).toBeLessThanOrEqual(15);
        });
    });

    describe("getRandomHexadecimalColor()", ()=>{
        
        it('should return a string of 7 characters (e.g. "#f18901")', function(){
            
            // expect return a string (e.g. "#f18901") ;
            expect(getRandomHexadecimalColor().length===7).toBeTruthy();
        });
    });
})