import { gql, useMutation } from "@apollo/client";
import { useEffect } from "react";
import { toast } from "sonner";
import { ALL_PROJECT } from "./use-project";

// Definir la operación de mutación correctamente
const DELETE_PROJECT = gql`
  mutation deleteProject($projectId: String) {
    message: deleteProject(projectId: $projectId) 
  }
`;

export const useDeleteProject = () => {
  const [deleteProject, { data: dataDelete, loading: isLoadingDelete, error,  }] = useMutation(DELETE_PROJECT, {
    refetchQueries: [ { query: ALL_PROJECT} ]
  });

  useEffect(() => {
    console.log(dataDelete);
     if (dataDelete && !error && !isLoadingDelete) {
        toast.success(dataDelete.message);
    }
  }, [error, dataDelete, isLoadingDelete])

  return {
    deleteProject,
    isLoadingDelete,
  };
};