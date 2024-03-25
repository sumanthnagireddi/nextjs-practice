export default function Docs( { params }: {
    params : {
        slug:string[]
    }
}){
    if(params.slug?.length === 2){
        return   <h1 className="font-bold text-2xl">Docs Home page for  {params.slug[0]} and concept {params.slug[1]}</h1>
        
    }else if( params.slug?.length === 1){
        return   <h1 className="font-bold text-2xl">Docs Home page for features {params.slug[0]}</h1>

    }
    return <h1>Docs Home page</h1>
    
}