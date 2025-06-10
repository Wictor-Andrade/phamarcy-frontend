import type {DialogButton} from "@/components/custom-dialog"

export const dialogPresets = {
    deleteConfirmation: (onConfirm: () => void, onCancel: () => void): DialogButton[] => [
        {
            label: "Cancelar",
            variant: "outline" as const,
            onClick: onCancel,
        },
        {
            label: "Excluir",
            variant: "destructive" as const,
            onClick: onConfirm,
        },
    ],

    saveCancel: (onSave: () => void, onCancel: () => void, isSaving = false): DialogButton[] => [
        {
            label: "Cancelar",
            variant: "outline" as const,
            onClick: onCancel,
            disabled: isSaving,
        },
        {
            label: "Salvar",
            variant: "default" as const,
            onClick: onSave,
            loading: isSaving,
        },
    ],

    ok: (onOk: () => void): DialogButton[] => [
        {
            label: "OK",
            variant: "default" as const,
            onClick: onOk,
        },
    ],

    yesNo: (onYes: () => void, onNo: () => void): DialogButton[] => [
        {
            label: "Não",
            variant: "outline" as const,
            onClick: onNo,
        },
        {
            label: "Sim",
            variant: "default" as const,
            onClick: onYes,
        },
    ],
}
