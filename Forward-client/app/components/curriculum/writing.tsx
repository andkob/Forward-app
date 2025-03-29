import type { Writing } from "@/lib/redux/lessonSlice";

export default function Writing({writing}: {writing: Writing}) {
    return (
        <div>
        <p>{writing.instructions}</p>
        <textarea/>
        </div>
    );
}