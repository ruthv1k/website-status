import task from '@/interfaces/task.type';
import { api } from './api';

type StatusResponse = {
    message: string;
    tasks: task[];
};

export const tasksApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllTasks: build.query<StatusResponse, null>({
            query: () => '/tasks',
            providesTags: ['Tasks'],
        }),
    }),
});

export const { useGetAllTasksQuery } = tasksApi;
