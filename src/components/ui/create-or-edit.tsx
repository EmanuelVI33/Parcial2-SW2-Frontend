import { ReactElement } from "react"
import { CustomDialog } from "../ui/custom-dialog"

export default function CreateOrEdit({children} : {children: ReactElement}) {
    return (
        <CustomDialog title="Creando Presentador" titleButton="Crear Presentador">
            {children}
        </CustomDialog>
    )
}
