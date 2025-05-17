// Dom manipulation functions

//sync unit in both the boxes
let unitDropDownBox = document.getElementById('unitDrop');
let unitAnsBox = document.getElementById('areaUnit');

unitDropDownBox.addEventListener('change', (e) => {
   unitAnsBox.innerHTML = `${e.target.value}`;
});


//making the drop downs functional by appending that number of input fields in that section
let numberDropDownLists = document.getElementsByClassName('number-drop');

Array.from(numberDropDownLists).forEach(element => {
    element.addEventListener('change',(e)=>{

        let listId = e.target.id;

        if(listId == 'wallsNum'){
            
                let wallInputRowContainer = document.getElementById('wallInputRow');
                let number = e.target.value;
                let wh1Value = document.getElementById('wh1').value;
                let ww1Value = document.getElementById('ww1').value;
                
                wallInputRowContainer.innerHTML = '';
                
                let htmlString = '';
            
                for (let i = 0; i < number; i++) {
                    let displayStyle = i == 0 ? 'flex' : 'none';
                    let onInputAttr = i == 0 ? `oninput="handleDisable('wall')"` : '';
                    htmlString += `
                        <div class="input-row wall-rows walls-dimensions" id="wall-${i+1}"style="display: ${displayStyle};"><div>${i+1}</div>
                            <input type="number" min="0" id="wh${i + 1}" value="${wh1Value}" class="input-box wall-height" placeholder="Height" ${onInputAttr} >
                            <input type="number" min="0" id="ww${i + 1}" value="${ww1Value}" class="input-box wall-width" placeholder="Width"  ${onInputAttr}>
                        </div>
                    `;
                }
            
                wallInputRowContainer.innerHTML = htmlString;
        }
            
        if(listId == 'gatesNum'){

                let gatesInputRowContainer = document.getElementById('gatesInputRow');
                let number = e.target.value;
                let gh1Value = document.getElementById('gh1').value;
                let gw1Value = document.getElementById('gw1').value;

                gatesInputRowContainer.innerHTML = '';
            
                let htmlString = '';
            
                for (let i = 0; i < number; i++) {
                    let displayStyle = i === 0 ? 'flex' : 'none';
                    let onInputAttr = i === 0 ? `oninput="handleDisable('gate')"` : '';

                    htmlString += `
                        <div class="input-row gate-rows gates-dimensions" id="gate-${i+1}"style="display: ${displayStyle};"><div>${i+1}</div>
                            <input type="number" min="0" id="gh${i + 1}" value="${gh1Value}" class="input-box gate-height" placeholder="Height" ${onInputAttr}>
                            <input type="number" min="0" id="gw${i + 1}" value="${gw1Value}" class="input-box gate-width" placeholder="Width" ${onInputAttr}>
                        </div>
                    `;
                }
            
                gatesInputRowContainer.innerHTML = htmlString;
        }
        
        if (listId == 'windowsNum') {
            let windowInputRowContainer = document.getElementById('windowInputRow');
            let number = e.target.value;
            let winh1Value = document.getElementById('winh1').value;
            let winw1Value = document.getElementById('winw1').value;
            windowInputRowContainer.innerHTML = '';
        
            let htmlString = '';
        
            for (let i = 0; i < number; i++) {
                let displayStyle = i === 0 ? 'flex' : 'none';
                let onInputAttr = i === 0 ? `oninput="handleDisable('win')"` : '';

                htmlString += `
                    <div class="input-row win-rows windows-dimensions" id="window-${i + 1}" style="display: ${displayStyle};"> <div>${i + 1}</div>
                        <input type="number" min="0" id="winh${i + 1}" value="${winh1Value}" class="input-box win-height" placeholder="Height" ${onInputAttr} >
                        <input type="number" min="0" id="winw${i + 1}" value="${winw1Value}" class="input-box win-width" placeholder="Width" ${onInputAttr} >
                    </div>
                `;
            }
        
            windowInputRowContainer.innerHTML = htmlString;
        }
        
        
    });

});

