import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Product {

    _id?: string

    @Prop(
        {unique: true, required:true}
    )
    nombre:string;

    @Prop(
        {required:true}
    )
    categoria: string;

    @Prop(
        {required:true}
    )
    precio?: number;


    @Prop(
        {type:[String]}
    )
    images: string[]

}

export const ProductSchema = SchemaFactory.createForClass(Product)