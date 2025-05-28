import {User} from "@/features/users/types/users";


export interface Card {
    id: string
    title: string
    category: string
    description: string
    image?: string
    assignedUsers: User[]
    priority: string
    dueDate: string
    tags: string[]
    createdAt: string
    updatedAt: string
    completedAt?: string
}


export interface Column {
    id: string
    title: string
    order: number
    cards: Card[]
}

export interface KanbanCategory {
    id: string
    name: string
    color: string
}

export interface KanbanPriority {
    id: string
    name: string
    color: string
}

export interface KanbanData {
    columns: Column[]
    users: User[]
    categories: KanbanCategory[]
    priorities: KanbanPriority[]
}