// view and close button handling for each metrics
let expandButtons = document.getElementsByClassName('expand');
Array.from(expandButtons).forEach(element =>{
 element.addEventListener('click',(e)=>{
    let expandId = e.target.id;

    if(expandId == 'wallDrop'){
        let wallDropButton = document.getElementById('wallDrop');

        if(wallDropButton.innerText == 'View All' ){

           wallDropButton.innerText = 'Close All';
 
           let wallRows = document.getElementsByClassName('wall-rows');

           Array.from(wallRows).forEach((e,i)=>{
            if(i==0);
            else{
               e.style.display = 'flex';  
            }

           })
        }

        else if(wallDropButton.innerText == 'Close All'){

            wallDropButton.innerText = 'View All';

            let wallRows = document.getElementsByClassName('wall-rows');

           Array.from(wallRows).forEach((e,i)=>{
            if(i==0);
            else{
               e.style.display = 'none';  
            }

           })
           
        }
        

    }
    if(expandId == 'gateDrop'){
        let gateDropButton = document.getElementById('gateDrop');

        if(gateDropButton.innerText == 'View All' ){
           gateDropButton.innerText = 'Close All';

           let gateRows = document.getElementsByClassName('gate-rows');

           Array.from(gateRows).forEach((e,i)=>{
            if(i==0);
            else{
               e.style.display = 'flex';  
            }

           })
          
        }

        else if(gateDropButton.innerText == 'Close All'){
            gateDropButton.innerText = 'View All';

            let gateRows = document.getElementsByClassName('gate-rows');

           Array.from(gateRows).forEach((e,i)=>{
            if(i==0);
            else{
               e.style.display = 'none';  
            }

           })
           
        
        }
        
    }
    if(expandId == 'winDrop'){

        let winDropButton = document.getElementById('winDrop');

        if(winDropButton.innerText == 'View All' ){
           winDropButton.innerText = 'Close All';

           let winRows = document.getElementsByClassName('win-rows');

           Array.from(winRows).forEach((e,i)=>{
            if(i==0);
            else{
               e.style.display = 'flex';  
            }

           })
        }

        else if(winDropButton.innerText == 'Close All'){
            winDropButton.innerText = 'View All';

            let winRows = document.getElementsByClassName('win-rows');

           Array.from(winRows).forEach((e,i)=>{
            if(i==0);
            else{
               e.style.display = 'none';  
            }

           })
        }
        
    }
 })
});

//handling disabling and enabling of drop down

function handleDisable(type){
   if(type == 'wall'){

    let wh1 = document.getElementById('wh1');
    let ww1 = document.getElementById('ww1');

    if(wh1.value && ww1.value){
        document.getElementById('wallsNum').disabled = false;
    }
    else{
        document.getElementById('wallsNum').disabled = true;
    }

   }
   if(type == 'gate'){

    let gh1 = document.getElementById('gh1');
    let gw1 = document.getElementById('gw1');

    if(gh1.value && gw1.value){
        document.getElementById('gatesNum').disabled = false;
    }
    else{
        document.getElementById('gatesNum').disabled = true;
    }
   }
    if(type == 'win'){
    let winh1 = document.getElementById('winh1');
    let winw1 = document.getElementById('winw1');

    if(winh1.value && winw1.value){
        document.getElementById('windowsNum').disabled = false;
    }
    else{
        document.getElementById('windowsNum').disabled = true;
    }
 
}
}

