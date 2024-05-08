const {
    _getNumbers,
    _getColors,
    _getAnimals
    }=require('../modules/game.modules.js')


const getNumbers=async(req,res)=>{ //get numbers info
    try{
        const data=await _getNumbers()
        res.json(data);
    }catch(e){
        console.log(e);
        res.status(404).json({message:'Numbers not found'})
    }
}

const getColors=async(req,res)=>{ //get colors info
    try{
        const data=await _getColors()
        res.json(data);
    }catch(e){
        console.log(e);
        res.status(404).json({message:'Colors not found'})
    }
}


const getAnimals=async(req,res)=>{ //get animals info
    try{
        const data=await _getAnimals()
        res.json(data);
    }catch(e){
        console.log(e);
        res.status(404).json({message:'Animals not found'})
    }
}

module.exports={
    getNumbers,
    getColors,
    getAnimals,
}