"use client"

import {useEffect, useState} from "react"
import KanbanColumn from "./kanban-column"
import {KanbanCard} from "./kanban-card"
import data from "../kanban-data.json"
import {toast} from "sonner"
import {Card, KanbanData} from "@/features/kanban/types/kanban";


export default function KanbanBoard() {
    const [kanbanData, setKanbanData] = useState<KanbanData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simular fetch do backend
        const fetchData = async () => {
            try {
                setKanbanData(data)
            } catch {
                toast("error")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const handleAddCard = (columnId: string) => {
        if (!kanbanData) return

        const newCard: Card = {
            id: `card-${Math.random().toString(36).substr(2, 9)}`,
            title: "Nova Tarefa",
            category: "Category",
            description: "Description Top",
            assignedUsers: kanbanData.users.slice(0, 4),
            priority: "medium",
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
            tags: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }

        setKanbanData({
            ...kanbanData,
            columns: kanbanData.columns.map((column) => {
                if (column.id === columnId) {
                    return {
                        ...column,
                        cards: [...column.cards, newCard],
                    }
                }
                return column
            }),
        })
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-lg text-gray-600">Carregando...</div>
            </div>
        )
    }

    if (!kanbanData) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-lg text-red-600">Erro ao carregar dados</div>
            </div>
        )
    }

    return (
        <div className="flex flex-row gap-4 h-full w-full p-4 justify-center items-start bg-red-600">
            {kanbanData.columns
                .sort((a, b) => a.order - b.order)
                .map((column) => (
                    <KanbanColumn key={column.id} title={column.title} onAddCard={() => handleAddCard(column.id)}>
                        {column.cards.map((card) => (
                            <KanbanCard
                                key={card.id}
                                title={card.title}
                                category={card.category}
                                description={card.description}
                                image={card.image}
                                users={card.assignedUsers}
                                priority={card.priority}
                                dueDate={card.dueDate}
                                tags={card.tags}
                            />
                        ))}
                    </KanbanColumn>
                ))}
        </div>
    )
}
