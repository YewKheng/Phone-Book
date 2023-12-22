import { useState } from "react";

export const CreateContact = (props) => {
	const [contact, setContact] = useState({
		name: "",
		number: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setContact((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

	function addContact(event) {
		props.onAdd(contact);
		setContact({
			name: "",
			number: "",
		});
		event.preventDefault();
	}

	return (
		<div>
			<div className="flex flex-col justify-center items-center gap-3">
				<input
					type="text"
					placeholder="Name"
					name="name"
					value={contact.name}
					onChange={handleChange}
					className="border border-black rounded-md"
				/>
				<input
					type="text"
					placeholder="Number"
					name="number"
					value={contact.number}
					onChange={handleChange}
					className="border border-black rounded-md"
				/>
				<button className="w-[100px] bg-slate-300 rounded-xl p-1" onClick={addContact}>
					Add
				</button>
			</div>
		</div>
	);
};