// calculate button data collection function
let flag = 0;
function collectData(){

    function checkInvalidData(data){
          if(data == '' || data < 0 || data == NaN) return true;
          else false;
    }

        //data checking
        let plotDimensionsList = [document.getElementById('ph').value,document.getElementById('pw').value];
        let plotDimensions = []; 
        if(checkInvalidData(plotDimensionsList[0]) || checkInvalidData(plotDimensionsList[1])){
        document.getElementById('errorBoxPlot').innerText = 'Data for plot has been asigned 0x0!';
        plotDimensions[0] = 0;
        plotDimensions[1] = 0;
        }
        else{
        document.getElementById('errorBoxPlot').innerText = '';
        plotDimensions[0] = plotDimensionsList[0];
        plotDimensions[1] = plotDimensionsList[1];
        }

        //data validation and collection for walls
        let wallsDimensionList = document.getElementsByClassName('walls-dimensions');
    
        let wallsDimensions = [];
        Array.from(wallsDimensionList).forEach((e,i)=>{

            let inputs = e.getElementsByTagName('input');
    
            if(checkInvalidData(inputs[0].value) || checkInvalidData(inputs[1].value)){
              document.getElementById('errorBoxWalls').innerText = `Please fill valid data for ${e.id} `;
              flag = 1;
              return;
            }
            else if(flag == 0){
                document.getElementById('errorBoxWalls').innerText = '';
                wallsDimensions[i] = {
                    id: e.id,
                    dimensions: [inputs[0].value, inputs[1].value]
                }
            }
   
        })

        if(flag == 1){
    flag=0;
    return;
        }
   

       flag = 0;

       //data validation and collection for gates
       let gateDimensionList = document.getElementsByClassName('gates-dimensions');

       let gateDimensions = [];

       Array.from(gateDimensionList).forEach((e,i)=>{

        let inputs = e.getElementsByTagName('input');

        if(checkInvalidData(inputs[0].value) || checkInvalidData(inputs[1].value)){
            document.getElementById('errorBoxGates').innerText = `Please fill valid data for ${e.id} `
            flag = 1;
            return;
          }
          else if(flag == 0){
              document.getElementById('errorBoxGates').innerText = '';
              gateDimensions[i] = {
                id: e.id,
                dimensions: [inputs[0].value, inputs[1].value]
            }
          }
          

       });

       if(flag == 1){
        flag=0;
        return;
       }

       flag=0;

       // data validation and collection for windows
       let windowsDimensionList = document.getElementsByClassName('windows-dimensions');

       let windowsDimensions = [];

       Array.from(windowsDimensionList).forEach((e,i)=>{

        let inputs = e.getElementsByTagName('input');

        if(checkInvalidData(inputs[0].value) || checkInvalidData(inputs[1].value)){
            document.getElementById('errorBoxWindows').innerText = `Please fill valid data for ${e.id} `;
            flag = 1;
            return;
          }
          else if(flag == 0){
              document.getElementById('errorBoxWindows').innerText = '';
              windowsDimensions[i] = {
                id: e.id,
                dimensions: [inputs[0].value, inputs[1].value]
            }
          }
          

       });

       if(flag == 1){
        flag=0;
        return;
       }

       let data = {
        plotData: plotDimensions,
        wallsData: wallsDimensions,
        gatesData: gateDimensions,
        windowsData: windowsDimensions
      } 

    calculate(data);

}

//calculation functions


