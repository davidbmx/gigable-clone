export interface JobsState {
    jobs: Array<Job>;
    currentPage: number;
    count: number;
    totalPages: number;
    jobDetail: any;
    request: boolean;
    similar: Array<Job>;
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
    payload: any;
    // payload: {
    //     jobs?: Array<Job>;
    //     currentPage?: number;
    //     count?: number;
    //     totalPages?: number;
    //     jobDetail?: Job;
    //     request?: boolean;
    //     similar?: Array<Job>;
    // }
}

export interface Job {
    id: number;
    lat: number;
    lng: number;
    overtime: boolean;
    globalNetwork: boolean;
    costGig: number;
    costHour: number;
    costActivity: number
    description: string;
    startDate: {
        date: string;
        time: string;
        iso: string;
        timezone: string;
        timestamp: number;
    };
    endDate: {
        date: string;
        time: string;
        iso: string;
        timezone: string;
        timestamp: string;
    };
    active: boolean;
    completedAt: string;
    paidAt: string;
    maxApplicants: number;
    timezone: string;
    recurrenceCode: string;
    user: {
        id: number;
        displayname: string;
        avatar: string;
        passwordUpdatedAt: string;
        rating: number;
    };
    currency: {
        id: number;
        name: string;
        code: string;
        symbol: string;
    };
    tags:Array<{id: number; name: string;}>;
    industry: {
        id: number;
        name: string;
    };
    status: string;
    deliveryGig:{
        id: number;
        dropoffLat: number;
        dropoffLng: number;
        costKm: number;
        ownVehicle: number;
        fullLicense: string;
        kms: number;
        addressId: string;
        categories: Array<{id: number; name: string;}>
    };
    address: {
        line1: string;
        line2: string;
        state: string;
        lat: number;
        lng: number;
        city: string;
        country: {
            id: number;
            code: string;
            name: string;
            phoneCode: string;
            active: number;
        };
        location: {
            id: number;
            location: number;
        };
        postal_code: string;
        formatted_address: string;
    };
    applicationId: string,
    applied: boolean;
    distance: number;
}
