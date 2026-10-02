import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({ required: true, example: 'enriquepomares43@gmail.com' })
    email: string;


    @ApiProperty({ required: true, example: 'Enrique Pomars' })
    name: string;

    username?: string;

    @ApiProperty({ required: true, example: 'admi123' })
    password: string;

    @ApiProperty({ required: true, example: 1, description: "ID del tenant" })
    tenantId: number;
}

