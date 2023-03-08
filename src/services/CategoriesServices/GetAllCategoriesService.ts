import { getRepository } from 'typeorm';

import { Category } from '../../modules/entities/Category';

export class GetAllCategoriesService {
    async execute(): Promise<Category[]> {
        const repo = getRepository(Category);

        const categories = await repo.find();

        return categories;
    }
}