const getObject = (csv)=>{
 
    return new Promise((resolve, reject)=>{
        
        try {
        
            var lines=csv.split('\n');
  
            console.log(lines.length);
    
            var result = [];
    
    
            for(var i=1; i < lines.length; i++){
            
                let currentline=lines[i].split(";");

                currentline.unshift("0");
                console.log(currentline.length +" - "+ currentline);
            

                if(currentline.length > 1)
                    result.push(currentline)
            }

            resolve(result);

        } catch (error) {
            reject(error)
        }
       
    
    })


    
  };

  export default getObject;