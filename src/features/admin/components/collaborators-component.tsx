"use client"

import {useEffect, useRef, useState} from "react"
import {MoreHorizontal} from "lucide-react"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"
import {Checkbox} from "@/components/ui/checkbox"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import CollaboratorsFilter from "@/features/admin/components/ui/collaborators-filter";

const colaboradores = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    nome: `Colaborador ${i + 1}`,
    foto: "/placeholder-image.svg?height=32&width=32",
    cargo: "Analista de Sistemas",
    departamento: "TI",
    email: `colaborador${i + 1}@empresa.com`,
    status: i % 2 === 0 ? "Ativo" : "Inativo",
}))

export default function CollaboratorsComponent() {
    const [selectedRows, setSelectedRows] = useState<number[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 5

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedRows(colaboradores.map((item) => item.id))
        } else {
            setSelectedRows([])
        }
    }

    const handleSelectRow = (id: number, checked: boolean) => {
        if (checked) {
            setSelectedRows([...selectedRows, id])
        } else {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id))
        }
    }

    const checkboxRef = useRef<HTMLInputElement>(null)
    const isAllSelected = selectedRows.length === colaboradores.length
    const isIndeterminate = selectedRows.length > 0 && selectedRows.length < colaboradores.length

    useEffect(() => {
        if (checkboxRef.current) {
            checkboxRef.current.indeterminate = isIndeterminate
        }
    }, [isIndeterminate])

    return (
        <div className="@container/main flex flex-1 flex-col gap-4 p-8">
            <CollaboratorsFilter />
            <div className="gap-8">
                <div className="border rounded-lg">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-12">
                                    <Checkbox
                                        checked={isAllSelected}
                                        onCheckedChange={handleSelectAll}
                                    />
                                </TableHead>
                                <TableHead className="font-medium text-primary">Nome</TableHead>
                                <TableHead className="font-medium text-primary">Cargo</TableHead>
                                <TableHead className="font-medium text-primary">Departamento</TableHead>
                                <TableHead className="font-medium text-primary">Email</TableHead>
                                <TableHead className="font-medium text-primary">Status</TableHead>
                                <TableHead className="w-12" />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {colaboradores.map((item) => (
                                <TableRow key={item.id} className="hover:bg-muted">
                                    <TableCell>
                                        <Checkbox
                                            checked={selectedRows.includes(item.id)}
                                            onCheckedChange={(checked) => handleSelectRow(item.id, checked as boolean)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src={item.foto} alt={item.nome} />
                                                <AvatarFallback className="text-xs">
                                                    {item.nome.slice(0, 2).toUpperCase()}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span className="text-primary font-medium">{item.nome}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-primary">{item.cargo}</TableCell>
                                    <TableCell className="text-primary">{item.departamento}</TableCell>
                                    <TableCell className="text-primary">{item.email}</TableCell>
                                    <TableCell className="text-primary">{item.status}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Editar</DropdownMenuItem>
                                                <DropdownMenuItem>Visualizar</DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive">Excluir</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="flex items-center justify-center gap-2 p-8">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                    >
                        Anterior
                    </Button>

                    {[1, 2, 3, 4, 5].map((page) => (
                        <Button
                            key={page}
                            variant={currentPage === page ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </Button>
                    ))}

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                    >
                        Próxima
                    </Button>
                </div>
            </div>
        </div>
    )
}