function calculate(data){

    function calculateArea(height,width){
        return height*width;
    }

    let areaOfPlot = calculateArea(data.plotData[0],data.plotData[1]);
    let plot = {
        areaOfPlot: areaOfPlot
    }

    let areaOfWalls = [];
    let sumOfAreaOfWalls = 0;
    data.wallsData.forEach((e,i)=>{
        areaOfWalls[i] = calculateArea(e.dimensions[0],e.dimensions[1]);
        sumOfAreaOfWalls = sumOfAreaOfWalls + areaOfWalls[i];
    });
    let walls = {
        areaOfWalls: areaOfWalls,
        sumOfAreaOfWalls: sumOfAreaOfWalls,
    }

    let areaOfGates = []
    let sumOfAreaOfGates = 0;
    data.gatesData.forEach((e,i)=>{
        areaOfGates[i] = calculateArea(e.dimensions[0],e.dimensions[1]);
        sumOfAreaOfGates = sumOfAreaOfGates + areaOfGates[i];
    });
    let gates = {
        areaOfGates: areaOfGates,
        sumOfAreaOfGates: sumOfAreaOfGates,
    }

    let areaOfWindows = []
    let sumOfAreaOfWindows = 0;
    data.windowsData.forEach((e,i)=>{
        areaOfWindows[i] = calculateArea(e.dimensions[0],e.dimensions[1]);
        sumOfAreaOfWindows = sumOfAreaOfWindows + areaOfWindows[i];
    });
    let windows = {
        areaOfWindows: areaOfWindows,
        sumOfAreaOfWindows: sumOfAreaOfWindows,
    }

    let resultantArea = sumOfAreaOfWalls - (sumOfAreaOfGates + sumOfAreaOfWindows);

    let finalAreas = {
       plot: plot,
       walls: walls,
       gates: gates,
       windows: windows,
       resultantArea: resultantArea
    }

    paintSolutionWindow(data,finalAreas)

}
function paintSolutionWindow(data, finalAreas) {
    
    document.getElementById('final-ans-container').innerHTML = finalAreas.resultantArea + ' ' +document.getElementById('unitDrop').value ;
    const snippetArea = document.getElementById('snippet-container');
  
    const { plotData, wallsData, gatesData, windowsData } = data;
    const { plot, walls, gates, windows, resultantArea } = finalAreas;
  
    let explanation = `# Area Calculation Report\n\n`;
  
    // Plot
    const plotLength = plotData[0];
    const plotWidth = plotData[1];
    explanation += `Dimensions of Plot:\n`;
    explanation += `Plot = ${plotLength} units × ${plotWidth} units\n`;
    explanation += `------------------------\n`;
    explanation += `Area of Plot = ${plotLength} × ${plotWidth} = ${plot.areaOfPlot} square units\n`;
    explanation += `------------------------\n\n`;
  
    // Walls
    explanation += `Dimensions of Walls:\n`;
    wallsData.forEach(w => {
      const [h, w_] = w.dimensions;
      const area = h * w_;
      explanation += `${w.id} : ${h} × ${w_}, Area = ${area} square units\n`;
    });
    explanation += `------------------------\n`;
    explanation += `Total Area of Walls = ${walls.sumOfAreaOfWalls} square units\n`;
    explanation += `------------------------\n\n`;
  
    // Gates
    explanation += `Dimensions of Gates:\n`;
    gatesData.forEach(g => {
      const [h, w_] = g.dimensions;
      const area = h * w_;
      explanation += `${g.id} : ${h} × ${w_}, Area = ${area} square units\n`;
    });
    explanation += `------------------------\n`;
    explanation += `Total Area of Gates = ${gates.sumOfAreaOfGates} square units\n`;
    explanation += `------------------------\n\n`;
  
    // Windows
    explanation += `Dimensions of Windows:\n`;
    windowsData.forEach(w => {
      const [h, w_] = w.dimensions;
      const area = h * w_;
      explanation += `${w.id} : ${h} × ${w_}, Area = ${area} square units\n`;
    });
    explanation += `------------------------\n`;
    explanation += `Total Area of Windows = ${windows.sumOfAreaOfWindows} square units\n`;
    explanation += `------------------------\n\n`;
  
    // Final calculation
    const totalDeductions = gates.sumOfAreaOfGates + windows.sumOfAreaOfWindows;
    explanation += `Usable Wall Area = Total Wall Area - (Total Gates Area + Total Windows Area)\n`;
    explanation += `= ${walls.sumOfAreaOfWalls} - (${gates.sumOfAreaOfGates} + ${windows.sumOfAreaOfWindows})\n`;
    explanation += `= ${walls.sumOfAreaOfWalls} - ${totalDeductions} = ${resultantArea} square units\n\n`;
  
    explanation += `--------------------------------------\n`;
    explanation += `Final Wall Area = ${resultantArea} square units\n`;
    explanation += `--------------------------------------`;
  
    snippetArea.innerHTML = `<pre>${explanation}</pre>`;
  }
  
document.getElementById('copy1').addEventListener('click',(e)=>{
    e.target.innerText = 'Copied!';

    const snippetAreaText = document.getElementById('snippet-container').innerText;

    navigator.clipboard.writeText(snippetAreaText);

    setTimeout(()=>{
      e.target.innerText = 'Copy';
    },1000)
});  


