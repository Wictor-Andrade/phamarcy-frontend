import api from '@/utils/services/api';
import {
    CreateActiveIngredientStepOneDto,
    UpdateActiveIngredientDto,
    UpdateActiveIngredientStepTwoDto
} from "@/features/active-ingredient/active-ingredient";

const apiPath = 'active-ingredients';

export async function createActiveIngredient(data: CreateActiveIngredientStepOneDto) {
    const response = await api.post(apiPath, data);
    return response.data;
}

export async function createActiveIngredientStepTwo(id: string, data: UpdateActiveIngredientStepTwoDto) {
    const response = await api.put(`${apiPath}/${id}`, data);
    return response.data;
}

export async function getAllActiveIngredients() {
    const response = await api.get(apiPath);
    return response.data;
}

export async function getActiveIngredientById(id: string) {
    const response = await api.get(`${apiPath}/${id}`);
    return response.data;
}

export async function updateActiveIngredient(id: string, data: UpdateActiveIngredientDto) {
    const response = await api.put(`${apiPath}/${id}`, data);
    return response.data;
}

export async function deleteActiveIngredient(id: string) {
    const response = await api.delete(`${apiPath}/${id}`);
    return response.data;
}

const activeIngredientApi = {
    createActiveIngredient,
    getAllActiveIngredients,
    getActiveIngredientById,
    updateActiveIngredient,
    deleteActiveIngredient,
};

export default activeIngredientApi;
