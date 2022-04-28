import instance from "../Config/axios";

//MLA1271: Categoria de Perfumes en ML.
export async function getAllPerfumes(){
    return instance.get("/sites/MLA/search?category=MLA1271");
}

export async function getProductoById(id){
    return instance.get("/items/"+id);
}