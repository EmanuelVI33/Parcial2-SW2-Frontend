import { gql, useMutation } from "@apollo/client";
import { useEffect } from "react";
import { toast } from "sonner";
import { ALL_PROJECT } from "./use-project";

// Definir la operación de mutación correctamente
const CREATE_PROJECT_MUTATION = gql`
  mutation createProject($inputProject: InputProject!) {
    projects: createProject(inputProject: $inputProject) {
      id
    }
  }
`;

export const useCreateProject = () => {
  const [createProject, { data, loading: isLoading, error }] = useMutation(CREATE_PROJECT_MUTATION, {
    refetchQueries: [ { query: ALL_PROJECT} ]
  });

  useEffect(() => {
    if (error) {
      const messages = error.message as string;
      console.log(messages);
      
      toast.error(messages);
    }
  }, [error]);

  useEffect(() => {
    console.log(data);
    if (data && !error && !isLoading) {
        toast.success(`Presentador registrado con el id ${data.projects.id}`);
    }
  }, [error, isLoading, data])

  return {
    createProject,
    isLoading,
    error
  };
};
