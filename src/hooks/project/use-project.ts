import { Project } from "@/interfaces/project";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export const ALL_PROJECT = gql`
{   
    projects: findAllProject {
        id,
        name,
        presenter {
        fullName,
        fotoUrl
        }
    } 
}`;

export const useProject = () => {
    const { data, loading: isLoading,  error } = useQuery(ALL_PROJECT);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
      console.log(data, isLoading, error);
      if (data && !isLoading && !error) {
        setProjects(data.projects)
        console.log(`Asignado ${projects}`);
      }
    }, [projects, data, isLoading, error, setProjects])

    return {
        projects,
        // data,
        isLoading,
        error
    }
}