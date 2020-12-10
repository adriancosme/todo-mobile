import http from '../http-client';

class TaskService {
    getAll() {
        return http.get('/task?completed=false').then(res => res.data).catch(err => err.message);
    }

    getTasksCompleted() {
        return http.get('task?completed=true').then(res => res.data).catch(err => err.message);
    }

    createTask(task) {
        return http.post('/task', task).then(res => res.data).catch(err => err.message);
    }

    updateTask(id, task) {
        return http.put(`/task/${id}`, task).then(res => res.data).catch(err => err.message);
    }

    async deleteTask(id) {
        return await http.delete(`/task/${id}`).then(res => res.data).catch(err => err.message)
    }
}

export default new TaskService();