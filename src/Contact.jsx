import React from "react";

export const Contact = (props) => {
	function handleClick() {
		props.onDelete(props.id);
	}

	return (
		<div className="flex w-[200px] h-[100px] justify-center items-center gap-3 border rounded-2xl border-black">
			<div>
				<p>{props.name}</p>
				<p>{props.number}</p>
			</div>
			<button className="w-[100px] bg-slate-300 rounded-xl p-1" onClick={handleClick}>
				Delete
			</button>
		</div>
	);
};
