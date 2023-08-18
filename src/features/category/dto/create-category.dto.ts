import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ default: 'Pencil' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ default: 'icon' })
  icon: string;

  @ApiProperty({ default: 'red' })
  color: string;
}
