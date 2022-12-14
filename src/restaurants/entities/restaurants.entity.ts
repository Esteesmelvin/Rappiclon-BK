import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id:number;

    @Field(type => String)
    @Column()
    name:string;
    
    @Field(type => Boolean, {nullable:true})
    @Column()
    isVegan?: boolean

    @Field(type => String)
    @Column()
    address: string;

    @Field(type => String)
    @Column()
    ownerName: string;

    @Field(type => String)
    @Column()
    categoryName: string;
}