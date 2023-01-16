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
        xit("should have a random distribution of hexadecimal numbers", function () {
            const hex = "0123456789abcdef";
            const sampleSize = 10000;
            const expectedFrequency = sampleSize / hex.length;
            const chiSquaredThreshold = 15.5;
            let chiSquared = 0;
        
            // Generate sample of random numbers
            const sample = Array.from({ length: sampleSize }, () => getRandomhexanumber());
        
            // Count occurrence frequency of the different numbers
            const frequencies = Array.from({ length: hex.length }, () => 0);
            sample.forEach((num) => {
              frequencies[hex.indexOf(num)]++;
            });
        
            // Calculate the sum of squares of the deviations compared with expected frequency 
            frequencies.forEach((frequency) => {
              chiSquared += (frequency - expectedFrequency) ** 2;
            });
        
            // Divide the sum by the expected frequency
            chiSquared /= expectedFrequency;
        
            // Verify that value of chi-squared is below the limit threshold
            expect(chiSquared).toBeLessThan(chiSquaredThreshold);
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