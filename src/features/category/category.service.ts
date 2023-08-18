import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deletable } from 'src/common/abstracts/delectable.abstract';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService extends Deletable<Category> {
  constructor(@InjectModel(Category.name) private categories: Model<Category>) {
    super();
  }

  create(dto: CreateCategoryDto) {
    return this.categories.create({ ...dto });
  }

  findAll() {
    return this.categories.find();
  }

  public findOne(_id: string) {
    return this.categories.findById(_id).orFail().exec();
  }
}
