import { useState } from "react";
import { CreateContact } from "./CreateContact";
import { Contact } from "./Contact";

export const App = () => {
	const [contacts, setContacts] = useState([]);

	function addContact(newContact) {
		setContacts((prev) => {
			return [...prev, newContact];
		});
	}

	function deleteCard(id) {
		setContacts((prev) => {
			return prev.filter((item, index) => {
				return index !== id;
			});
		});
	}
	return (
		<div>
			<div className="flex justify-center items-center py-5">
				<h1 className="text-3xl">Phone Book</h1>
			</div>
			<CreateContact onAdd={addContact} />
			{contacts.map((item, index) => {
				return (
					<Contact
						key={index}
						id={index}
						name={item.name}
						number={item.number}
						onDelete={deleteCard}
					/>
				);
			})}
		</div>
	);
};
