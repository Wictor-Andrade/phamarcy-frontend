"use client"

import CatalogFilter from "@/features/catalog/components/ui/catalog-filter"
import {useEffect, useRef, useState} from "react"
import {MoreHorizontal} from "lucide-react"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"
import {Checkbox} from "@/components/ui/checkbox"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import medicationApi from "@/features/medication/service/api-medication";
import {Medication} from "@/features/medication/medication";

export default function CatalogComponent() {
    const [selectedRows, setSelectedRows] = useState<string[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState<Medication[]>([])
    const totalPages = 11

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedRows(data.map((item) => item.id))
        } else {
            setSelectedRows([])
        }
    }

    const handleSelectRow = (id: string, checked: boolean) => {
        if (checked) {
            setSelectedRows([...selectedRows, id])
        } else {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id))
        }
    }

    const checkboxRef = useRef<HTMLInputElement>(null)
    const isAllSelected = selectedRows.length === data.length && data.length > 0
    const isIndeterminate = selectedRows.length > 0 && selectedRows.length < data.length

    useEffect(() => {
        if (checkboxRef.current) {
            checkboxRef.current.indeterminate = isIndeterminate
        }
    }, [isIndeterminate])

    useEffect(() => {
        async function fetchMedications() {
            try {
                const meds = await medicationApi.getAllMedications()
                setData(meds)
                setSelectedRows([])
            } catch (error) {
                console.error("Erro ao buscar medicamentos", error)
            }
        }
        fetchMedications()
    }, [currentPage])

    return (
        <div className="@container/main flex flex-1 flex-col gap-4 p-8">
            <CatalogFilter />
            <div className="gap-8">
                <div className="border rounded-lg">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-12">
                                    <Checkbox checked={isAllSelected} onCheckedChange={handleSelectAll} />
                                </TableHead>
                                <TableHead className="font-medium text-primary">Nome do Medicamento</TableHead>
                                <TableHead className="font-medium text-primary">Princípio Ativo</TableHead>
                                <TableHead className="font-medium text-primary">Dosagem</TableHead>
                                <TableHead className="font-medium text-primary">Origem</TableHead>
                                <TableHead className="font-medium text-primary">Forma Farmacêutica</TableHead>
                                <TableHead className="w-12"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((item) => (
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
                                                <AvatarImage src={item.imageUrl ?? undefined} alt={item.name} />
                                                <AvatarFallback className="text-xs">{item.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                                            </Avatar>
                                            <span className="text-primary font-medium">{item.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-primary">{item.ActiveIngredient.name}</TableCell>
                                    <TableCell className="text-primary">
                                        {item.dosageAmount} {item.dosageUnit}
                                    </TableCell>
                                    <TableCell className="text-primary">{item.origin}</TableCell>
                                    <TableCell className="text-primary">{item.dosageForm}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>View</DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
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
                        Previous
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

                    <span className="text-muted-foreground mx-2">...</span>

                    <Button variant="ghost" size="sm" onClick={() => setCurrentPage(totalPages)}>
                        {totalPages}
                    </Button>

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
