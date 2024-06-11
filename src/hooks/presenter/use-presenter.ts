import { gql, useQuery } from "@apollo/client";

export const ALL_PRESENTER = gql`
  {
    presenters: findAllPresenter {
      id,
      fullName,
      sex,
      fotoUrl,
    } 
  }
`;

export const usePresenter = () => {
    const { data, loading: isLoading,  error } = useQuery(ALL_PRESENTER);

    return {
        data,
        isLoading,
        error
    }
}