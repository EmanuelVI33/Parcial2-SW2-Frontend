import { Presenter } from "./presenter";

export interface Project {
    id: string;
    name: string;
    description: string;
    coverUrl: string;
    videoUrl?: string;
    stati: ProjectStatus
    presenter: Presenter
}

enum ProjectStatus {
    EDITION = 'EDITION',
    PRODUCTION = 'PRODUCTION',
    PUBLIC = 'PUBLIC'
}