import { useState } from "react";

// Practice Session #4
export default function ToDoList() {
	const [task, setTask] = useState([]);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [draftTitle, setDraftTitle] = useState("");
	const [draftDesc, setDraftDesc] = useState("");
	const [taskId, setTaskId] = useState(null);

	const addTask = (event) => {
		event.preventDefault();

		if (!title.trim() || !desc.trim()) return;

		const newTask = {
			id: crypto.randomUUID(),
			title: title.trim(),
			desc: desc.trim(),
		};

		console.log(newTask.id);

		setTask((currentTasks) => [...currentTasks, newTask]);

		setDesc("");
		setTitle("");
	};

	const delTask = (id) => {
		setTask((task) => {
			return task.filter((item) => item.id !== id);
		});
	};

	const editTask = (id) => {
		const selectedTask = task.find((item) => item.id === id);
		if (!selectedTask) return;

		setDraftTitle(selectedTask.title);
		setDraftDesc(selectedTask.desc);
		setTaskId(id);
	};

	return (
		<>
			<div className="practice-session-wrap">
				<h1>
					Practice #4
					<br />
					To-Do List
				</h1>
				<div className="practice-feat-wrap">
					<div id="todo-wrap">
						<form id="todo-header" onSubmit={addTask}>
							<input
								placeholder="Put title here"
								onChange={(event) => setTitle(event.target.value)}
								value={title}
							/>
							<input
								placeholder="Put description here"
								value={desc}
								onChange={(event) => setDesc(event.target.value)}
							/>
							<button id="add-task">Add a Task</button>
						</form>

						<div id="todo-body">
							{task.map((task) => {
								return (
									<div className="task-wrap" key={task.id}>
										<div className="task-title">{task.title}</div>
										<div className="task-desc">{task.desc}</div>

										<button
											className="del-btn"
											onClick={() => delTask(task.id)}
										>
											Delete
										</button>
										<button
											className="edit-btn"
											onClick={() => editTask(task.id)}
										>
											Edit
										</button>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
