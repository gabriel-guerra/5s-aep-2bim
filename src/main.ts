import app from "./app";

export default function main(){
    
    const port = 3000;
    
    app.listen(port, () => {
        console.log(`Application listening on port ${port}`)
    })

}

main();