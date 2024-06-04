import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { title } from 'process';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) { }

  async create(createCategoryDto: CreateCategoryDto, id: string) {
    const isExits = await this.categoryRepository.findBy({
      user: { id },
      title: createCategoryDto.title
    })

    if (isExits.length) {
      throw new BadRequestException('This category already exits!')
    }

    const newCategory = {
      title: createCategoryDto.title,
      user: {
        id,
      }
    }
    return await this.categoryRepository.save(newCategory);
  }

  async findAll(id: string) {
    return await this.categoryRepository.find({
      where: {
        user: { id },
      },
      relations: {
        transactions: true
      }
    })
  }

  async findOne(id: string) {
    const isExits = await this.categoryRepository.findOne({
      where: {
        id: id
      },
      relations: {
        user: true
      }
    })
    if (!isExits) {
      throw new NotFoundException("Category not found")
    }
    return isExits
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const isExits = await this.categoryRepository.findOne({
      where: {
        id: id
      }
    })
    if (!isExits) {
      throw new NotFoundException("Category not found")
    }
    const result = await this.categoryRepository.update(id, updateCategoryDto);
    if (result.affected == 1) return {
      message: "Update Success"
    }
  }

  async remove(id: string) {
    const isExits = await this.categoryRepository.findOne({
      where: {
        id: id
      }
    })
    if (!isExits) {
      throw new NotFoundException("Category not found")
    }
    const result = await this.categoryRepository.delete(id);
    if (result.affected == 1) return {
      message: "Delete Success"
    }
  }
}
