export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}

export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PPROGRESS = 'IN_PPROGRESS',
    DONE = 'DONE',
}
