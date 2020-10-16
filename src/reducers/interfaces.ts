export interface JobsState {
    jobs: Array<any>;
    currentPage: number;
    count: number;
    totalPages: number;
    job: any;
    request: boolean;
}

export interface Tag {
    id: number;
    name: string;
}

export interface TagsState {
    tags: {
        [key: number]: Array<Tag>
    },
    current: Array<Tag>
}

export interface ActionsTags {
    type: string;
    payload: {
        current: Array<Tag>,
        tags_data?: {
            [key: number]: Array<Tag>
        }
    }
}

export interface ActionsJobs {
    type: string;
    payload?: {
        jobs?: Array<any>;
        currentPage?: number;
        count?: number;
        totalPages?: number;
        job?: any;
        request?: boolean;
    }
}
