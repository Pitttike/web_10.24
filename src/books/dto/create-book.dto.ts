import { IsEmpty, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  author: string;
  @IsString()
  @IsNotEmpty()
  isbn: string;
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  publishYear: number;
}
