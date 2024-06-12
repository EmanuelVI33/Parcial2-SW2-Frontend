import { Presenter } from "@/interfaces/presenter";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";

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
    const [presenters, setPresenters] = useState<Presenter[]>([]);

    useEffect(() => {
      console.log(data, isLoading, error);
      if (data && !isLoading && !error) {
        setPresenters(data.presenters)
        console.log(`Asignado ${presenters}`);
      }
    }, [presenters, data, isLoading, error, setPresenters])

    return {
        presenters,
        // data,
        isLoading,
        error
    }
}