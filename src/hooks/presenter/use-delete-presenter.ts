import { gql, useMutation } from "@apollo/client";
import { ALL_PRESENTER } from "./use-presenter";
import { useEffect } from "react";
import { toast } from "sonner";

// Definir la operación de mutación correctamente
const DELETE_PRESENTER = gql`
  mutation deletePresenter($presenterId: String) {
    message: deletePresenter(presenterId: $presenterId) 
  }
`;

export const useDeletePresenter = () => {
  const [deletePresenter, { data: dataDelete, loading: isLoadingDelete, error,  }] = useMutation(DELETE_PRESENTER, {
    refetchQueries: [ { query: ALL_PRESENTER} ]
  });

  useEffect(() => {
    console.log(dataDelete);
     if (dataDelete && !error && !isLoadingDelete) {
        toast.success(dataDelete.message);
    }
  }, [error, dataDelete, isLoadingDelete])

  return {
    deletePresenter,
    isLoadingDelete,
  };
};