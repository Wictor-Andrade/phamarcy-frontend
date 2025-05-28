import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {CalendarIcon, FlagIcon, LinkIcon, MoreHorizontalIcon, PlusIcon} from "lucide-react"
import Image from "next/image";
import {User} from "@/features/users/types/users";


export interface KanbanCardProps {
    title: string
    category: string
    description: string
    image?: string
    users: User[]
    priority: string
    dueDate: string
    tags: string[]
}

export function KanbanCard({ title, category, description, image, users, priority, dueDate, tags }: KanbanCardProps) {
    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "high":
                return "bg-red-100 text-red-800"
            case "medium":
                return "bg-yellow-100 text-yellow-800"
            case "low":
                return "bg-green-100 text-green-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div className="bg-card border border-blue-200 rounded-lg p-4 shadow-smbg-background shadow-sm overflow-hidden mb-4 space-y-3 max-w-[400px]">
            <div className="">
                <div className="flex justify-between items-start mb-2">
                    <div className="text-blue-600 text-sm font-medium">{category}</div>
                    <Badge className={`text-xs ${getPriorityColor(priority)}`}>{priority}</Badge>
                </div>
                <div className="text-violet-700 font-medium text-lg mb-1">{title}</div>
                <div className="text-gray-600 text-sm mb-3">{description}</div>

                {image && (
                    <div className="mb-3">
                        <Image src="/placeholder-image.svg" alt="Task image" width={330} height={180} className="object-cover rounded-md" />
                    </div>
                )}

                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3 py-2">
                        {tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}

                <div className="flex justify-between items-center mb-2">
                    <div className="flex -space-x-2 gap-2">
                        {users.slice(0, 4).map((user) => (
                            <Avatar key={user.id} className="border-2 border-white max-h-6 max-w-6" title={user.name}>
                                <AvatarImage src={user.avatar} />
                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        ))}
                        {users.length > 4 && (
                            <div className="h-6 w-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600">
                                +{users.length - 4}
                            </div>
                        )}
                    </div>
                    <div className="text-xs text-gray-500">{new Date(dueDate).toLocaleDateString("pt-BR")}</div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600">
                            <PlusIcon className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600">
                            <CalendarIcon className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600">
                            <LinkIcon className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600">
                            <FlagIcon className="h-5 w-5" />
                        </Button>
                    </div>
                    <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600">
                        <MoreHorizontalIcon className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
