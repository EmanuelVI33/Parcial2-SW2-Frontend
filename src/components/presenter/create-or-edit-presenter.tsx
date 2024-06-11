import { useState } from "react";
import { CustomDialog } from "../ui/custom-dialog"
import { FormCreateOrEditPresenter } from "./form-create-or-edit-presenter"

function CreateOrEditPresenter() {
    return (
        <CustomDialog title="Creando Presentador" titleButton="Crear Presentador">
            <FormCreateOrEditPresenter />
        </CustomDialog>
    )
}

export default CreateOrEditPresenter
