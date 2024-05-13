
class DataValidation{

    date(date: string){
        
        const d = new Date(date);

        try{
            return d.toISOString()
        }catch(error){
            throw new Error(`Invalid date: ${error}`)
        }
    }

}

export default new DataValidation;