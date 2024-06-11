import { gql, useMutation } from "@apollo/client";
import { ALL_PRESENTER } from "./use-presenter";
import { useEffect } from "react";
import { toast } from "sonner";

// Definir la operación de mutación correctamente
const CREATE_PRESENTER_MUTATION = gql`
  mutation createPresenter($inputPresenter: InputPresenter!) {
    presenter: createPresenter(inputPresenter: $inputPresenter) {
      id
    }
  }
`;

export const useMutationPresenter = () => {
  const [createPresenter, { data, loading: isLoading, error }] = useMutation(CREATE_PRESENTER_MUTATION, {
    refetchQueries: [ { query: ALL_PRESENTER} ]
  });

  useEffect(() => {
    if (error) {
      // const message = error.response.data.message;
      const messages = error.message as string;
      console.log(messages);
      
      toast.error(messages);
    }
  }, [error]);

  useEffect(() => {
    console.log(data);
    if (data && !error && !isLoading) {
        toast.success(`Presentador registrado con el id ${data.presenter.id}`);
    }
  }, [error, isLoading, data])

  return {
    createPresenter,
    isLoading,
    error
  };
};
