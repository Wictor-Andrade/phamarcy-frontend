import api from '@/utils/services/api';
import {CreateMedicationDto, UpdateMedicationDto} from "@/features/medication/medication";

const apiPath = 'medications';

export async function createMedication(data: CreateMedicationDto) {
    const response = await api.post(apiPath, data);
    return response.data;
}

export async function getAllMedications() {
    const response = await api.get(apiPath);
    return response.data;
}

export async function getMedicationById(id: string) {
    const response = await api.get(`${apiPath}/${id}`);
    return response.data;
}

export async function updateMedication(id: string, data: UpdateMedicationDto) {
    const response = await api.put(`${apiPath}/${id}`, data);
    return response.data;
}

export async function deleteMedication(id: string) {
    const response = await api.delete(`${apiPath}/${id}`);
    return response.data;
}

const medicationApi = {
    createMedication,
    getAllMedications,
    getMedicationById,
    updateMedication,
    deleteMedication,
};

export default medicationApi;
