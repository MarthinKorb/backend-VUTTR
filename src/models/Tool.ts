import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

@Entity('tools')
export default class Tool {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    description: string;

    @Column()
    tags: string;
    
}