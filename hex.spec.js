describe("hex.js", ()=>{

    describe("getRandomhexanumber()", ()=>{
        it('should return a number', function(){
            
            // expect return a number;
            expect(getRandomhexanumber()).toMatch(/-?\d+/);
            expect(typeof getRandomhexanumber()).toMatch('number');
            
        });
        it('should return a number between [0,15]', function(){
            
            // expect return a number between [0 & 15];

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
        it('should return an hexadecimal color (e.g. "#F18901")', ()=>{
            expect(getRandomHexadecimalColor()).toMatch(/#[0-9a-fA-F]{6}/);
        });
        it('should not return the same value twice', function(){
            let previousColor;
            for(let i=0; i<10; i++){
                let color = getRandomHexadecimalColor();
                if(i>0){
                    expect(color).not.toEqual(previousColor);
                }
                previousColor = color;
            }
        });
        it('should not return a null or an undefined value', function(){
            let color = getRandomHexadecimalColor();
            expect(color).toBeDefined();
            expect(color).toBeTruthy();
            expect(color).not.toBe(null);
            expect(color).not.toBe(undefined);
        });

        it('should generate colors randomly', () => {
            let colorCounts = {};
            for (let i = 0; i < 10000; i++) {
                let color = getRandomHexadecimalColor();
                if (!colorCounts[color]) {
                    colorCounts[color] = 0;
                }
                colorCounts[color]++;
            }
            // Compare the standard deviation of the color counts to the average count
            let colorCountValues = Object.values(colorCounts);
            let averageCount = colorCountValues.reduce((a, b) => a + b) / colorCountValues.length;
            let standardDeviation = Math.sqrt(colorCountValues.map(c => (c - averageCount) ** 2).reduce((a, b) => a + b) / colorCountValues.length);
            expect(standardDeviation / averageCount).toBeLessThan(0.1);
        });
        
    });
})