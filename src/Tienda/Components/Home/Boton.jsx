import { jsonEval } from "@firebase/util";

const array = []

export const Boton = (prod) =>{

    const prodr = () =>{

        let coun=0;
        console.log(prod)
        array.push(prod)
      let idProduc = array.map((pro)=>{
            if(pro.id === prod.id){
                coun++
                console.log(coun)
            }else{
                return
            }
        })

    /*  localStorage.setItem("carrito", JSON.stringify(array)) */
    }
    return(
        <button onClick={prodr}>hola</button>
    )
}


