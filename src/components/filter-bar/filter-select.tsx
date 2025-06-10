import {useMemo, useState} from "react"
import {Check, ChevronsUpDown} from "lucide-react"
import {cn} from "@/lib/utils"
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem,} from "@/components/ui/command"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {Button} from "@/components/ui/button"

export interface SelectOption {
  value: string
  label: string
}

interface FilterSelectProps {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  maxVisibleOptions?: number
  allowClear?: boolean
}

export function FilterSelect({
                               options,
                               value,
                               onChange,
                               placeholder = "Selecionar...",
                               className,
                               maxVisibleOptions = 5,
                               allowClear = true,
                             }: FilterSelectProps) {
  const [search, setSearch] = useState("")

  const filteredOptions = useMemo(() => {
    const opts = allowClear ? [{ value: "", label: "Todos" }, ...options] : options
    if (!search) return opts
    return opts.filter(option => option.label.toLowerCase().includes(search.toLowerCase()))
  }, [options, search, allowClear])

  const displayedOptions = filteredOptions.slice(0, maxVisibleOptions)

  const selectedLabel = options.find(o => o.value === value)?.label || placeholder

  return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
              variant="outline"
              role="combobox"
              className={cn("justify-between", className)}
          >
            {selectedLabel}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-[--radix-popover-trigger-width]">
          <Command shouldFilter={false}>
            <CommandInput
                placeholder="Filtrar..."
                value={search}
                onValueChange={setSearch}
                autoFocus
            />
            <CommandEmpty>Nenhuma opção encontrada</CommandEmpty>
            <CommandGroup className="overflow-auto">
              {displayedOptions.map(option => (
                  <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => {
                        onChange?.(option.value)
                        setSearch("")
                      }}
                  >
                    <Check
                        className={cn(
                            "mr-2 h-4 w-4",
                            value === option.value ? "opacity-100" : "opacity-0"
                        )}
                    />
                    {option.label}
                  </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
  )
}
