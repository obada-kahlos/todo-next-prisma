"use client";

import React from "react";

type TodoItemsProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

export const TodoItem = ({
  id,
  title,
  complete,
  toggleTodo,
}: TodoItemsProps) => {
  return (
    <li className="flex gap-1 items-center">
      <input
        type="checkbox"
        id={id}
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500">
        {title}
      </label>
    </li>
  );
};
