import { ApiProperty } from "@nestjs/swagger";


export class LoginDto {
    @ApiProperty({ required: true })
    email: String

    @ApiProperty({ required: true })
    password: String

}